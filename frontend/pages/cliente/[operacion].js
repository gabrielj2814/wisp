import Head from 'next/head'
import DashboardComponent from '../../components/dashboardComponent'
import {useRouter} from 'next/router'
import BreadcrumbComponent from '../../components/breadcrumbComponent'
import Link from "next/link"
// component form
import CampoTextoNormalComponent from "../../components/campoTextoNormalComponent"
import CampoTextAreaNormalComponent from "../../components/campoTextAreaNormalComponent"


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

  function cargarFoto(e){
    let $imagen = document.querySelector(".imagen")
    let {target} = e
    let file = target.files[0]
    console.log(file)
    if(file){
      const render = new FileReader()
      render.addEventListener("load", (e) => {
        let readerTarget = e.target
        const img = document.createElement("img");
        img.src = readerTarget.result;
        img.classList.add("preview");
        $imagen.textContent=""
        $imagen.appendChild(img)
      })
      render.readAsDataURL(file)
    }
    else{
      $imagen.textContent="Seleccionar Imagen"
    }
  }

  function cancelarOnSubmit(e){
    e.preventDefault()
  }

  let contenido=(
    <section className='min-vh-100 modulo-cliente-formulario'>
      <BreadcrumbComponent ruta={ruta}/>
      <div className='d-flex mb-5 px-5'>
            <Link href="/cliente" className="btn btn-primary">Regresar</Link>
      </div>
      <h1 className=' text-white text-center mb-2'>Formulario Cliente</h1>
      <div className='text-white text-center mb-5'>los campos con <span className='text-danger'>(*)</span> son obligatorios</div>
      <div className=' container-fluid'>
        <form id="formularioCliente" onSubmit={cancelarOnSubmit} className=' row justify-content-center'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11'>
              <div className=' row justify-content-center mb-4'>
                <div className='col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                  <CampoTextoNormalComponent id="cedula" name="cedula" campoObligatorio="1" labelCampo="Cedula" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="CEDULA"/>
                </div>
                <div className='col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                  <CampoTextoNormalComponent id="nombres" name="nombres" campoObligatorio="1" labelCampo="Nombres" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="NOMBRE"/>
                </div>
                <div className='col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                  <CampoTextoNormalComponent id="apellidos" name="apellidos" campoObligatorio="1" labelCampo="Apellidos" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="APELLIDOS"/>
                </div>
              </div>
              <div className=' row justify-content-center mb-4'>
                <div className='col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                  <CampoTextoNormalComponent id="correo" name="correo" campoObligatorio="1" labelCampo="Correo" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="ejemplo@gmail.com"/>
                </div>
                <div className='col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                  <CampoTextoNormalComponent id="telefono_movil" name="telefono_movil" campoObligatorio="1" labelCampo="Telefono Movil" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="00000000000"/>
                </div>
                <div className='col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                  <CampoTextoNormalComponent id="telefono_fijo" name="telefono_fijo" campoObligatorio="1" labelCampo="Telefono Fijo" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="00000000000"/>
                </div>
              </div>
              <div className=' row justify-content-center mb-4'>                
                <div className='col-10 col-sm-10 col-md-9 col-lg-9 col-xl-9'>
                  <CampoTextAreaNormalComponent id="direccion" name="direccion" campoObligatorio="1" labelCampo="Dirección" clasesStyleLabel="text-white" clasesStyleCampo="form-control"/>
                </div>
              </div>
              <div className=' row justify-content-center mb-4'>                
                <div className='col-10 col-sm-10 col-md-9 col-lg-9 col-xl-9'>
                  <h2 className=' text-white'>Foto</h2>
                </div>
              </div>
              <div className=' row justify-content-center mb-5'>  
                <input type="file" id='campoFoto' name='campoFoto' onChange={cargarFoto} hidden/>
                <div className='col-auto'>
                  <label htmlFor='campoFoto' className='imagen_label'>
                    <span  className='imagen'>Seleccionar Imagen</span>
                  </label>
                </div>
              </div>
              <div className=' row justify-content-center mb-4 '>                
                <div className='col-auto'>
                  {operacion==="registrar" && 
                    <button className="btn btn-primary">Registra</button>
                  }
                  {operacion==="actualizar" && 
                    <button className="btn btn-warning">Actualizar</button>
                  }
                </div>
                <div className='col-auto'>
                  <button className="btn btn-danger ">Cancelar</button>
                </div>
              </div>
            </div>
        </form>
      </div>
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