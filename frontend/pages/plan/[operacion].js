import Head from 'next/head'
import DashboardComponent from '../../components/dashboardComponent'
import BreadcrumbComponent from '../../components/breadcrumbComponent'
import Link from "next/link"
import AlertComponent from '../../components/alertComponent'
// component form
import CampoTextoNormalComponent from "../../components/campoTextoNormalComponent"
import CampoTextAreaNormalComponent from "../../components/campoTextAreaNormalComponent"
import ModalComponent from '../../components/modalComponent'
// hook
import {useRouter} from 'next/router'

export default function Formulario(){
    const router = useRouter()
    let {operacion} = router.query
    const ruta= [
      {
        ruta:"/",
        textLink:"Home"
      },
      {
        ruta:"/Plan",
        textLink:"Plan"
      },
      {
        textLink:operacion
      }
    ]

    let contenido=(
        <>
            <h1> vista formulario del modulo plan </h1>
        </>
    )

    return(
        <>
        <Head>
          <title>WISP | Modulo Plan Formulario</title>
          <meta name="description" content="ss" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <DashboardComponent contenidoDasborad={contenido}/>
      </>
    )
}