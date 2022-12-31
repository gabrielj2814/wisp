import Head from 'next/head'
import Link from "next/link"
import DashboardComponent from '../../components/dashboardComponent'
import BreadcrumbComponent from '../../components/breadcrumbComponent'
import AlertComponent from '../../components/alertComponent'
import Imagen from "next/image"
import ModalComponent from '../../components/modalComponent'
// hook
import { useRouter } from 'next/router'

export default function Ip() {

    const router = useRouter()
    const ruta = [
        {
            ruta: "/",
            textLink: "Home"
        },
        {
            textLink: "Ip"
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
            let link = `/ip/actualizar?id=${target.getAttribute("data-id-ip")}`
            $botonModalEditar.setAttribute("data-link", link)
            $botonModalInfoEliminar.setAttribute("data-id-ip", target.getAttribute("data-id-ip"))
        }
    }

    function eliminarModalInfo(boton) {
        let { target } = boton
        eliminar(target.getAttribute("data-id-ip"))
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
            $botonEliminar.setAttribute("data-id-ip", target.getAttribute("data-id-ip"))
        }
    }

    function eliminarModalEliminar(boton) {
        let { target } = boton
        eliminar(target.getAttribute("data-id-ip"))
        modalTaggleId("modalEliminar")
    }

    function eliminar(id) {
        console.log("registro eliminado " + id)
    }


    let contenido = (
        <>
            <section className='min-vh-100 modulo-ip-inicio pb-5'>
                <BreadcrumbComponent ruta={ruta} />
                <h1 className=' text-white text-center mb-4'>Modulo Ip</h1>
                <h5 className=' px-4 text-white text-center mb-5'>En este modulo podras resgistrar, actualizar o eliminar las Ip del sistema</h5>
                <div className='d-flex justify-content-end mb-5 px-5'>
                    <Link href="/ip/registrar" className="btn btn-primary">ir a formulario</Link>
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
                        <h1 className="modal-title fs-5" id="modalInfoLabel">Datos de la Ip</h1>
                        <button type="button" className="btn-close" aria-label="Close" data-id-modal="modalInfo" onClick={modalToggle}></button>
                    </div>
                    <div className="modal-body">
                        <div className=' container-fluid'>
                            <div className=' row justify-content-center justify-content-lg-start'>
                                <div className=' col-12'>
                                    <div className=' mb-2'><span>Ip: </span>192.168.1.110</div>
                                    <div className=' mb-2'><span>Estado: </span>Disponible</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-id-modal="modalInfo" onClick={modalToggle}>Cerrar</button>
                        <button id='botonModalEditar' className="btn btn-warning" data-link="" onClick={irAFormularioEditar}>Editar</button>
                        <span className='d-block d-lg-none'> o </span>
                        <button id='botonModalInfoEliminar' className="btn btn-warning d-block d-lg-none" onClick={eliminarModalInfo} data-id-ip="">Eliminar</button>
                    </div>
                </ModalComponent>
                <ModalComponent id="modalEliminar" clasesStyle="modal-lg">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalEliminarLabel">Modal Eliminar Ip</h1>
                        <button type="button" className="btn-close" aria-label="Close" data-id-modal="modalEliminar" onClick={modalToggle}></button>
                    </div>
                    <div className="modal-body">
                        <h5 id='modalEliminarMensaje'>Esta seguro que desea eliminar esta ip</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-id-modal="modalEliminar" onClick={modalToggle}>Cerrar</button>
                        <button id='botonEliminar' className="btn btn-warning" onClick={eliminarModalEliminar} data-id-ip="">Eliminar</button>
                    </div>
                </ModalComponent>
                <div className=' container-fluid'>
                    <div className=' row justify-content-center'>
                        <div className='col-12 col-sm-11 col-md-11 col-lg-10 col-xl-10'>
                            <table className=" table table-striped table-dark table-hover table-md d-none d-lg-table table-desktop">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Ip</th>
                                        <th scope="col">Disponibilidad</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='numero-indice-tabla'>1</td>
                                        <td>192.168.1.110</td>
                                        <td>Disponible</td>
                                        <td>
                                            <Link href="/ip/actualizar?id=1" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-ip="1">eliminar</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='numero-indice-tabla'>2</td>
                                        <td>192.168.1.111</td>
                                        <td>No Disponible</td>
                                        <td>
                                            <Link href="/ip/actualizar?id=1" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-ip="2">eliminar</button>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className='numero-indice-tabla'>3</td>
                                        <td>192.168.1.112</td>
                                        <td>Disponible</td>
                                        <td>
                                            <Link href="/ip/actualizar?id=1" className="btn btn-warning">editar</Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={modalEliminar} data-id-ip="3">eliminar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className=" table table-striped table-dark table-hover table-md d-table d-lg-none table-movil">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Ip</th>
                                        <th scope="col">Disponibilidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-id-ip="1" onClick={modalInfo}>
                                        <td className='numero-indice-tabla' data-id-ip="1">1</td>
                                        <td data-id-ip="1">192.168.1.110</td>
                                        <td data-id-ip="1">Disponibles</td>
                                    </tr>
                                    <tr data-id-ip="2" onClick={modalInfo}>
                                        <td className='numero-indice-tabla' data-id-ip="2">1</td>
                                        <td data-id-ip="2">192.168.1.111</td>
                                        <td data-id-ip="2">No Disponibles</td>
                                    </tr>
                                    <tr data-id-ip="3" onClick={modalInfo}>
                                        <td className='numero-indice-tabla' data-id-ip="3">1</td>
                                        <td data-id-ip="3">192.168.1.112</td>
                                        <td data-id-ip="3">Disponibles</td>
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
                <title>WISP | Modulo Ip</title>
                <meta name="description" content="modulo ip" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DashboardComponent contenidoDasborad={contenido} />
        </>
    )
} 