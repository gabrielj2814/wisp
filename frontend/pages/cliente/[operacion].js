import Head from 'next/head'
import DashboardComponent from '../../components/dashboardComponent'
import {useRouter} from 'next/router'
import BreadcrumbComponent from '../../components/breadcrumbComponent'
import Link from "next/link"
import AlertComponent from '../../components/alertComponent'
// component form
import CampoTextoNormalComponent from "../../components/campoTextoNormalComponent"
import CampoTextAreaNormalComponent from "../../components/campoTextAreaNormalComponent"
import ModalComponent from '../../components/modalComponent'

export default function formulario(props){
  const router = useRouter()
  let {operacion,id=null} = router.query
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

  function modalToggle(boton){
    let {target} = boton
    modalTaggleId(target.getAttribute("data-id-modal"))
  }

  function modalTaggleId(id){
    let modal = document.getElementById(id)
    if(modal.classList.contains("show")){
      modal.classList.remove("show")
      modal.style.display="none"
      modal.removeAttribute("role")
      modal.removeAttribute("aria-modal")
      modal.setAttribute("aria-hidden","true")
    }
    else{
      modal.classList.add("show")
      modal.style.display="block"
      modal.setAttribute("role","dialog")
      modal.setAttribute("aria-modal","true")
      modal.removeAttribute("aria-hidden")
    }
  }

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

  function mostrarModal(){
    modalTaggleId("modal")
    let modalLabel = document.getElementById("modalLabel")
    let mensajeModal = document.getElementById("mensajeModal")
    if(operacion==="registrar"){
      modalLabel.textContent="Registrar"
      mensajeModal.textContent="Esta seguro que desea registrar"
    }
    else{
      modalLabel.textContent="Actualizar"
      mensajeModal.textContent="Esta seguro que desea actualizar"
    }
  }

  function enviarDatos(){
    alert("ejecutando "+operacion)
  }

  let contenido=(
    <section className='min-vh-100 modulo-cliente-formulario'>
      <BreadcrumbComponent ruta={ruta}/>
      <div className='d-flex mb-5 px-5'>
            <Link href="/cliente" className="btn btn-primary">Regresar</Link>
      </div>
      <h1 className=' text-white text-center mb-2'>Formulario Cliente</h1>
      <div className='text-white text-center mb-4'>los campos con <span className='text-danger'>(*)</span> son obligatorios</div>
      <div className=' container-fluid'>
        <div className=' row justify-content-center'>
          <div id="columnaAlerta" className=' col-10 col-sm-10 col-md-9 col-lg-9 col-xl-8'>
            {/* zona aleta */}
          </div>
        </div>
      </div>
      <ModalComponent id="modal">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalLabel">---</h1>
              <button type="button" className="btn-close" aria-label="Close" data-id-modal="modal" onClick={modalToggle}></button>
            </div>
            <div className="modal-body">
              <h5 id='mensajeModal'></h5>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-id-modal="modal" onClick={modalToggle}>Cerrar</button>
              {operacion==="registrar" && 
                    <button onClick={enviarDatos} className="btn btn-primary">guardar</button>
              }
              {operacion==="actualizar" && 
                <button onClick={enviarDatos} className="btn btn-warning">guardar</button>
              }
            </div>
          </ModalComponent>
      <div className=' container-fluid'>
        <form id="formularioCliente" onSubmit={cancelarOnSubmit} className=' row justify-content-center'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11'>
              <div className=' row justify-content-center'>
                <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                  <CampoTextoNormalComponent id="cedula" name="cedula" campoObligatorio="1" labelCampo="Cedula" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="CEDULA"/>
                </div>
                <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                  <CampoTextoNormalComponent id="nombres" name="nombres" campoObligatorio="1" labelCampo="Nombres" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="NOMBRE"/>
                </div>
                <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                  <CampoTextoNormalComponent id="apellidos" name="apellidos" campoObligatorio="1" labelCampo="Apellidos" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="APELLIDOS"/>
                </div>
              </div>
              <div className=' row justify-content-center'>
                <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                  <CampoTextoNormalComponent id="correo" name="correo" campoObligatorio="1" labelCampo="Correo" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="ejemplo@gmail.com"/>
                </div>
                <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                  <CampoTextoNormalComponent id="telefono_movil" name="telefono_movil" campoObligatorio="1" labelCampo="Telefono Movil" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="00000000000"/>
                </div>
                <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                  <CampoTextoNormalComponent id="telefono_fijo" name="telefono_fijo" campoObligatorio="1" labelCampo="Telefono Fijo" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="00000000000"/>
                </div>
              </div>
              <div className=' row justify-content-center'>                
                <div className='mb-4 col-10 col-sm-10 col-md-9 col-lg-9 col-xl-9'>
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
                    <button onClick={mostrarModal} className="btn btn-primary">Registra</button>
                  }
                  {operacion==="actualizar" && 
                    <button onClick={mostrarModal} className="btn btn-warning">Actualizar</button>
                  }
                </div>
                <div className='col-auto'>
                  <Link href="/cliente" className="btn btn-danger ">Cancelar</Link>
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
    <title>WISP | Modulo Cliente Formulario</title>
    <meta name="description" content="ss" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <DashboardComponent contenidoDasborad={contenido}/>
  </>
  )
}