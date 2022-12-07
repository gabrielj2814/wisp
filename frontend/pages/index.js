import Head from 'next/head'
import DashboardComponent from '../components/dashboardComponent'
// componenetes de formulario
import BotonComponent from '../components/botonComponent'
import CampoTextoNormalComponent from '../components/campoTextoNormalComponent'
import CampoPasswordNormalComponent from '../components/campoPasswordNormalComponent'

export default function Home() {

  function mensaje(){
    alert("hola")
  }

  function handlerInputText(e){
    let input = e.target
    console.log(input.value)
    document.getElementById(input.id+"-mensaje").innerText=input.value
  }


  const contenido=(
    <>
      <h1>contenido</h1>
      <BotonComponent clasesStyle="btn-primary" />
      <CampoTextoNormalComponent labelCampo="label campo" id="idCampo" name="nameCampo" clasesStyle="form-control" placeholder="campo test" evento={handlerInputText}/>
      <CampoPasswordNormalComponent labelCampo="label pass" id="passCampo" name="passCampo" clasesStyle="form-control" placeholder="campo pass" evento={handlerInputText}/>
    </>
  )
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="ss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO: adtracción de campos a componentes reutilizables: select, radio doble */}
      <DashboardComponent contenidoDasborad={contenido}/>
    </>
  )
}
