import type { H3Event } from "h3";
import { appendHeader, getRequestHeaders } from "h3";

export function mergeSsrCookies(
  existingCookies: string,
  setCookies: string[],
): string {
  const existing = Object.fromEntries(
    existingCookies
      .split(";")
      .filter(Boolean)
      .map((c) => {
        const eqIndex = c.indexOf("=");
        return [c.slice(0, eqIndex).trim(), c.slice(eqIndex + 1).trim()];
      }),
  );

  const updated = setCookies.reduce<Record<string, string>>((acc, raw) => {
    const separatorIndex = raw.indexOf(";");
    const nameValue =
      separatorIndex !== -1 ? raw.slice(0, separatorIndex) : raw;
    const eqIndex = nameValue.indexOf("=");

    if (eqIndex === -1) return acc;

    const name = nameValue.slice(0, eqIndex).trim();
    const value = nameValue.slice(eqIndex + 1).trim();

    return { ...acc, [name]: value };
  }, {});

  return Object.entries({ ...existing, ...updated })
    .map(([name, value]) => `${name}=${value}`)
    .join("; ");
}

export async function applySsrRefreshedCookies(
  event: H3Event,
  setCookies: string[],
): Promise<void> {
  // Прокидываем новые куки браузеру
  for (const cookie of setCookies) {
    appendHeader(event, "set-cookie", cookie);
  }

  // Обновляем куки в текущем SSR запросе для retry
  const requestHeaders = getRequestHeaders(event);
  event.node.req.headers.cookie = mergeSsrCookies(
    requestHeaders.cookie ?? "",
    setCookies,
  );
}
