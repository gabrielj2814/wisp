export default function CampoTextoNormalComponent(props) {
    return (
        <>
            <label htmlFor={props.id} className="form-label">{props.labelCampo}</label>
            <input type="text" id={props.id} name={props.name} className={props.clasesStyle} placeholder={props.placeholder} onChange={props.evento}/>
            <span id={props.id+"-mensaje"}></span>
        </>
    )
}