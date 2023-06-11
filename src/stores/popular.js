import axios from "axios";
import { defineStore } from "pinia";
import { apiKey } from "../static";

export const usePopular = defineStore({
    id: 'popular',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        popularTVs: null,
        popularMovies: null,
    }),
    actions: {
        async getPopular({ type, page = 1}){
            try {
                const res = await axios.get(`${this.url}${type}/popular?api_key=${apiKey}&language=ru-RU&page=${page}`)
                const data = res.data.results
                if (type == 'movie') this.popularMovies = data
                else this.popularTVs = data
                    
                
            } catch (e) {
            }
        }
    }
})
