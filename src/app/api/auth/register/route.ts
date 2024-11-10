import { NextResponse } from "next/server";
import { AuthRegisterService } from "@/app/infrastructure/services/authRegister.service";
import { IRegisterRequest } from "@/app/core/application/dto/register";

export async function POST(req: Request) {
    const requestBody = await req.json();
    const register: IRegisterRequest = requestBody;
    try {
        const useRegisterService = new AuthRegisterService();
        const registerResponse = await useRegisterService.register(register);
        return NextResponse.json(registerResponse, { status: 200 });
    } catch (error) {
        console.error("Error al registrar:", error);
        return NextResponse.json({ message: "Error al registrar", status: 500 });
    }

}