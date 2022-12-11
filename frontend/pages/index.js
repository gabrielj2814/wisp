import Head from 'next/head'
import DashboardComponent from '../components/dashboardComponent'
// componenetes de formulario
import BotonComponent from '../components/botonComponent'
import CampoTextoNormalComponent from '../components/campoTextoNormalComponent'
import CampoPasswordNormalComponent from '../components/campoPasswordNormalComponent'
import CampoSelectdNormalComponent from '../components/campoSelectNormalComponent'
import CampoRadiodNormalComponent from '../components/campoRadioNormalComponent'
import CampoCheckboxdNormalComponent from '../components/campoCheckboxNormalComponent'



export default function Home() {

  let lista=[
    {
      value:1,
      valueOption:"texto"
    },
    {
      value:2,
      valueOption:"texto 2"
    },
    {
      value:3,
      valueOption:"texto 3"
    }
  ]

  function mensaje(){
    alert("hola")
  }

  function handlerInputText(e){
    let input = e.target
    console.log(input.value)
    document.getElementById(input.id+"-mensaje").innerText=input.value
  }

  function handlerInputRadio(e){
    let input = e.target
    alert(input.value)
  }


  const contenido=(
    <>
      <h1>contenido</h1>
      <BotonComponent clasesStyle="btn-primary" />
      <CampoTextoNormalComponent labelCampo="label campo" id="idCampo" name="nameCampo" clasesStyle="form-control" placeholder="campo test" evento={handlerInputText}/>
      <CampoPasswordNormalComponent labelCampo="label pass" id="passCampo" name="passCampo" clasesStyle="form-control" placeholder="campo pass" evento={handlerInputText}/>
      <CampoSelectdNormalComponent labelCampo="campo select" id="selectCampo" name="selectCampo" clasesStyle="form-control" evento={handlerInputText} opcionesSelect={lista}/>
      <CampoRadiodNormalComponent labelCampo="campo radio a" value={"a"} id="radio1" name="radioCampo" clasesStyle="" />
      <CampoRadiodNormalComponent labelCampo="campo radio b" value={"b"} id="radio2" name="radioCampo" clasesStyle="" />
      <CampoCheckboxdNormalComponent labelCampo="campo checkbox a" value={"a"} id="checkbox1" name="checkBoxCampo" clasesStyle="" />
    </>
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
