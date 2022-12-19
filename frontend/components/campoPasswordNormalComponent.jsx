export default function CampoPasswordNormalComponent(props) {
    return (
        <>
            <label htmlFor={props.id} className={props.clasesStyleLabel+" form-label"}>
                {props.campoObligatorio==="1" &&
                    <span className="text-danger me-2">(*)</span>
                }
                {props.labelCampo}
            </label>
            <input type="password" id={props.id} name={props.name} className={props.clasesStyle} placeholder={props.placeholder} onChange={props.evento}/>
            <span id={props.id+"-mensaje"}></span>
        </>
    )
}