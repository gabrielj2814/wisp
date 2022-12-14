import Head from 'next/head'
import DashboardComponent from '../../components/dashboardComponent'
import {useRouter} from 'next/router'
import BreadcrumbComponent from '../../components/breadcrumbComponent'
import Link from "next/link"


export default function formulario(props){
  const router = useRouter()
  const { operacion } = router.query
  // migas de pan
  const ruta= [
    {
      ruta:"/",
      textLink:"Home"
    },
    {
      ruta:"/cliente",
      textLink:"Cliente"
    },
    {
      textLink:operacion
    }
  ]

  let contenido=(
    <section className='min-vh-100 modulo-cliente-formulario'>
      <BreadcrumbComponent ruta={ruta}/>
      <div className='d-flex mb-5 px-5'>
            <Link href="/cliente" className="btn btn-primary">Regresar</Link>
      </div>
      <h1 className=' text-white text-center'>Formulario Cliente</h1>
    </section>
  )
  return(
  <>
    <Head>
    <title>WISP | Modulo Cliente formulario</title>
    <meta name="description" content="ss" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <DashboardComponent contenidoDasborad={contenido}/>
  </>
  )
}