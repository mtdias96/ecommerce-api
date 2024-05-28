export interface IRequest {
  body: Record<string | number, any>
  headers?: Record<string, any> | null
  params?: Record<string, string> | null
}
export interface IResponse {
  statusCode: number;
  body: Record<string, any> | null
}

export interface IController {
  handle(req: IRequest): Promise<IResponse>
}

export interface IProduct {
  name: string;
  price: number;
  size: string[];
  color: string[];
  description: string;
  quantity: number;
  image: number[];
  categoryId: number;
  brand: string;
}

