import Head from 'next/head'
import DashboardComponent from '../../components/dashboardComponent'

export default function Cliente(props){
    let contenido=(
      <section className=' min-vh-100 py-5 px-2 modulo-cliente-inicio'>
          <h1 className=' text-white text-center'>Modulo cliente</h1>
          <h3 className=' text-white text-center mb-5'>descripción del modulo</h3>
          <div className='d-flex justify-content-end mb-5'>
            <bottom className="btn btn-primary">Registrar</bottom>
          </div>
          {/* volver la table en un componente reutilizable */}
          {/* buscar una forma en representar los datos en la vista de inicio en los modulos por que en desktop se utilizara las tablas */}
          <table className=" table table-striped table-dark table-hover  table-md ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Cedula</th>
                <th scope="col">Foto</th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Dirección</th>
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
                  <bottom className="btn btn-info boton-info-direccion">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                  </bottom>
                </td>
                <td>
                  <bottom className="btn btn-warning">editar</bottom>
                </td>
                <td>
                  <bottom className="btn btn-danger">eliminar</bottom>
                </td>
              </tr>


              <tr>
                <td>1</td>
                <td>27636392</td>
                <td>Foto</td>
                <td>Gabriel Jesus</td>
                <td>Valera Castillo</td>
                <td> 
                  <bottom className="btn btn-info boton-info-direccion">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                  </bottom>
                </td>
                <td>
                  <bottom className="btn btn-warning">editar</bottom>
                </td>
                <td>
                  <bottom className="btn btn-danger">eliminar</bottom>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>27636392</td>
                <td>Foto</td>
                <td>Gabriel Jesus</td>
                <td>Valera Castillo</td>
                <td> 
                  <bottom className="btn btn-info boton-info-direccion">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                  </bottom>
                </td>
                <td>
                  <bottom className="btn btn-warning">editar</bottom>
                </td>
                <td>
                  <bottom className="btn btn-danger">eliminar</bottom>
                </td>
              </tr>

            </tbody>
          </table>
      
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