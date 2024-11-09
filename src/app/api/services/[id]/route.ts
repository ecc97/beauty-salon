import { IServiceRequest } from "@/app/core/application/dto";
import { useServicesService } from "@/app/infrastructure/helpers/hooks/useServices";
import { NextResponse } from "next/server";

export async function PUT(req: Request, {params}: { params: Promise<{id: number}>}) {
    try {
        const service: IServiceRequest = await req.json();
        const id = (await params).id
        const updatedService = await useServicesService.updateService(service, id);

        return NextResponse.json(updatedService, { status: 200} )
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error actualizando servicio:' }, { status: 500 } )
    }
}

export async function DELETE(req: Request, {params}: { params: Promise<{id: number}>}) {
    try {
        const id = (await params).id
        await useServicesService.deleteService(id);
        return NextResponse.json({ message: 'Servicio eliminado con éxito' }, { status: 200 } )
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error eliminando servicio:' }, { status: 500 } )
    }
}