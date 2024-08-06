export interface IRequest {
  body: Record<string, any>
  headers: Record<string, any>
  params: Record<string, string>
  accountId?: string | null
}

export interface IResponse {
  statusCode: number;
  body: Record<string, any> | null
}

export interface IController {
  handle(req: IRequest): Promise<IResponse>,
}
