import React from 'react'
import { authOptions } from '@/app/api/auth'
import { Services } from '@/app/infrastructure/services/services.service'
import { DefaultSession } from 'next-auth'
import { getServerSession } from 'next-auth'
import Header from '@/components/ui/organisms/header/Header'
import ServiceTemplate from '@/components/ui/templates/service/ServiceTemplate'

interface Session extends DefaultSession {
  user: {
    id?: string;
    token?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

interface IParamsProps {
  searchParams: {
    page?: string;
    size?: string;
    name?: string
  }
}

const useServices = new Services()

export default async function ServicesPage({ searchParams }: IParamsProps) {
  const session = await getServerSession(authOptions) as Session;
  if (!session) {
    return <div>Loading...</div>
  }
  const token = session.user.token as string
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 9;
  const name = searchParams.name || "";
  const services = await useServices.getServices(token, page, size)
  console.log(services)
  return (
    <ServiceTemplate dataService={services} token={token} />
  )
}
