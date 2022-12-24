export default function ModalComponent(props){
    let {children} = props
    return(
        <div className={props.clasesStyle+" modal fade"} id={props.id} tabIn dex="-1" aria-labelledby="modalInfoLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                {children}
              </div>
            </div>
          </div>
    )
}