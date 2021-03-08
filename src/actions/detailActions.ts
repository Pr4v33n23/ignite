import axios from 'axios';
import { getGameDetails, getGameScreenShot } from '../data/api';

export const loadDetail = (id: number) => async (dispatch: Function) => {

    dispatch({
        type: "LOADING_DETAIL"
    });

    const detailData = await axios.get(getGameDetails(id));
    const screenShotData = await axios.get(getGameScreenShot(id));


    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detailData.data,
            screenShots: screenShotData.data
        }
    })
}

