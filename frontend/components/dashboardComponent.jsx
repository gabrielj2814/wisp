import MenuComponent from "./menuComponent"

export default function DashboardComponent(props) {
    return (
        <div className="dashboard-component">
            <MenuComponent/>
            <div className="columna-oculta"></div>
            <section className="contenido">
                {props.contenidoDasborad}
            </section>
            
        </div>
    )
}