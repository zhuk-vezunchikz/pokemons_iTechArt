import initialState from "../initialState";

function reducer(state = initialState, action) {
    switch(action.type) {
        case "GET_STARTED": return {
            ...state,
            loading: true,
        };
        case "GET_POCKEMONS_SUCCESS": return {
            ...state,
            pockemons: action.payload
        };
        case "GET_FINISHED": return {
            ...state,
            loading: false
        }
        case "TARGET_POCKEMON": return {
            ...state,
            targetPockemon: action.payload
        }
        case "TARGET_URL": return {
            ...state,
            targetUrl: action.payload
        }

        default: return state;
    }
}

export default reducer;