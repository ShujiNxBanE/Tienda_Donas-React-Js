
import "../Css/DonutCard.css"
import { InfoDonut } from "./InfoDonut"

export function DonutCard (props) {
    return( 
        <div className="card-container">
            <div className="card-set">
            {
                props.value.map((value) => (
                    <InfoDonut value={value} addFavorite={props.addFavorite}/>
                ))
            }
            </div>
        </div>
    )
}