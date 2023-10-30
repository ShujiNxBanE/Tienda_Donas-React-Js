import { FilterButton } from "./FilterButton";
import { AgregarDona } from "./AgregarDona";
import { GaleriaDonas } from "./GaleriaDonas";
export function NavBar (props){

    const NavBarStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: '15px'
    };
    const StyleOnNavbar = {
        backgroundColor: "#F9AFE1"
    };

    return(
        <div style={StyleOnNavbar}>
            <img src="https://img.freepik.com/vector-gratis/donut-derretido-flotante-dibujos-animados-vector-icono-ilustracion-alimento-objeto-icono-concepto-aislado-vector-plano_138676-9936.jpg?w=740&t=st=1698592754~exp=1698593354~hmac=748788a5fd192721e5ab242e2893ea28910087e07a6ad540e38e10397064df72"
                width="50px"
            />
            <span> | Donas de todo tipo para satisfacer tu paladar, con diferentes sabores y colores que endulsan incluso la vista, disfruta de nuestras recetas hechas en {props.nombreLocal} ! ! ! !</span>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={props.onClick} type="button">{props.nombreLocal}</a>
                    <div style={NavBarStyle}>
                        <FilterButton 
                            nombreLocal={props.nombreLocal} 
                            favoritas={props.elements} 
                            removeFavorite={props.removeFavorite}
                        />
                        <AgregarDona nombreLocal={props.nombreLocal}
                                    NewDonut={props.NewDonut}
                        />
                        <GaleriaDonas nombreLocal={props.nombreLocal}
                            value={props.value}
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
}