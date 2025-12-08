export interface ProductResponse {
  version: string;
  status: string;
  ok: boolean;
  message: string;
  pagination: Pagination;
  data: ProductItem[];
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}

export interface ProductItem {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  url: string;
  status: string;
  updated_at: string;
  created_at: string;
  categories: string[];
}
