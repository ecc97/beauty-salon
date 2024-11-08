const defaultBaseUrl = "https://beautysalongates-production.up.railway.app/api/v1"

export class HttpClient{
  private baseUrl : string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || defaultBaseUrl;
  }

  private async getHeader(token?: string) {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }
    //si esta autenticado
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
    return headers
  }

  private async handleResponse(response: Response){
    if (!response.ok) {
      const errorData = await response.json();
      console.log("Error en la peticion:", errorData)
      // throw new Error(errorData || "Ocurrio un error en la peticion")
      throw errorData
    }
    if (response.status === 204) return null;
    return await response.json();
  }

  async get<T>(url: string, token?: string): Promise<T> {
    const headers = await this.getHeader(token);
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "GET",
      cache: "no-store"
    })
    return this.handleResponse(response)
  }

  async delete<T>(url: string, token?: string): Promise<T>{
    const headers = await this.getHeader(token);
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "DELETE",
    })
    return this.handleResponse(response)
  }

  async post <T, B> (url: string, body: B, token?: string): Promise<T>{
    const headers = await this.getHeader(token);
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    })
    return this.handleResponse(response);
  }

  async put <T, B> (url: string, body:B, token?: string): Promise<T>{
    const headers = await this.getHeader(token);
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "PUT",
      body : JSON.stringify(body),
    })
    return this.handleResponse(response);
  }
}