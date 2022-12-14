import Head from 'next/head'
import DashboardComponent from '../../components/dashboardComponent'
import {useRouter} from 'next/router'

export default function formulario(props){
    const router = useRouter()
    const { operacion } = router.query
    let contenido=(
    <>
        <h1>Modulo cliente formulario {operacion}</h1>
    </>
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