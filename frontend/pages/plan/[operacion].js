import Head from 'next/head'
import DashboardComponent from '../../components/dashboardComponent'
import BreadcrumbComponent from '../../components/breadcrumbComponent'
import Link from "next/link"
import AlertComponent from '../../components/alertComponent'
// component form
import CampoTextoNormalComponent from "../../components/campoTextoNormalComponent"
import CampoTextAreaNormalComponent from "../../components/campoTextAreaNormalComponent"
import CampoSelectdNormalComponent from '../../components/campoSelectNormalComponent'
import ModalComponent from '../../components/modalComponent'
// hook
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Formulario() {
    const router = useRouter()
    const [maximoVelocidad,setMaximoVelocidad] = useState(10)
    let velocidades = []
    for (let index = 0; index < maximoVelocidad; index++) {
        velocidades.push(
            {
                value:index+1,
                valueOption:index+1
            }
        )
        
    }
    let medidas = [
        {
            value:"mb",
            valueOption:"MB"
        },
        {
            value:"gb",
            valueOption:"GB"
        },
    ]
    let { operacion } = router.query
    const ruta = [
        {
            ruta: "/",
            textLink: "Home"
        },
        {
            ruta: "/plan",
            textLink: "Plan"
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
        <section className='min-vh-100 modulo-plan-formulario pb-5'>
            <BreadcrumbComponent ruta={ruta} />
            <div className='d-flex mb-5 px-5'>
                <Link href="/cliente" className="btn btn-primary">Regresar</Link>
            </div>
            <h1 className=' text-white text-center mb-2'>Formulario Plan</h1>
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
                <form id="formularioPlan" onSubmit={cancelarOnSubmit} className=' row justify-content-center'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11'>
                        <div className=' row justify-content-center'>
                            <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                                <CampoTextoNormalComponent id="nombre" name="nombre" campoObligatorio="1" labelCampo="Nombre" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="NOMBRE" />
                            </div>
                            <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                                <CampoSelectdNormalComponent opcionesSelect={velocidades} id="velocidad" name="velocidad" campoObligatorio="1" labelCampo="Velocidad" clasesStyleLabel="text-white" clasesStyle="form-control" />
                            </div>
                            <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                                <CampoSelectdNormalComponent opcionesSelect={medidas} id="medida_velocidad" name="medida_velocidad" campoObligatorio="1" labelCampo="Medida" clasesStyleLabel="text-white" clasesStyle="form-control" />
                            </div>
                        </div>
                        <div className=' row justify-content-center'>                            
                            <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3'>
                                <CampoTextoNormalComponent id="precio" name="precio" campoObligatorio="1" labelCampo="Precio" clasesStyleLabel="text-white" clasesStyleCampo="form-control" placeholder="PRECIO" />
                            </div>
                            <div className='mb-4 col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 offset-10 offset-sm-10 offset-md-3 offset-lg-3 offset-xl-3 d-none d-md-flex'></div>
                        </div>
                        <div className=' row justify-content-center'>
                            <div className='mb-4 col-10 col-sm-10 col-md-9 col-lg-9 col-xl-9'>
                                <CampoTextAreaNormalComponent id="descripcion" name="descripcion" campoObligatorio="1" labelCampo="Descripción" clasesStyleLabel="text-white" clasesStyleCampo="form-control" />
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
                                <Link href="/plan" className="btn btn-danger ">Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )

    return (
        <>
            <Head>
                <title>WISP | Modulo Plan Formulario</title>
                <meta name="description" content="ss" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DashboardComponent contenidoDasborad={contenido} />
        </>
    )
}