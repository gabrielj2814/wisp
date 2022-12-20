import Head from 'next/head'
import Link from "next/link"
import DashboardComponent from '../../components/dashboardComponent'
import BreadcrumbComponent from '../../components/breadcrumbComponent'

export default function Cliente(props){
  // migas de pan
  const ruta= [
    {
      ruta:"/",
      textLink:"Home"
    },
    {
      textLink:"Cliente"
    }
  ]


    let contenido=(
      <section className='min-vh-100 modulo-cliente-inicio pb-5'>
          <BreadcrumbComponent ruta={ruta}/>
          <h1 className=' text-white text-center'>Modulo cliente</h1>
          <h3 className=' text-white text-center mb-5'>descripción del modulo</h3>
          <div className='d-flex justify-content-end mb-5 px-5'>
            <Link href="/cliente/registrar" className="btn btn-primary">Registrar</Link>
          </div>
          {/* volver la table en un componente reutilizable */}
          {/* buscar una forma en representar los datos en la vista de inicio en los modulos por que en desktop se utilizara las tablas */}
          <div className=' container-fluid'>
            <div className=' row justify-content-center'>
              <div className='col-12 col-sm-11 col-md-11 col-lg-10 col-xl-10'>
                <table className=" table table-striped table-dark table-hover table-md d-none d-lg-table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Cedula</th>
                      <th scope="col">Foto</th>
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>27636392</td>
                      <td>Foto</td>
                      <td>Gabriel Jesus</td>
                      <td>Valera Castillo</td>
                      <td>
                        <bottom className="btn btn-warning">editar</bottom>
                      </td>
                      <td>
                        <bottom className="btn btn-danger">eliminar</bottom>
                      </td>
                    </tr>

                  </tbody>
                </table>
                <table className=" table table-striped table-dark table-hover table-md d-table d-lg-none">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Foto</th>
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Foto</td>
                      <td>Gabriel Jesus</td>
                      <td>Valera Castillo</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Foto</td>
                      <td>Gabriel Jesus</td>
                      <td>Valera Castillo</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Foto</td>
                      <td>Gabriel Jesus</td>
                      <td>Valera Castillo</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
      
      </section>
    )
    return(
    <>
      <Head>
        <title>WISP | Modulo Cliente</title>
        <meta name="description" content="ss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardComponent contenidoDasborad={contenido}/>
    </>
    )
}