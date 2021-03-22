import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPockemons} from "../../store/actions/action";
import {targetPockmonUrl} from "../../store/actionCreators/actionCreator";
import {Link} from "react-router-dom";
import style from './MainPage.module.css';

const MainPage = () => {

    const pockHero = useSelector(state => state.pockemons);
    const dispatch = useDispatch();

    const choosePockemon = (e) => {
        let targetID = e.target.id;
        pockHero.forEach((obj) => {
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
            <div className={style.pockHeroes}>
                {pockHero.map(item => {
                    return <Link key={item.id}
                            to='/description'
                              id={item.id}
                              onClick={choosePockemon}
                              className={style.pock}>{item.name}</Link>
                })}
            </div>
        </div>

    )
}

export default MainPage;