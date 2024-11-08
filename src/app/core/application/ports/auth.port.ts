import { ILoginRequest, ILoginResponse } from "../dto/auth";

export interface PAuth {
    /**
     * Login user
     * @param req
     * Esto recibe unos parámetros
     * @param {ILoginRequest} - Login request
     * @return response 
     * @return {Promise<ILoginResponse>}Login response
     */
    login(req: ILoginRequest): Promise<ILoginResponse>
}