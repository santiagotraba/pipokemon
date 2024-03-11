import React, { useEffect, useState } from "react";
import { getByName } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import "./Searchbar.css";

function SearchBar(props) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const search = () => {
        dispatch(getByName(name));
    };

    return (
        <div className="form searchbar">
            <input
                type="search"
                value={name}
                placeholder="Escribe el nombre de un pokemon"
                onChange={(event) => setName(event.target.value)}
            />
            <button onClick={search}>Encontrar pokemon</button>
        </div>
    );
}

export default SearchBar;
