// id
// name
// clasesStyleLabel
// campoObligatorio
// labelCampo
// clasesStyleCampo
// evento

export default function CampoTextAreaNormalComponent(props) {
    return (
        <>
            <label htmlFor={props.id} className={props.clasesStyleLabel+" form-label"} >
                {props.campoObligatorio==="1" &&
                    <span className="text-danger me-2">(*)</span>
                }
                {props.labelCampo} 
            </label>
            <textarea id={props.id} name={props.name} className={props.clasesStyleCampo} onChange={props.evento}></textarea>
            <span id={props.id+"-mensaje"}></span>
        </>
    )
}