export default function BotonComponent(props) {
    return (
        <button id={props.id} className={"btn "+props.clasesStyle} onClick={props.evento}>Hola</button>
    )
}