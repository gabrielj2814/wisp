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


export default function Cliente(props){
  // migas de pan
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
          <ModalComponent id="modalInfo">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalInfoLabel">Datos del Cliente</h1>
              <button type="button" className="btn-close" aria-label="Close" data-id-modal="modalInfo" onClick={modalToggle}></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-id-modal="modalInfo" onClick={modalToggle}>Cerrar</button>
              <button className="btn btn-warning">editar</button>
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
                        <button className="btn btn-danger">eliminar</button>
                      </td>
                      <td>
                        <button className="btn btn-info" onClick={modalToggle} data-id-modal="modalInfo">ver info</button>
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
                        <Link href="/cliente/actualizar?id=1" className="btn btn-warning">editar</Link>
                      </td>
                      <td>
                        <button className="btn btn-danger">eliminar</button>
                      </td>
                      <td>
                        <button className="btn btn-info" onClick={modalToggle} data-id-modal="modalInfo">ver info</button>
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
                        <Link href="/cliente/actualizar?id=1" className="btn btn-warning">editar</Link>
                      </td>
                      <td>
                        <button className="btn btn-danger">eliminar</button>
                      </td>
                      <td>
                        <button className="btn btn-info" onClick={modalToggle} data-id-modal="modalInfo">ver info</button>
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
                        <Link href="/cliente/actualizar?id=1" className="btn btn-warning">editar</Link>
                      </td>
                      <td>
                        <button className="btn btn-danger">eliminar</button>
                      </td>
                      <td>
                        <button className="btn btn-info" onClick={modalToggle} data-id-modal="modalInfo">ver info</button>
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
                    <tr data-id-modal="modalInfo" onClick={modalToggle}>
                      <td className='numero-indice-tabla' data-id-modal="modalInfo"> 1 </td>
                      <td> 
                        <div className='contendor-imagen-avatar' data-id-modal="modalInfo">
                          <Imagen className='imagen-avatar-movil' src={testAvatar} alt="avatar cliente" data-id-modal="modalInfo"/>
                        </div> 
                      </td>
                      <td data-id-modal="modalInfo"> Gabriel Jesus </td>
                      <td data-id-modal="modalInfo"> Valera Castillo </td>
                    </tr>
                    <tr>
                      <td className='numero-indice-tabla'> 2 </td>
                      <td> 
                        <div className='contendor-imagen-avatar'>
                          <Imagen className='imagen-avatar-movil' src={testAvatarDos} alt="avatar cliente"/>
                        </div> 
                      </td>
                      <td> Gabriel Jesus </td>
                      <td> Valera Castillo </td>
                    </tr>
                    <tr>
                      <td className='numero-indice-tabla'> 3 </td>
                      <td> 
                        <div className='contendor-imagen-avatar'>
                          <Imagen className='imagen-avatar-movil' src={testAvatarTres} alt="avatar cliente"/>
                        </div> 
                      </td>
                      <td> Gabriel Jesus </td>
                      <td> Valera Castillo </td>
                    </tr>
                    <tr>
                      <td className='numero-indice-tabla'> 4 </td>
                      <td> 
                        <div className='contendor-imagen-avatar'>
                          <Imagen className='imagen-avatar-movil' src={testAvatarCuatro} alt="avatar cliente"/>
                        </div> 
                      </td>
                      <td> Gabriel Jesus </td>
                      <td> Valera Castillo </td>
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