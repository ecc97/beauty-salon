import { IClientRequest, IClientsResponse, IClient } from "@/app/core/application/dto/clients";
import { PClient } from "@/app/core/application/ports";
import { HttpClient } from "../utils";

export class Clients implements PClient {
    private httpClient: HttpClient

    constructor() {
        this.httpClient = new HttpClient()
    }
 
    async getAllClients(page?: number, size?: number): Promise<IClientsResponse>{
        try {
            const response = this.httpClient.get<IClientsResponse>(`clients?page=${page}&size=${size}`)
            return response;
        } catch (error) {
            console.log('Error obteniendo servicios:', error)
            throw error
        }
    }

    async createClient(req: IClientRequest): Promise<IClient> {
        try {
            const response = this.httpClient.post<IClient, IClientRequest>(`clients`, req)
            return response;
        } catch (error) {
            console.log('Error agregando servicio:', error)
            throw error
        }
    }
    
    async updateClient(req: IClientRequest, id: number): Promise<IClient> {
        try {
            const response = this.httpClient.put<IClient, IClientRequest>(`clients/${id}`, req)
            return response;
        } catch (error) {
            console.log('Error actualizando servicio:', error)
            throw error
        }
    }

    async deleteClient(id: number): Promise<void> {
        try {
            const response = await this.httpClient.delete<void>(`clients/${String(id)}`);
            return response
        } catch (error) {
            console.log('Error eliminando servicio:', error)
            throw error
        }
    }
}