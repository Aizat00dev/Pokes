import { useEffect } from "react"
import usePokeStore from "./pokeStore"
import { Link } from "react-router-dom"



const PokeList = () => {

    const{pokes, fetchPokes} = usePokeStore()


    useEffect(()=>{

        fetchPokes()

    },[fetchPokes])


    return(
        <>
        {
            pokes && pokes.results ? (
                <ul>
                    {pokes.results.map((poke, index) =>(
                            <li key={index}><Link to={`/pokes/${poke.name}`}>{poke.name}</Link></li>
                    ))}
                </ul>
            ) : <p> is not available</p>
        }
        </>
    )
}

export default PokeList;