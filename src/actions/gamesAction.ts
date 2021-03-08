import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameUrl } from './../data/api';


//Action creator

export const loadGames = () => async (dispatch) => {

    //FETCH AXIOS
    const popularData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upComingData = await axios.get(upcomingGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload : {
            popular: popularData.data.results,
            upcoming: upComingData.data.results,
            newGames: newGamesData.data.results,
        }
    });

}


export const fetchSearch = (gameName) => async(dispatch) => {
    const searchGames = await axios.get(searchGameUrl(gameName));

    dispatch({
        type: 'FETCH_SEARCHED',
        payload:{
            searched: searchGames.data.results,
        }
    })

}