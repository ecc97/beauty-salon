import { IServiceRequest } from "@/app/core/application/dto";
import { PService } from "@/app/core/application/ports";
import { HttpClient } from "../utils";

export class Services implements PService {
    private httpClient: HttpClient

    constructor() {
        this.httpClient = new HttpClient()
    }
 
    async getServices(page?: number, size?: number): Promise<IServiceResponse>{
        try {
            const response = this.httpClient.get<IServiceResponse>(`services?page=${page}&size=${size}`)
            return response;
        } catch (error) {
            console.log('Error obteniendo servicios:', error)
            throw error
        }
    }

    async addService(req: IServiceRequest): Promise<IServices> {
        try {
            const response = this.httpClient.post<IServices, IServiceRequest>(`services`, req)
            return response;
        } catch (error) {
            console.log('Error agregando servicio:', error)
            throw error
        }
    }
    
    async updateService(req: IServiceRequest, id: number): Promise<IServices> {
        try {
            const response = this.httpClient.put<IServices, IServiceRequest>(`services/${id}`, req)
            return response;
        } catch (error) {
            console.log('Error actualizando servicio:', error)
            throw error
        }
    }

    async deleteService(id: number): Promise<void> {
        try {
            const response = await this.httpClient.delete<void>(`services/${String(id)}`);
            return response
        } catch (error) {
            console.log('Error eliminando servicio:', error)
            throw error
        }
    }
}