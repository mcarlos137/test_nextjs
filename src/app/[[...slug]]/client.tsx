'use client'
 
import dynamic from 'next/dynamic'

 
const App = dynamic(() => import('../../App'), { ssr: false, loading: () => <p className='text-red-500'>Loading...</p> })
 
export const ClientOnly = () => {
  return <App />
}