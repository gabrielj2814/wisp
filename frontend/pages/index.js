import Head from 'next/head'
import DashboardComponent from '../components/dashboardComponent'
// componenetes
import BreadcrumbComponent from '../components/breadcrumbComponent'
// TODO: agregar un component del tipo file con barra de progreso de carga

export default function Home() {
    // migas de pan
    const ruta= [
      {
        textLink:"Home"
      },
    ]

  const contenido=(
    <section className="min-vh-100 vista-home">
      <BreadcrumbComponent ruta={ruta}/>
    </section>
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
