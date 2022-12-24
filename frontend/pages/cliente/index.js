import Head from 'next/head'
import Link from "next/link"
import DashboardComponent from '../../components/dashboardComponent'
import BreadcrumbComponent from '../../components/breadcrumbComponent'
import AlertComponent from '../../components/alertComponent'
import Imagen from "next/image"
import ModalComponent from '../../components/modalComponent'
// image
import testAvatar from "../../public/images/test-avatar.jpeg"
import testAvatarDos from "../../public/images/test-avatar2.jpeg"
import testAvatarTres from "../../public/images/test-avatar3.jpeg"
import testAvatarCuatro from "../../public/images/test-avatar4.jpeg"
// hook
import {useRouter} from 'next/router'


export default function Cliente(props){
  // migas de pan
  const router = useRouter()
  const ruta= [
    {
      ruta:"/",
      textLink:"Home"
    },
    {
      textLink:"Cliente"
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

  function modalInfo(boton){
    let {target} = boton
    modalTaggleId("modalInfo")
    let modal = document.getElementById("modalInfo")
    let $botonModalEditar = document.getElementById("botonModalEditar")
    let $botonModalInfoEliminar = document.getElementById("botonModalInfoEliminar")
    if(modal.classList.contains("show")){
      let link = `/cliente/actualizar?id=${target.getAttribute("data-id-cliente")}`
      $botonModalEditar.setAttribute("data-link",link)
      $botonModalInfoEliminar.setAttribute("data-id-cliente",target.getAttribute("data-id-cliente"))
    }
  }

  function eliminarModalInfo(boton){
    let {target} = boton
    eliminar(target.getAttribute("data-id-cliente"))
    modalTaggleId("modalInfo")
  }

  function irAFormularioEditar(e){
    let {target} = e
    router.push(target.getAttribute("data-link"))
  }

  function modalEliminar(boton){
    let {target} = boton
    modalTaggleId("modalEliminar")
    let modal = document.getElementById("modalEliminar")
    let $botonEliminar = document.getElementById("botonEliminar")
    if(modal.classList.contains("show")){
      $botonEliminar.setAttribute("data-id-cliente",target.getAttribute("data-id-cliente"))
    }
  }

  function eliminarModalEliminar(boton){
    let {target} = boton
    eliminar(target.getAttribute("data-id-cliente"))
    modalTaggleId("modalEliminar")
    
  }

  function eliminar(id){
    console.log("registro eliminado "+id)
  }

    let contenido=(
      <section className='min-vh-100 modulo-cliente-inicio pb-5'>
          <BreadcrumbComponent ruta={ruta}/>
          <h1 className=' text-white text-center mb-4'>Modulo cliente</h1>
          <h5 className=' px-4 text-white text-center mb-5'>En este modulo podras resgistrar, actualizar o eliminar los clientes del sistema</h5>
          <div className='d-flex justify-content-end mb-5 px-5'>
            <Link href="/cliente/registrar" className="btn btn-primary">ir a formulario</Link>
          </div>
          <div className=' container-fluid'>
            <div className=' row justify-content-center'>
              <div id='columnaAlerta' className=' col-10 col-sm-10 col-md-9 col-lg-9 col-xl-8'>
                {/* zona alerta */}
              </div>
            </div>
          </div>
          <ModalComponent id="modalInfo" clasesStyle="modal-info modal-lg">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalInfoLabel">Datos del Cliente</h1>
              <button type="button" className="btn-close" aria-label="Close" data-id-modal="modalInfo" onClick={modalToggle}></button>
            </div>
            <div className="modal-body">
              <div className=' container-fluid'>
                <div className=' row justify-content-center justify-content-lg-start'>
                  <div className=' col-auto mb-3'>
                    <Imagen className='imagen-avatar-modal-info' src={testAvatar} alt="avatar cliente"/>
                  </div>
                  <div className=' col-12 col-lg-6'>
                    <div className=' mb-2'><span>Cedula/DNI: </span>27636392</div>
                    <div className=' mb-2'><span>Nombres: </span>Gabriel Jesus</div>
                    <div className=' mb-2'><span>Apellidos: </span>Valera Castillo</div>
                    <div className=' mb-2'><span>Correo: </span> <a href='mailto:gabrielj2814@hotmail.com'>gabrielj2814@hotmail.com</a> </div>
                    <div className=' mb-2'><span>Telefono Movil: </span>04160430565</div>
                    <div className=' mb-2'><span>Telefono Fijo: </span>04160430565</div>
                    <div className=' mb-2'><span>Dirección: </span></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-id-modal="modalInfo" onClick={modalToggle}>Cerrar</button>
              <button id='botonModalEditar' className="btn btn-warning" data-link="" onClick={irAFormularioEditar}>Editar</button>
              <span className='d-block d-lg-none'> o </span>
              <button id='botonModalInfoEliminar' className="btn btn-warning d-block d-lg-none" onClick={eliminarModalInfo} data-id-cliente="">Eliminar</button>
            </div>
          </ModalComponent>
          <ModalComponent id="modalEliminar" clasesStyle="modal-lg">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalEliminarLabel">Modal Eliminar Cliente</h1>
              <button type="button" className="btn-close" aria-label="Close" data-id-modal="modalEliminar" onClick={modalToggle}></button>
            </div>
            <div className="modal-body">
              <h5 id='modalEliminarMensaje'>Esta seguro que desea eliminar al cliente</h5>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-id-modal="modalEliminar" onClick={modalToggle}>Cerrar</button>
              <button id='botonEliminar' className="btn btn-warning" onClick={eliminarModalEliminar} data-id-cliente="">Eliminar</button>
            </div>
          </ModalComponent>
          <div className=' container-fluid'>
            <div className=' row justify-content-center'>
              <div className='col-12 col-sm-11 col-md-11 col-lg-10 col-xl-10'>
                <table className=" table table-striped table-dark table-hover table-md d-none d-lg-table table-desktop">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Cedula</th>
                      <th scope="col">Foto</th>
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='numero-indice-tabla'>1</td>
                      <td>27636392</td>
                      <td>
                        <div className='contendor-imagen-avatar'>
                          <Imagen className='imagen-avatar-movil' src={testAvatar} alt="avatar cliente"/>
                        </div> 
                      </td>
                      <td>Gabriel Jesus</td>
                      <td>Valera Castillo</td>
                      <td>
                        <Link href="/cliente/actualizar?id=1" className="btn btn-warning">editar</Link>
                      </td>
                      <td>
                        <button className="btn btn-danger" onClick={modalEliminar} data-id-cliente="1">eliminar</button>
                      </td>
                      <td>
                        <button className="btn btn-info" onClick={modalInfo} data-id-cliente="1">ver info</button>
                      </td>
                    </tr>
                    <tr>
                      <td className='numero-indice-tabla'>2</td>
                      <td>27636392</td>
                      <td>
                        <div className='contendor-imagen-avatar'>
                          <Imagen className='imagen-avatar-movil' src={testAvatarDos} alt="avatar cliente"/>
                        </div> 
                      </td>
                      <td>Gabriel Jesus</td>
                      <td>Valera Castillo</td>
                      <td>
                        <Link href="/cliente/actualizar?id=2" className="btn btn-warning">editar</Link>
                      </td>
                      <td>
                        <button className="btn btn-danger" onClick={modalEliminar} data-id-cliente="2">eliminar</button>
                      </td>
                      <td>
                        <button className="btn btn-info" onClick={modalInfo} data-id-cliente="2" >ver info</button>
                      </td>
                    </tr>
                    <tr>
                      <td className='numero-indice-tabla'>3</td>
                      <td>27636392</td>
                      <td>
                        <div className='contendor-imagen-avatar'>
                          <Imagen className='imagen-avatar-movil' src={testAvatarTres} alt="avatar cliente"/>
                        </div> 
                      </td>
                      <td>Gabriel Jesus</td>
                      <td>Valera Castillo</td>
                      <td>
                        <Link href="/cliente/actualizar?id=3" className="btn btn-warning">editar</Link>
                      </td>
                      <td>
                        <button className="btn btn-danger" onClick={modalEliminar} data-id-cliente="3">eliminar</button>
                      </td>
                      <td>
                        <button className="btn btn-info" onClick={modalInfo} data-id-cliente="3" >ver info</button>
                      </td>
                    </tr>
                    <tr>
                      <td className='numero-indice-tabla'>4</td>
                      <td>27636392</td>
                      <td>
                        <div className='contendor-imagen-avatar'>
                          <Imagen className='imagen-avatar-movil' src={testAvatarCuatro} alt="avatar cliente"/>
                        </div> 
                      </td>
                      <td>Gabriel Jesus</td>
                      <td>Valera Castillo</td>
                      <td>
                        <Link href="/cliente/actualizar?id=4" className="btn btn-warning">editar</Link>
                      </td>
                      <td>
                        <button className="btn btn-danger" onClick={modalEliminar} data-id-cliente="4">eliminar</button>
                      </td>
                      <td>
                        <button className="btn btn-info" onClick={modalInfo} data-id-cliente="4" >ver info</button>
                      </td>
                    </tr>

                  </tbody>
                </table>
                <table className=" table table-striped table-dark table-hover table-md d-table d-lg-none table-movil">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Foto</th>
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-id-cliente="1" onClick={modalInfo}>
                      <td className='numero-indice-tabla' data-id-cliente="1"> 1 </td>
                      <td> 
                        <div className='contendor-imagen-avatar' data-id-cliente="1">
                          <Imagen className='imagen-avatar-movil' src={testAvatar} alt="avatar cliente" data-id-cliente="1"/>
                        </div> 
                      </td>
                      <td data-id-cliente="1"> Gabriel Jesus </td>
                      <td data-id-cliente="1"> Valera Castillo </td>
                    </tr>
                    <tr data-id-cliente="2" onClick={modalInfo}>
                      <td className='numero-indice-tabla' data-id-cliente="2"> 2 </td>
                      <td > 
                        <div className='contendor-imagen-avatar' data-id-cliente="2">
                          <Imagen className='imagen-avatar-movil' src={testAvatarDos} alt="avatar cliente" data-id-cliente="2"/>
                        </div> 
                      </td>
                      <td data-id-cliente="2"> Gabriel Jesus </td>
                      <td data-id-cliente="2"> Valera Castillo </td>
                    </tr>
                    <tr data-id-cliente="3" onClick={modalInfo}>
                      <td className='numero-indice-tabla'data-id-cliente="3"> 3 </td>
                      <td > 
                        <div className='contendor-imagen-avatar' data-id-cliente="3">
                          <Imagen className='imagen-avatar-movil' src={testAvatarTres} alt="avatar cliente" data-id-cliente="3"/>
                        </div> 
                      </td>
                      <td data-id-cliente="3"> Gabriel Jesus </td>
                      <td data-id-cliente="3"> Valera Castillo </td>
                    </tr>
                    <tr data-id-cliente="4" onClick={modalInfo}>
                      <td className='numero-indice-tabla' data-id-cliente="4"> 4 </td>
                      <td> 
                        <div className='contendor-imagen-avatar' data-id-cliente="4">
                          <Imagen className='imagen-avatar-movil' src={testAvatarCuatro} alt="avatar cliente" data-id-cliente="4"/>
                        </div> 
                      </td>
                      <td data-id-cliente="4"> Gabriel Jesus </td>
                      <td data-id-cliente="4"> Valera Castillo </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
      
      </section>
    )
    return(
    <>
      <Head>
        <title>WISP | Modulo Cliente</title>
        <meta name="description" content="ss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardComponent contenidoDasborad={contenido}/>
    </>
    )
}