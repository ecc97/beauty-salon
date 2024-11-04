import React from 'react'
import { authOptions } from '@/app/api/auth'
import { Services } from '@/app/infrastructure/services/services.service'
import { DefaultSession } from 'next-auth'
import { getServerSession } from 'next-auth'

interface Session extends DefaultSession {
  user: {
    id?: string;
    token?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

const useServices = new Services()

export default async function ServicesPage() {
  const session = await getServerSession(authOptions) as Session;
  if (!session) {
    return <div>Loading...</div>
  }
  const token = session.user.token as string
  const services = await useServices.getServices(token)
  console.log(services)
  return (
    <div>ServicesPage</div>
  )
}
