import React, { useEffect } from "react";
import {
    validationName,
    validationImage,
    validationHp,
    validationAttack,
    validationDefense,
    validationSpeed,
    validationHeight,
    validationWeight,
} from "./validation";
import { useState } from "react";
import { createPokemon, getTypes } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import "./Formpage.css";
import { Link } from "react-router-dom";

const FormPage = () => {
    const types = useSelector((state) => state?.types);
    // const mapTypes = types?.map((type) => type?.name);
    // console.log(mapTypes);
    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
    });

    useEffect(() => {
        dispatch(getTypes());
    }, []);

    //handleSubmit es el que va a lograr la funcionalidad cuando se envie el formulario

    //handleChange es el que va a lograr la funcionalidad cuando se modifique el input

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((e) => ({
            ...e,
            [name]: value,
        }));
        // console.log("nombre seleccionado", event.target.name);
        // console.log("valor seleccionado", event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validationName(data.name)) {
            alert("El nombre solo debe contener letras");
        }
        if (!validationImage(data.image)) {
            alert("La imagen debe ser una url");
        }
        if (!validationHp(data.hp)) {
            alert("La vida debe ser un numero");
        }
        if (!validationAttack(data.attack)) {
            alert("El ataque debe ser un numero");
        }
        if (!validationDefense(data.defense)) {
            alert("La defensa debe ser un numero");
        }
        if (!validationSpeed(data.speed)) {
            alert("La velocidad debe ser un numero");
        }
        if (!validationHeight(data.height)) {
            alert("La altura debe ser un numero");
        }
        if (!validationWeight(data.weight)) {
            alert("El peso debe ser un numero");
        }
        dispatch(createPokemon(data));
    };

    const alertCreate = () => {
        alert("Pokemon creado");
    };

    return (
        <div className="form-create">
            <form className="camp" onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="name">Name: </label>
                    <input
                        value={data.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="image">Image: </label>
                    <input
                        value={data.image}
                        onChange={handleChange}
                        type="text"
                        name="image"
                        id="image"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="hp">Hp: </label>
                    <input
                        value={data.hp}
                        onChange={handleChange}
                        type="text"
                        name="hp"
                        id="hp"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="attack">Attack: </label>
                    <input
                        value={data.attack}
                        onChange={handleChange}
                        type="text"
                        name="attack"
                        id="attack"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="defense">Defense: </label>
                    <input
                        value={data.defense}
                        onChange={handleChange}
                        type="text"
                        name="defense"
                        id="defense"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="speed">Speed: </label>
                    <input
                        value={data.speed}
                        onChange={handleChange}
                        type="text"
                        name="speed"
                        id="speed"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="height">Height: </label>
                    <input
                        value={data.height}
                        onChange={handleChange}
                        type="text"
                        name="height"
                        id="height"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="weight">Weight: </label>
                    <input
                        value={data.weight}
                        onChange={handleChange}
                        type="text"
                        name="weight"
                        id="weight"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="types">Types: </label>
                    <select
                        key={types?.id}
                        onChange={handleChange}
                        value={types?.id}
                        name="types"
                        id="types"
                    >
                        {types?.map((type, index) => (
                            <option
                                value={type?.id}
                                name={type?.name}
                                key={index}
                            >
                                {type?.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="campo">
                    <div className="separate-buttons">
                        <button onClick={alertCreate} type="submit">
                            Create pokemon
                        </button>
                        <Link to="/home">
                            <button>Home</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormPage;
