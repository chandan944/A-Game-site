
import { GameQuery } from "../App";
import useData from "./useData";


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
    rating_top : number;


}


const useGame = (
    gameQuery: GameQuery
) =>
    useData<Game>(
        '/games',
        { 
            params: { 
                genres: gameQuery.genre?.id, 
                platforms: gameQuery.platform?.id ,
                ordering: gameQuery.sortOrder ,// Change this to "ordering"
                search:gameQuery.TextInput
            } 
        },
        [gameQuery]
    );


export default useGame;
