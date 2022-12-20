// id
// name
// clasesStyleLabel
// campoObligatorio
// labelCampo
// clasesStyleCampo
// placeholder
// evento

export default function CampoTextoNormalComponent(props) {
    return (
        <>
            <label htmlFor={props.id} className={props.clasesStyleLabel+" form-label"}>
                {props.campoObligatorio==="1" &&
                    <span className="text-danger me-2">(*)</span>
                }
                {props.labelCampo}
            </label>
            <input type="text" id={props.id} name={props.name} className={props.clasesStyleCampo} placeholder={props.placeholder} onChange={props.evento}/>
            <span id={props.id+"-mensaje"}></span>
        </>
    )
}