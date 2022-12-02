import Head from 'next/head'
import DashboardComponent from '../components/dashboardComponent'

export default function Home() {
  const contenido=(
    <h1>contenido</h1>
  )
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="ss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardComponent contenidoDasborad={contenido}/>
    </>
  )
}
