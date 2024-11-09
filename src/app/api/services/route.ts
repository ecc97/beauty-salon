import { IServiceRequest } from "@/app/core/application/dto";
import { useServicesService } from "@/app/infrastructure/helpers/hooks/useServices";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const services = await useServicesService.getServices();
        return NextResponse.json(services);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error obteniendo los servicios"}, {status: 500})
        
    }
}

export async function POST(req: Request) {
    const requestBody = await req.json();
    const service: IServiceRequest = requestBody;

    try {
        const newService = await useServicesService.addService(service);
        return NextResponse.json(newService, {status: 201});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error agregando el servicio"}, {status: 500})
    }
}