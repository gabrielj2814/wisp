import MenuComponent from "./menuComponent"

export default function DashboardComponent(props) {
    return (
        <div className="dashboard-component">
            <MenuComponent/>
            {/* TODO: hacer el layout dashboard con tres columnas y trabjar el menu en fix para que se mantenga fijo en modo desktop */}
            <section className="contenido">
                {props.contenidoDasborad}
            </section>
            
        </div>
    )
}