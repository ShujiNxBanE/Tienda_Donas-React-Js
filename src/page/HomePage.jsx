import { DonutCard } from "../components/DonutCard";
import { DonutContext } from "../App";
import { useContext } from "react";
export function HomePage() {

    const donutContext = useContext(DonutContext);

    return (
        <DonutCard 
                value={donutContext.listaDonas} 
                addFavorite={donutContext.addDonutToFavorites} 
        />
    );
}