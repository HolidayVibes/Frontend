import type { IPagination } from "#shared/interfaces/IPagination";

export const useBasePagination = <T>(): IPagination<T> => ({
  data: [] as T[],
  meta: {
    has_next: false,
    has_prev: false,
    page: 1,
    per_page: 12,
    total_items: 12,
    total_pages: 1,
  },
});
