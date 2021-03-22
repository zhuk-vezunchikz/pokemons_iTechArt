import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTargetPockemon} from "../../store/actions/action";
import style from './Description.module.css'
import Table from "../../components/table";

const Description = () => {

    const targetPockemon = useSelector(state => state.targetPockemon)
    const url = useSelector(state => state.targetUrl)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTargetPockemon(url || localStorage.getItem('url')))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
    <Table/>
    )
}

export default Description