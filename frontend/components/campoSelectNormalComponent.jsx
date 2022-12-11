export default function CampoSelectdNormalComponent(props) {
    return (
        <>
            <label htmlFor={props.id} className="form-label">{props.labelCampo}</label>
            <select id={props.id} name={props.name} className={props.clasesStyle} onChange={props.evento}>
                {props.opcionesSelect.map((opcion,index) => {
                    return(<option key={index} value={opcion.value} >{opcion.valueOption}</option>)
                })}
            </select>
            <span id={props.id+"-mensaje"}></span>
        </>
    )
}