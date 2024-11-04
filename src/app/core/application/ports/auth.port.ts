import { ILoginRequest, ILoginResponse } from "../dto/auth";

export interface PAuth {
    /**
     * 
     * @param req
     * Esto recibe unos parámetros
     * @param {ILoginRequest}
     * @para
     */
    login(req: ILoginRequest): Promise<ILoginResponse>
}