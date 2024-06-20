declare namespace Express{
  interface Request {
    metadata: {
      accountId: string | undefined
    }
  }
}
