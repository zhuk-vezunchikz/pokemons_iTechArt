import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTargetPockemon} from "../../store/actions/action";
import Table from "../../components/table";

const Description = () => {

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