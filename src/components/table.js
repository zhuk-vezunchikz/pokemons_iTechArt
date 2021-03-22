import React from 'react';
import {useSelector} from "react-redux";
import style from './table.module.css';

const Table = () => {
    const targetPockemon = useSelector(state => state.targetPockemon)
    const onMainPage = () => {
        window.location.replace('/');
        localStorage.clear();
    }
    return (
        <section>

            <header>
                <h1>Description</h1>
            </header>

            <div className={style.row}>
                <div className={style.leftItem}><b>Name:</b></div>
                <div>
                    {targetPockemon.name}
                </div>
            </div>

            <div className={style.row}>
                <div className={style.leftItem}><b>Abilities:</b></div>
                <div className={style.items}>
                    {targetPockemon.abilities.map((item) => {
                        return <div key={item.slot}>{item.ability.name}</div>
                    })}
                </div>
            </div>

            <div className={style.row}>
                <div className={style.leftItem}>
                    <b>Base experience:</b>
                </div>
                <div>
                    {targetPockemon.base_experience}
                </div>
            </div>

            <div className={style.row}>
                <div className={style.leftItem}>
                    <b>Type:</b>
                </div>
                <div className={style.items}>
                    {targetPockemon.types.map((item) => {
                        return <div key={item.slot}>{item.type.name}</div>
                    })}
                </div>
            </div>

            <div className={style.row}>
                <div className={style.leftItem}>
                    <b>Moves:</b>
                </div>
                <div className={style.items}>
                    {targetPockemon.moves.map((item) => {
                        return <div key={item.move.name}>{item.move.name}</div>
                    })}
                </div>
            </div>

            <div className={style.row}>
                <div className={style.leftItem}>
                    <b>Held items:</b>
                </div>
                <div className={style.items}>
                    {targetPockemon.held_items.map((item) => {
                        return <div key={item.item.name}>{item.item.name}</div>
                    })}
                </div>
            </div>
            <button onClick={onMainPage}><b>Назад</b></button>
        </section>
    )
}

export default Table;