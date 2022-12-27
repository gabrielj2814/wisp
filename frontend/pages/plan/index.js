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
            let link = `/plan/actualizar?id=${target.getAttribute("data-id-plan")}`
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
                        <h1 className="modal-title fs-5" id="modalInfoLabel">Datos del Plan</h1>
                        <button type="button" className="btn-close" aria-label="Close" data-id-modal="modalInfo" onClick={modalToggle}></button>
                    </div>
                    <div className="modal-body">
                        <div className=' container-fluid'>
                            <div className=' row justify-content-center justify-content-lg-start'>
                                <div className=' col-12'>
                                    <div className=' mb-2'><span>Nombre: </span>Plan Basico</div>
                                    <div className=' mb-2'><span>Velocidad: </span> 1MB/s</div>
                                    <div className=' mb-2'><span>Precio: </span> 10$</div>
                                    <div className=' mb-2'><span>Ultima Fecha de Actualización: </span> 26/12/2022</div>
                                    <div className=' mb-2'><span>Descripción: </span></div>
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
                        <h1 className="modal-title fs-5" id="modalEliminarLabel">Modal Eliminar Plan</h1>
                        <button type="button" className="btn-close" aria-label="Close" data-id-modal="modalEliminar" onClick={modalToggle}></button>
                    </div>
                    <div className="modal-body">
                        <h5 id='modalEliminarMensaje'>Esta seguro que desea eliminar el plan</h5>
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
                                        <th scope="col">Precio</th>
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
                                        <td>10$</td>
                                        <td>29/21/22</td>
                                        <td>
                                            <Link href="/plan/actualizar?id=1" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-plan="1">eliminar</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-info" onClick={modalInfo} data-id-plan="1">ver info</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='numero-indice-tabla'>2</td>
                                        <td>Plan Basico</td>
                                        <td>1 MB/s</td>
                                        <td>10$</td>
                                        <td>29/21/22</td>
                                        <td>
                                            <Link href="/plan/actualizar?id=2" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-plan="2">eliminar</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-info" onClick={modalInfo} data-id-plan="2">ver info</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='numero-indice-tabla'>3</td>
                                        <td>Plan Basico</td>
                                        <td>1 MB/s</td>
                                        <td>10$</td>
                                        <td>29/21/22</td>
                                        <td>
                                            <Link href="/plan/actualizar?id=3" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-plan="3">eliminar</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-info" onClick={modalInfo} data-id-plan="3">ver info</button>
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
                                        <th scope="col">Precio</th>
                                        <th scope="col">Ultima Fecha De Act.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-id-plan="1" onClick={modalInfo}>
                                        <td className='numero-indice-tabla' data-id-plan="1">1</td>
                                        <td data-id-plan="1">Plan Basico</td>
                                        <td data-id-plan="1">1 MB/s</td>
                                        <td data-id-plan="1">10$</td>
                                        <td data-id-plan="1">29/21/22</td>
                                    </tr>
                                    <tr data-id-plan="2" onClick={modalInfo}>
                                        <td className='numero-indice-tabla' data-id-plan="2">2</td>
                                        <td data-id-plan="2">Plan Basico</td>
                                        <td data-id-plan="2">1 MB/s</td>
                                        <td data-id-plan="2">10$</td>
                                        <td data-id-plan="2">29/21/22</td>
                                    </tr>
                                    <tr data-id-plan="3" onClick={modalInfo}>
                                        <td className='numero-indice-tabla' data-id-plan="3">3</td>
                                        <td data-id-plan="3">Plan Basico</td>
                                        <td data-id-plan="3">1 MB/s</td>
                                        <td data-id-plan="3">10$</td>
                                        <td data-id-plan="3">29/21/22</td>
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