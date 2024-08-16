
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    parent_platform: boolean;
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;

}

const useGame = (selectGenre: Genre | null) =>
    useData<Game>(
        '/games',
        { params: selectGenre ? { genres: selectGenre.id } : {} },  // Use the correct parameter 'genres'
        [selectGenre?.id] // Re-fetch data when the selected genre changes
    );

export default useGame;
