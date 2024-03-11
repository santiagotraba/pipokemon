import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByNameAndAttack } from "../redux/action";

function Buttonorder() {
    const dispatch = useDispatch();
    const [order, setOrder] = useState("asc");
    const pokemonsFilter = useSelector((state) => state?.pokemonsFilter);

    useEffect(() => {
        dispatch(orderByNameAndAttack);
    }, []);

    const orderPokemons = (event) => {
        const direction = event.target.value;
        setOrder(direction);
        dispatch(orderByNameAndAttack(direction));
    };

    return (
        <div className="form form-select">
            <select value={order} onChange={orderPokemons}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
}

export default Buttonorder;
