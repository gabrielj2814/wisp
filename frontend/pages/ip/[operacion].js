import Head from 'next/head'
import DashboardComponent from '../../components/dashboardComponent'
import BreadcrumbComponent from '../../components/breadcrumbComponent'
import Link from "next/link"
import AlertComponent from '../../components/alertComponent'
// component form
import CampoTextoNormalComponent from "../../components/campoTextoNormalComponent"
import CampoRadiodNormalComponent from '../../components/campoRadioNormalComponent'
import ModalComponent from '../../components/modalComponent'
// hook
import { useRouter } from 'next/router'

export default function formulario() {
    const router = useRouter()
    let { operacion } = router.query
    const ruta = [
        {
            ruta: "/",
            textLink: "Home"
        },
        {
            ruta: "/ip",
            textLink: "Ip"
        },
        {
            textLink: operacion
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

    function cancelarOnSubmit(e) {
        e.preventDefault()
    }

    function mostrarModal() {
        modalTaggleId("modal")
        let modalLabel = document.getElementById("modalLabel")
        let mensajeModal = document.getElementById("mensajeModal")
        if (operacion === "registrar") {
            modalLabel.textContent = "Registrar"
            mensajeModal.textContent = "Esta seguro que desea registrar"
        }
        else {
            modalLabel.textContent = "Actualizar"
            mensajeModal.textContent = "Esta seguro que desea actualizar"
        }
    }

    function enviarDatos() {
        alert("ejecutando " + operacion)
    }

    let contenido = (
        <>
            <section className='min-vh-100 modulo-ip-formulario pb-5'>
                <BreadcrumbComponent ruta={ruta} />
                <div className='d-flex mb-5 px-5'>
                    <Link href="/ip" className="btn btn-primary">Regresar</Link>
                </div>
                <h1 className=' text-white text-center mb-2'>Formulario Ip</h1>
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
                        {operacion === "registrar" &&
                            <button onClick={enviarDatos} className="btn btn-primary">guardar</button>
                        }
                        {operacion === "actualizar" &&
                            <button onClick={enviarDatos} className="btn btn-warning">guardar</button>
                        }
                    </div>
                </ModalComponent>
                <div className=' container-fluid'>
                    <form id="formularioIp" onSubmit={cancelarOnSubmit} className=' row justify-content-center'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11'>
                            <div className=' row justify-content-center'>
                                <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                                    <CampoTextoNormalComponent id="ip" name="ip" campoObligatorio="1" labelCampo="Ip" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="IP" />
                                </div>
                            </div>
                            <div className=' row justify-content-center'>
                                <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                                    <h2 className=' text-white'>Disponibilidad de la Ip</h2>
                                </div>
                            </div>
                            <div className=' row justify-content-center'>
                                <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                                    <CampoRadiodNormalComponent name="disponibilidad" id="ipActivo" value="1"  labelCampo="Activo" clasesStyle="" clasesStyleLabel="text-white" />
                                </div>
                            </div>
                            <div className=' row justify-content-center'>
                                <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                                    <CampoRadiodNormalComponent name="disponibilidad" id="ipInactivo" value="0"  labelCampo="Inactivo" clasesStyle="" clasesStyleLabel="text-white" />
                                </div>
                            </div>
                        </div>
                        <div className=' row justify-content-center mb-4 '>
                            <div className='col-auto'>
                                {operacion === "registrar" &&
                                    <button onClick={mostrarModal} className="btn btn-primary">Registra</button>
                                }
                                {operacion === "actualizar" &&
                                    <button onClick={mostrarModal} className="btn btn-warning">Actualizar</button>
                                }
                            </div>
                            <div className='col-auto'>
                                <Link href="/ip" className="btn btn-danger ">Cancelar</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )

    return (
        <>
            <Head>
                <title>WISP | Modulo Ip Formulario</title>
                <meta name="description" content="formulario ip" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DashboardComponent contenidoDasborad={contenido} />
        </>
    )
}