import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTargetPockemon} from "../../store/actions/action";
import style from './Description.module.css'

const Description = () => {

    const targetPockemon = useSelector(state => state.targetPockemon)
    const url = useSelector(state => state.targetUrl)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTargetPockemon(url || localStorage.getItem('url')))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onMainPage = () => {
        window.location.replace('/');
        localStorage.clear();
    }

    return (
        <div className={style.container}>
            <table align='center' border='2px'>
                <tbody>
                <tr>
                    <th colSpan='2'>
                        <h3>Description</h3>
                    </th>
                </tr>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        {targetPockemon.name}
                    </td>
                </tr>
                <tr>
                    <td>
                        Abilities:
                    </td>
                    <td>
                        {targetPockemon.abilities.map((item) => {
                            return <div key={item.slot}>{item.ability.name}</div>
                        })}
                    </td>
                </tr>
                <tr>
                    <td>
                        Base experience:
                    </td>
                    <td>
                        {targetPockemon.base_experience}
                    </td>
                </tr>
                <tr/>
                <tr>
                    <td>
                        Type:
                    </td>
                    <td>
                        {targetPockemon.types.map((item) => {
                            return <div key={item.slot}>{item.type.name}</div>
                        })}
                    </td>
                </tr>
                <tr>
                    <td>
                        Moves:
                    </td>
                    <td>
                        <div className={style.moves}>
                            {targetPockemon.moves.map((item) => {
                                return <div key={item.move.name}>{item.move.name}</div>
                            })}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        Held items:
                    </td>
                    <td>
                        {targetPockemon.held_items.map((item) => {
                            return <div key={item.item.name}>{item.item.name}</div>
                        })}
                    </td>
                </tr>
                </tbody>
            </table>
            <button onClick={onMainPage}>Назад</button>
        </div>

    )
}

export default Description