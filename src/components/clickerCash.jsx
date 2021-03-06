import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const ClickerCash = () => {
    const dispatch = useDispatch();
    // маппинг значения из store.
    const cash = useSelector((state) => state.cashReducer.cash);

    const addCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    return (
        <div style={{border: '1px solid black', display: 'flex', justifyContent: 'center'}}>
            <div style={{ fontSize: '3rem' }}>Баланс: {cash}</div>
            <div style={{ display: "flex" }}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
            </div>
        </div>
    );
};

export default ClickerCash;