import Head from 'next/head'
import Link from "next/link"
import DashboardComponent from '../../components/dashboardComponent'
import BreadcrumbComponent from '../../components/breadcrumbComponent'
import AlertComponent from '../../components/alertComponent'
import Imagen from "next/image"
import ModalComponent from '../../components/modalComponent'
// hook
import { useRouter } from 'next/router'
// ipServices
import ipServices from '../../ipServices'

// TODO: flata layout de la modal desktop info
// TODO: flata layout de la modal movil info
// TODO: flata layout de la modal eliminar movil
// TODO: flata layout de la modal eliminar desktop
// TODO: el boton de editar de la tabla desktop redireccione al formulario
// TODO: el boton de eliminar de la tabla desktop mostar la modal de esta seguro que quieres elimiar
// TODO: que al hacer click en una fila en la tabla movil mostrar la modal movil
// TODO: layout de la modal movil de la vista info con el boton eliminar y que el boton editar redireccione al formulario

export default function Plan() {
    const SERVICES_BACKEND_WISP = `http://${ipServices.backendWisp.ip}:${ipServices.backendWisp.port}`
    const router = useRouter()
    const ruta = [
        {
            ruta: "/",
            textLink: "Home"
        },
        {
            textLink: "Plan"
        }
    ]

    function modalToggle(boton) {
        let { target } = boton
        modalTaggleId(target.getAttribute("data-id-modal"))
    }

    function modalTaggleId(id) {
        let modal = document.getElementById(id)
        if (modal.classList.contains("show")) {
            modal.classList.remove("show")
            modal.style.display = "none"
            modal.removeAttribute("role")
            modal.removeAttribute("aria-modal")
            modal.setAttribute("aria-hidden", "true")
        }
        else {
            modal.classList.add("show")
            modal.style.display = "block"
            modal.setAttribute("role", "dialog")
            modal.setAttribute("aria-modal", "true")
            modal.removeAttribute("aria-hidden")
        }
    }

    function modalInfo(boton) {
        let { target } = boton
        modalTaggleId("modalInfo")
        let modal = document.getElementById("modalInfo")
        let $botonModalEditar = document.getElementById("botonModalEditar")
        let $botonModalInfoEliminar = document.getElementById("botonModalInfoEliminar")
        if (modal.classList.contains("show")) {
            let link = `/cliente/actualizar?id=${target.getAttribute("data-id-plan")}`
            $botonModalEditar.setAttribute("data-link", link)
            $botonModalInfoEliminar.setAttribute("data-id-plan", target.getAttribute("data-id-plan"))
        }
    }

    function eliminarModalInfo(boton) {
        let { target } = boton
        eliminar(target.getAttribute("data-id-plan"))
        modalTaggleId("modalInfo")
    }

    function irAFormularioEditar(e) {
        let { target } = e
        router.push(target.getAttribute("data-link"))
    }

    function modalEliminar(boton) {
        let { target } = boton
        modalTaggleId("modalEliminar")
        let modal = document.getElementById("modalEliminar")
        let $botonEliminar = document.getElementById("botonEliminar")
        if (modal.classList.contains("show")) {
            $botonEliminar.setAttribute("data-id-plan", target.getAttribute("data-id-plan"))
        }
    }

    function eliminarModalEliminar(boton) {
        let { target } = boton
        eliminar(target.getAttribute("data-id-plan"))
        modalTaggleId("modalEliminar")
    }

    function eliminar(id) {
        console.log("registro eliminado " + id)
    }


    let contenido = (
        <>
            <section className='min-vh-100 modulo-plan-inicio pb-5'>
                <BreadcrumbComponent ruta={ruta} />
                <h1 className=' text-white text-center mb-4'>Modulo Plan</h1>
                <h5 className=' px-4 text-white text-center mb-5'>En este modulo podras resgistrar, actualizar o eliminar los planes del sistema</h5>
                <div className='d-flex justify-content-end mb-5 px-5'>
                    <Link href="/plan/registrar" className="btn btn-primary">ir a formulario</Link>
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
                                    <Imagen className='imagen-avatar-modal-info' src={SERVICES_BACKEND_WISP + "/images/test-avatar.jpeg"} width={800} height={1024} alt="avatar cliente" />
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
                        <button id='botonModalInfoEliminar' className="btn btn-warning d-block d-lg-none" onClick={eliminarModalInfo} data-id-plan="">Eliminar</button>
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
                        <button id='botonEliminar' className="btn btn-warning" onClick={eliminarModalEliminar} data-id-plan="">Eliminar</button>
                    </div>
                </ModalComponent>
                <div className=' container-fluid'>
                    <div className=' row justify-content-center'>
                        <div className='col-12 col-sm-11 col-md-11 col-lg-10 col-xl-10'>
                            <table className=" table table-striped table-dark table-hover table-md d-none d-lg-table table-desktop">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Velocidad</th>
                                        <th scope="col">Ultima Fecha De Act.</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='numero-indice-tabla'>1</td>
                                        <td>Plan Basico</td>
                                        <td>1 MB/s</td>
                                        <td>29/21/22</td>
                                        <td>
                                            <Link href="/cliente/actualizar?id=1" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-plan="1">eliminar</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-info" onClick={modalInfo} data-id-plan="1">ver info</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='numero-indice-tabla'>1</td>
                                        <td>Plan Basico</td>
                                        <td>1 MB/s</td>
                                        <td>29/21/22</td>
                                        <td>
                                            <Link href="/cliente/actualizar?id=1" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-plan="1">eliminar</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-info" onClick={modalInfo} data-id-plan="1">ver info</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='numero-indice-tabla'>1</td>
                                        <td>Plan Basico</td>
                                        <td>1 MB/s</td>
                                        <td>29/21/22</td>
                                        <td>
                                            <Link href="/cliente/actualizar?id=1" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-plan="1">eliminar</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-info" onClick={modalInfo} data-id-plan="1">ver info</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='numero-indice-tabla'>1</td>
                                        <td>Plan Basico</td>
                                        <td>1 MB/s</td>
                                        <td>29/21/22</td>
                                        <td>
                                            <Link href="/cliente/actualizar?id=1" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-plan="1">eliminar</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-info" onClick={modalInfo} data-id-plan="1">ver info</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className=" table table-striped table-dark table-hover table-md d-table d-lg-none table-movil">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Velocidad</th>
                                        <th scope="col">Ultima Fecha De Act.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-id-plan="4" onClick={modalInfo}>
                                        <td className='numero-indice-tabla' data-id-plan="4">1</td>
                                        <td data-id-plan="4">Plan Basico</td>
                                        <td data-id-plan="4">1 MB/s</td>
                                        <td>29/21/22</td>
                                    </tr>
                                    <tr data-id-plan="4" onClick={modalInfo}>
                                        <td className='numero-indice-tabla' data-id-plan="4">1</td>
                                        <td data-id-plan="4">Plan Basico</td>
                                        <td data-id-plan="4">1 MB/s</td>
                                        <td>29/21/22</td>
                                    </tr>
                                    <tr data-id-plan="4" onClick={modalInfo}>
                                        <td className='numero-indice-tabla' data-id-plan="4">1</td>
                                        <td data-id-plan="4">Plan Basico</td>
                                        <td data-id-plan="4">1 MB/s</td>
                                        <td>29/21/22</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
    return (
        <>
            <Head>
                <title>WISP | Modulo Plan</title>
                <meta name="description" content="ss" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DashboardComponent contenidoDasborad={contenido} />
        </>
    )
}