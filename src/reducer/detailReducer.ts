interface IState {
    game: any;
    screenShots: any;
    isLoading: boolean;
}

const initState: IState = {
    game: { platforms: []},
    screenShots: { results: []},
    isLoading: true,
}

interface IAction {
    type: string;
    payload : {
        game: any;
        screenShots: any;
    }
}

const detailReducer = (state=initState, action:IAction) => {
    switch (action.type){

        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screenShots: action.payload.screenShots,
                isLoading: false,
            };

        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return {...state}
            
    }
}

export default detailReducer;