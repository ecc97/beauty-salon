import { NextResponse } from "next/server";
import { IClientRequest, IClientsResponse } from "@/app/core/application/dto/clients";
import { useClientsService } from "@/app/infrastructure/helpers/hooks/useClients";

export async function PUT(req: Request, {params}: { params: Promise<{id: number}>}) {
    try {
        const client: IClientRequest = await req.json();
        const id = (await params).id
        const updatedClient = await useClientsService.updateClient(client, id);
        return NextResponse.json(updatedClient, { status: 200} )
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error actualizando cliente:' }, { status: 500 } )
    }
}

export async function DELETE(req: Request, {params}: { params: Promise<{id: number}>}) {
    try {
        const id = (await params).id
        await useClientsService.deleteClient(id);
        return NextResponse.json({ message: 'Cliente eliminado con éxito' }, { status: 200 } )
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error eliminando cliente:' }, { status: 500 } )
    }
}