import MenuComponent from "./menuComponent"

export default function DashboardComponent(props) {
    return (
        <div className="dashboard-component">
            <MenuComponent/>
            <div id="columnaOculta" className="columna-oculta"></div>
            <section id="contenido" className="contenido">
                {props.contenidoDasborad}
            </section>
            
        </div>
    )
}