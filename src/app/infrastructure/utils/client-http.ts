import { authOptions } from "@/app/api/auth";
import { DefaultSession, getServerSession } from "next-auth";
const defaultBaseUrl = "https://beautysalongates-production.up.railway.app/api/v1"

interface Session extends DefaultSession {
  user: {
      id?: string;
      token?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
  };
}

export class HttpClient{
  private baseUrl : string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || defaultBaseUrl;
  }

  private async getHeader() {
    const session = (await getServerSession(authOptions)) as Session | null;
    const token = session?.user?.token
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
      try {
        const errorData = await response.json();
        console.log("Error en la petición:", errorData);
        throw new Error(errorData.message || "Ocurrió un error en la petición");
      } catch (error) {
        console.error("Error al parsear la respuesta de error:", error);
        throw new Error("Error inesperado en la petición");
      }
    }

    // Maneja el caso de respuesta vacía (204 No Content)
    if (response.status === 204) return {};

    // Intenta parsear el JSON, pero maneja el caso en que la respuesta esté vacía
    try {
      return await response.json();
    } catch (error) {
      console.error("Error al parsear el JSON:", error);
      throw new Error("La respuesta no está en formato JSON.");
    }
  }

  async get<T>(url: string): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "GET",
      cache: "no-store"
    })
    return this.handleResponse(response)
  }

  async delete<T>(url: string): Promise<T>{
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "DELETE",
    })
    return this.handleResponse(response)
  }

  async post <T, B> (url: string, body: B): Promise<T>{
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    })
    return this.handleResponse(response);
  }

  async put <T, B> (url: string, body:B): Promise<T>{
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "PUT",
      body : JSON.stringify(body),
    })
    return this.handleResponse(response);
  }
}