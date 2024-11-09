import { IServiceRequest } from "../dto";

export interface PService {
    /**
     * Get All Services
     * Service requests
     * @param token 
     * @param page 
     * @param size
     * @returns {Promise<IServiceResponse>}Service response
     */
    getServices(page?: number, size?: number): Promise<IServiceResponse>;

    /**
     * Add a new service
     * @param token service token auth
     * @param {IServiceRequest} - Service request 
     * @returns {Promise<IServices>} Service response
     */
    addService(req: IServiceRequest): Promise<IServices>;    

    /**
     * Update a service
     * @param token service token auth
     * @param id - Service identifier
     * @param {IServiceRequest} - Service request
     * @returns {Promise<IServices>}
     */
    updateService(req: IServiceRequest, id: number): Promise<IServices>;

    /**
     * Delete a service
     * @param token service token auth
     * @param id - Service identifier
     * @returns {Promise<void>}
     */
    deleteService(id: number): Promise<void>;
}