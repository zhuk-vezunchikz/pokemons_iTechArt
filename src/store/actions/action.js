import axios from 'axios';
import {getFinished, getPockemonsSuccess, getStarted, targetPockemon} from "../actionCreators/actionCreator";


export const getPockemons = () => (dispatch) => {
    dispatch(getStarted());
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(res => {
            for (let i = 0; i < res.data.results.length; i++) {
                res.data.results[i].id = i +1;
            }
            dispatch(getPockemonsSuccess(res.data.results));
        })
        .catch(err => {
            alert(err)
        })
    dispatch(getFinished());
}

export const getTargetPockemon = (url) => (dispatch) => {
    dispatch(getStarted());
    axios.get(url)
        .then(res => {
            dispatch(targetPockemon(res.data))
        })
        .catch(err => {
            alert(err)
        })
    dispatch(getFinished())
}