import axios from "axios";
import { defineStore } from "pinia";
import { apiKey } from "../static";

export const useUpcoming = defineStore({
    id: 'upcoming',
    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        upcoming: null,
    }),
    actions: {
        async getUpcoming() {
            try {
                const res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-RU&page=1`)
                const ans = res.data.results
                this.upcoming = ans
               
            } catch (err) {
               
            }
        }
    }
})
