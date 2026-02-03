export interface IPagination<T> {
  data: T[];
  meta: IPaginationMeta;
}

export interface IPaginationMeta {
  per_page: number;
  page: number;
  total_pages: number;
  total_items?: number;
  has_next?: boolean;
  has_prev?: boolean;
}

export interface IPaginationPayload {
  per_page?: number;
  page?: number;
}

export interface IPaginationOptions {
  orderBy?: Record<string, "asc" | "desc">;
}
