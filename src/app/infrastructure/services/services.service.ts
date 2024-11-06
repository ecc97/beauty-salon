import { IServiceRequest } from "@/app/core/application/dto";
import { HttpClient } from "../utils";

export class Services {
    private httpClient: HttpClient

    constructor() {
        this.httpClient = new HttpClient()
    }
 
    async getServices(token: string, page: number, size: number): Promise<IServiceResponse>{
        try {
            const response = this.httpClient.get<IServiceResponse>(`services?page=${page}&size=${size}`, token)
            return response;
        } catch (error) {
            console.log('Error obteniendo servicios:', error)
            throw error
        }
    }

    async addSevice(req: IServiceRequest, token: string): Promise<IServices> {
        try {
            const response = this.httpClient.post<IServices, IServiceRequest>(`services`, req, token)
            return response;
        } catch (error) {
            console.log('Error agregando servicio:', error)
            throw error
        }
    }
}