import { ILoginRequest, ILoginResponse } from "../dto/auth";
import { IRegisterRequest, IRegisterResponse } from "../dto/register";

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

export interface PRegister {
    /**
     * Register user
     * @param req
     * Esto recibe unos parámetros
     * @param {IRegisterRequest} - Register request
     * @return response
     * @return {Promise<IRegisterResponse>} Register response
     */
    register(req: IRegisterRequest): Promise<IRegisterResponse>
}