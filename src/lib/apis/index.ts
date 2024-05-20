export enum API_METHODS {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export const makeApiRequest = async (
  method: API_METHODS,
  url: string,
  data?: any,
  cookies?: any
): Promise<Response> => {
  return await fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json', Cookie: cookies },
  })
}
