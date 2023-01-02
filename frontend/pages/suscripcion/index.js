import Head from 'next/head'
import Link from "next/link"
import DashboardComponent from '../../components/dashboardComponent'
import BreadcrumbComponent from '../../components/breadcrumbComponent'
import AlertComponent from '../../components/alertComponent'
import Imagen from "next/image"
import ModalComponent from '../../components/modalComponent'
// hook
import { useRouter } from 'next/router'
import avatarTest from "../../public/images/test-avatar.jpeg"

export default function suscripcion() {
    const router = useRouter()
    const ruta = [
        {
            ruta: "/",
            textLink: "Home"
        },
        {
            textLink: "Suscripción"
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
            let link = `/suscripcion/actualizar?id=${target.getAttribute("data-id-suscripcion")}`
            $botonModalEditar.setAttribute("data-link", link)
            $botonModalInfoEliminar.setAttribute("data-id-suscripcion", target.getAttribute("data-id-suscripcion"))
        }
    }

    function eliminarModalInfo(boton) {
        let { target } = boton
        eliminar(target.getAttribute("data-id-suscripcion"))
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
            $botonEliminar.setAttribute("data-id-suscripcion", target.getAttribute("data-id-suscripcion"))
        }
    }

    function eliminarModalEliminar(boton) {
        let { target } = boton
        eliminar(target.getAttribute("data-id-suscripcion"))
        modalTaggleId("modalEliminar")
    }

    function eliminar(id) {
        console.log("registro eliminado " + id)
    }


    let contenido = (
        <>
            <section className='min-vh-100 modulo-suscripcion-inicio pb-5'>
                <BreadcrumbComponent ruta={ruta} />
                <h1 className=' text-white text-center mb-4'>Modulo De Suscripción</h1>
                <h5 className=' px-4 text-white text-center mb-5'>En este modulo podras resgistrar, actualizar o eliminar las suscripciones del sistema</h5>
                <div className='d-flex justify-content-end mb-5 px-5'>
                    <Link href="/suscripcion/registrar" className="btn btn-primary">ir a formulario</Link>
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
                        <h1 className="modal-title fs-5" id="modalInfoLabel">Datos de la Suscripción</h1>
                        <button type="button" className="btn-close" aria-label="Close" data-id-modal="modalInfo" onClick={modalToggle}></button>
                    </div>
                    <div className="modal-body">
                        <div className=' container-fluid'>
                            <div className=' row justify-content-center justify-content-lg-start'>
                                <div className=' col-auto mb-3'>
                                    {/* <Imagen className='imagen-avatar-modal-info' src={SERVICES_BACKEND_WISP + "/images/test-avatar.jpeg"} width={800} height={1024} alt="avatar cliente" /> */}
                                    <Imagen className='imagen-avatar-modal-info' src={avatarTest} width={800} height={1024} alt="avatar cliente" />
                                </div>
                                <div className=' col-12 col-lg-6'>
                                    <div className=' mb-2'><span>Cedula/DNI: </span>2636392</div>
                                    <div className=' mb-2'><span>Nombre Completo del Cliente: </span>Gabriel Jesus Valera Castillo</div>
                                    <div className=' mb-2'><span>Ip asignada: </span>192.168.1.110</div>
                                    <div className=' mb-2'><span>Fecha de inicio del servicio: </span>01/01/2023</div>
                                    <div className=' mb-2'><span>Fecha de corte del servicio: </span>01/02/2023</div>
                                    <div className=' mb-2'><span>Estado de pago del servicio: </span>Pago</div>
                                    <div className=' mb-2'><span>Estado del servicio: </span>Activo</div>
                                    <div className=' mb-2'><span>Precio del servicio: </span>$10</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-id-modal="modalInfo" onClick={modalToggle}>Cerrar</button>
                        <button id='botonModalEditar' className="btn btn-warning" data-link="" onClick={irAFormularioEditar}>Editar</button>
                        <span className='d-block d-lg-none'> o </span>
                        <button id='botonModalInfoEliminar' className="btn btn-warning d-block d-lg-none" onClick={eliminarModalInfo} data-id-suscripcion="">Eliminar</button>
                    </div>
                </ModalComponent>
                <ModalComponent id="modalEliminar" clasesStyle="modal-lg">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalEliminarLabel">Modal Eliminar Plan</h1>
                        <button type="button" className="btn-close" aria-label="Close" data-id-modal="modalEliminar" onClick={modalToggle}></button>
                    </div>
                    <div className="modal-body">
                        <h5 id='modalEliminarMensaje'>Esta seguro que desea eliminar esta suscripción</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-id-modal="modalEliminar" onClick={modalToggle}>Cerrar</button>
                        <button id='botonEliminar' className="btn btn-warning" onClick={eliminarModalEliminar} data-id-suscripcion="">Eliminar</button>
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
                                        <th scope="col">Fecha Inicio</th>
                                        <th scope="col">Fecha Corte</th>
                                        <th scope="col">Estado Servicio</th>
                                        <th scope="col">Estado Pago</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='numero-indice-tabla'>1</td>
                                        <td>Gabriel Jesus</td>
                                        <td>01/01/2023</td>
                                        <td>01/02/2023</td>
                                        <td>Activo</td>
                                        <td>Pago</td>
                                        <td>
                                            <Link href="/suscripcion/actualizar?id=1" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-suscripcion="1">eliminar</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-info" onClick={modalInfo} data-id-suscripcion="1">ver info</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='numero-indice-tabla'>2</td>
                                        <td>Gabriel Jesus</td>
                                        <td>01/01/2023</td>
                                        <td>01/02/2023</td>
                                        <td>Inactivo</td>
                                        <td>No Pago</td>
                                        <td>
                                            <Link href="/suscripcion/actualizar?id=2" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-suscripcion="2">eliminar</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-info" onClick={modalInfo} data-id-suscripcion="2">ver info</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='numero-indice-tabla'>3</td>
                                        <td>Gabriel Jesus</td>
                                        <td>01/01/2023</td>
                                        <td>01/02/2023</td>
                                        <td>Activo</td>
                                        <td>Pago</td>
                                        <td>
                                            <Link href="/suscripcion/actualizar?id3" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-suscripcion="3">eliminar</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-info" onClick={modalInfo} data-id-suscripcion="3">ver info</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className=" table table-striped table-dark table-hover table-md d-table d-lg-none table-movil">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Estado Servicio</th>
                                        <th scope="col">Estado Pago</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-id-suscripcion="1" onClick={modalInfo}>
                                        <td className='numero-indice-tabla' data-id-suscripcion="1">1</td>
                                        <td data-id-suscripcion="1">Gabriel Jesus</td>
                                        <td data-id-suscripcion="1">Activo</td>
                                        <td data-id-suscripcion="1">Pago</td>
                                    </tr>
                                    <tr data-id-suscripcion="2" onClick={modalInfo}>
                                        <td className='numero-indice-tabla' data-id-suscripcion="2">2</td>
                                        <td data-id-suscripcion="2">Gabriel Jesus</td>
                                        <td data-id-suscripcion="2">Inactivo</td>
                                        <td data-id-suscripcion="2">Pago</td>
                                    </tr>
                                    <tr data-id-suscripcion="3" onClick={modalInfo}>
                                        <td className='numero-indice-tabla' data-id-suscripcion="3">3</td>
                                        <td data-id-suscripcion="3">Gabriel Jesus</td>
                                        <td data-id-suscripcion="3">Activo</td>
                                        <td data-id-suscripcion="3">Pago</td>
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
                <title>WISP | Modulo De Suscripción</title>
                <meta name="description" content="modulo suscripcion" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DashboardComponent contenidoDasborad={contenido} />
        </>
    )
}