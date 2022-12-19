export default function CampoSelectdNormalComponent(props) {
    return (
        <>
            <label htmlFor={props.id} className={props.clasesStyleLabel+" form-label"}>
                {props.campoObligatorio==="1" &&
                    <span className="text-danger me-2">(*)</span>
                }
                {props.labelCampo}
            </label>
            <select id={props.id} name={props.name} className={props.clasesStyle} onChange={props.evento}>
                {props.opcionesSelect.map((opcion,index) => {
                    return(<option key={index} value={opcion.value} >{opcion.valueOption}</option>)
                })}
            </select>
            <span id={props.id+"-mensaje"}></span>
        </>
    )
}