import { useEffect, useState } from "react";
import SearchBar from "./Searchbar";
import { getPokemons } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Cardcontainer from "./Cardcontainer";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const filterPokemons = useSelector((state) => state?.pokemonsFilter);
    // console.log("data", filterPokemons);

    const [actuallyPage, setActuallyPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);

    const firstIndex = (actuallyPage - 1) * pokemonsPerPage;
    const lastIndex = actuallyPage * pokemonsPerPage;
    const pokemonSlice = filterPokemons?.slice(firstIndex, lastIndex);

    const changePage = (page) => {
        setActuallyPage(page);
    };

    //useEffect: cuando se monte el componente hace lo que digo
    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getPokemons());
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className="container-xl">
                <Navbar />
            </div>
            <div className="pokemons-section">
                <div className="container-xl">
                    <Cardcontainer pokemons={pokemonSlice} />
                </div>
            </div>

            <Pagination
                changePage={changePage}
                pokemonsPerPage={pokemonsPerPage}
                filterPokemons={filterPokemons?.length}
            />
            <Link to={"/form"}>
                <button className="botonlanding">Crear pokemon</button>
            </Link>
        </div>
    );
};

export default HomePage;

//loading/basic spinner react
