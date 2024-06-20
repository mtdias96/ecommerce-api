export interface IRequest {
  headers: Record<string, string>;

}
export interface IResponse {
  statusCode: number;
  body: Record<string, any> | null;
}

export interface IData{
  data: Record<string, any>;
  accountId?: string | undefined
}


export interface IMiddleware{
  handle(req: IRequest): Promise<IResponse | IData>;
}


