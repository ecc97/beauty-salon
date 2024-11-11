import { IClientRequest, IClientsResponse, IClient } from "../dto/clients";

export interface PClient {
    /**
     * Get All Clients
     * Client requests
     * @param page 
     * @param size
     * @returns {Promise<IClientsResponse>}Client response
     */
    getAllClients(page?: number, size?: number): Promise<IClientsResponse>;

    /**
     * Add a new client
     * @param {IClientRequest} - Client request 
     * @returns {Promise<IClients>} - Client response
     */
    createClient(req: IClientRequest): Promise<IClient>;    

    /**
     * Update a client
     * @param id - Client identifier
     * @param {IClientsRequest} - Client request
     * @returns {Promise<IClient>}
     */
    updateClient(req: IClientRequest, id: number): Promise<IClient>;

    /**
     * Delete a client
     * @param id - client identifier
     * @returns {Promise<void>}
     */
    deleteClient(id: number): Promise<void>;
}