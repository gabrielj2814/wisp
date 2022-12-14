import Head from 'next/head'
import DashboardComponent from '../components/dashboardComponent'
// componenetes
import BreadcrumbComponent from '../components/breadcrumbComponent'
// TODO: crear el component textarear
// TODO: agregar la propiedad para indicar que campo es obligatorio (agrega un (*) en el label de campo) esto no aplica a los radios o los checkbox
// TODO: formulario 
// TODO: agregar una mejor presentación para mostrar los datos para la vista movil para las vistas iniciales de los modulos ()

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
