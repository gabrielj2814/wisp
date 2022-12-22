export default function AlertComponent(props){

    function ocultarAlerta(boton){
        let {target} = boton
        let $alerta = target.parentElement
        $alerta.remove()
        // console.log(target.parentElement)

    }
    // hide para ocultar
    // show para mostrar
    return(
        <div className={props.clasesStyleAlert+" alert alert-dismissible fade hide mb-5"} role="alert">
            {props.texto}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={ocultarAlerta}></button>
        </div>

    )

}