
export function GaleriaDonas (props)  {
  return (
    <div>
        <button className="btn btn-outline-warning" type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"
        >Galeria de Donas</button>
        <div className="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasBottomLabel">{props.nombreLocal} / Galeria de Donas</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body small">
                {
                  props.value.map((element) =>(
                        <img src={element.Imagen} width="85px" height="85px"/>
                  ))
                }
            </div>
        </div>
    </div>
  )
}
