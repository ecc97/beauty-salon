import { IRegisterRequest, IRegisterResponse } from "@/app/core/application/dto/register";
import { PRegister } from "@/app/core/application/ports";
import { HttpClient } from "../utils";

export class AuthRegisterService implements PRegister {
    private clientHttp: HttpClient
    private basePath: string = "auth"

    constructor() {
        this.clientHttp = new HttpClient()
    }
    async register(req: IRegisterRequest): Promise<IRegisterResponse> {
        return this.clientHttp.post<IRegisterResponse, IRegisterRequest>(`${this.basePath}/register`, req)
    }   
}