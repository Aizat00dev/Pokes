import { create } from "zustand";
import axios from "axios";



const usePokeStore = create(set => ({

    pokes:[],
    fetchPokes: async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
       set({pokes: response.data})
    },

    fetchDetails: async (name) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return response.data
    }

}))

export default usePokeStore;