import { NextResponse } from "next/server";
import { IClientRequest, IClientsResponse } from "@/app/core/application/dto/clients";
import { useClientsService } from "@/app/infrastructure/helpers/hooks/useClients";

export async function POST(req: Request) {
    try {
        const client: IClientRequest = await req.json();
        const newClient = await useClientsService.createClient(client);
        return NextResponse.json(newClient, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error creando cliente" }, { status: 500 });
    }
}