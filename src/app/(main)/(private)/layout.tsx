import React from 'react'
import AuthGuard from './dashboard/guard/AuthGuard'
import Layout from '@/components/ui/layout/Layout'

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <Layout>
        {children}
      </Layout>
    </AuthGuard>
  )
}
