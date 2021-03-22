import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPockemons} from "../../store/actions/action";
import {targetPockmonUrl} from "../../store/actionCreators/actionCreator";
import {Link} from "react-router-dom";
import style from './MainPage.module.css';

const MainPage = () => {

    const pockemons = useSelector(state => state.pockemons);
    const dispatch = useDispatch();

    const choosePockemon = (e) => {
        let targetID = e.target.id;
        pockemons.forEach((obj) => {
            for (let key in obj) {
                if (+obj[key] === +targetID) {
                    dispatch(targetPockmonUrl(obj.url))
                    localStorage.setItem('url', obj.url)
                }
            }
        })
    }

    useEffect(() => {
        dispatch(getPockemons());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className={style.container}>
            <div>
                <h1>Список покемонов</h1>
            </div>
            <div className={style.pockemons}>
                {pockemons.map(item => {
                    return <div key={item.id} className={style.pockemon}>
                        <Link to='/description'
                              id={item.id}
                              onClick={choosePockemon}
                              className={style.link}>{item.name}</Link>
                    </div>
                })}
            </div>
        </div>

    )
}

export default MainPage;