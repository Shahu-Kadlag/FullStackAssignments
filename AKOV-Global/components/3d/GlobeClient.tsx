"use client"
import dynamic from 'next/dynamic'

const GlobeScene = dynamic(() => import('./GlobeScene'), {
    ssr: false,
    loading: () => <div className="w-full h-[400px] md:h-[600px] bg-gray-50 animate-pulse rounded-full"></div>
})

export default function GlobeClient() {
  return <GlobeScene />
}
