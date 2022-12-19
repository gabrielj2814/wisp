export default function CampoCheckboxdNormalComponent(props) {
    return (
        <>
            <div className="form-check">
                <input className={props.clasesStyle+"form-check-input"} type="checkbox" name={props.name} id={props.id} value={props.value} onChange={props.evento}/>
                <label htmlFor={props.id} className={props.clasesStyleLabel+" form-check-label"}>
                    {props.labelCampo}
                </label>
            </div>
            {/* <span id={props.id+"-mensaje"}></span> */}
        </>
    )
}