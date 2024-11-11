import React from 'react'
import { useClientsService } from '@/app/infrastructure/helpers/hooks/useClients';
import ClientTemplate from '@/components/ui/templates/clients/ClientsTemplate';


interface IParamsProps {
    searchParams: {
        page?: string;
        size?: string;
        name?: string
    }
}

export default async function ClientsPage({ searchParams }: IParamsProps) {
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 9;
    const clients = await useClientsService.getAllClients(page, size)
    // console.log(clients)
    return (
        <ClientTemplate dataClient={clients} />
    )
}
