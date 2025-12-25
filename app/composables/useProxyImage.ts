export const useProxyImage = (url: string) => {
  const proxyUrl = `/api/proxyImage?url=${encodeURIComponent(url)}`;
  return proxyUrl;
};
