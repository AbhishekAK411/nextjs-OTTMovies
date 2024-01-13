import axios from "axios";
const Api_key: string = "c45a857c193f6302f2b5061c3b85e743";

export default async function getSingleMovieCast(movieId: string) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Api_key}&language=en-US`);

    const data = response?.data;

    return data;
}
