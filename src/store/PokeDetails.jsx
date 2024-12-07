import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePokeStore from "./pokeStore";




const PokeDetails = () => {

    const{ fetchDetails } = usePokeStore()
    const { id } = useParams()
    const [ pokeDetails, setPokeDetails] = useState()

    useEffect(() => {

        const getDetails = async () => {
            const details = await fetchDetails(id)
            setPokeDetails(details)
        }

        getDetails()
    },[id, fetchDetails])
    
    
    if(!pokeDetails) return <p> loading... </p>

    return(
        <>
            <h1>{pokeDetails.name}</h1>
            <img src={pokeDetails.sprites.front_default} alt={pokeDetails.name} />
            <p> Height: {pokeDetails.height}</p>
            <p> weight: {pokeDetails.weight}</p>
            <p>Abilities:</p>
            <ul>
                {pokeDetails.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
        </>
    )
}

export default PokeDetails;