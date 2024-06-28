export interface IFilter {
  brand?: string;
  color?: string;
  size?: string;
}

export interface IFilterRequest {
  body: {
    brand?: string;
    color?: string;
    size?: string;
  };
}
