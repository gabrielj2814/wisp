import Link from "next/link"

export default function BreadcrumbComponent(props){
    return(
        <nav className="migas-de-pan mb-5" aria-label="breadcrumb">
            <ol className="breadcrumb">
                {props.ruta.map((dataRuta,index) => {
                    if(dataRuta.ruta){
                        return <li className="breadcrumb-item"><Link href={dataRuta.ruta}>{dataRuta.textLink}</Link></li>
                    }
                    else{
                        return <li className="breadcrumb-item active" aria-current="page">{dataRuta.textLink}</li>
                    }
                })}
                
            </ol>
        </nav>
    )
}