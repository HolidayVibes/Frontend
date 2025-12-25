import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const url = getQuery(event).url as string;

  if (!url) {
    throw createError({ statusCode: 400, statusMessage: "Missing URL" });
  }

  return await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
  )
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Network response was not ok.");
    })
    .then((data) => console.log(data.contents));
});
