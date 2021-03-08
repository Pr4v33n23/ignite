interface IState {
    popular: Array<string>;
    newGames: Array<string>;
    upComing: Array<string>;
    searched: Array<string>;
}
interface IAction {
    type: string;
    payload : {
        popular: Array<string>;
        upcoming: Array<string>;
        newGames: Array<string>;
        searched: Array<string>;
    }
}

const  initState : IState = {
    popular: [],
    newGames : [],
    upComing : [],
    searched: []
}


const gamesReducer = (state=initState, action:IAction) => {
    switch (action.type){
        case "FETCH_GAMES":
            return {...state,
                popular: action.payload.popular,
                upComing: action.payload.upcoming,
                newGames: action.payload.newGames,
            }
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched
            }
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searched: []
            }
        default:
            return {...state}
    }

}

export default gamesReducer;