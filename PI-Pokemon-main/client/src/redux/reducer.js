//imports:
import {
    GET_POKEMONS,
    GET_POKEMON_BY_ID,
    GET_POKEMON_BY_NAME,
    FILTER_POKEMON_BY_ORIGIN,
    FILTER_BY_TYPE,
    GET_TYPES,
    ORDER_BY_NAME_AND_ATACK,
    CREATE_POKEMON,
} from "./action";

//estado inicial
const initialState = {
    allPokemons: [],
    detailPokemon: [],
    pokemonsFilter: [],
    types: [],
};

const reducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: payload,
                pokemonsFilter: payload,
            };

        case GET_POKEMON_BY_ID:
            return {
                ...state,
                detailPokemon: payload,
            };

        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemonsFilter: [...payload],
            };
        case FILTER_POKEMON_BY_ORIGIN:
            let response = [];

            if (payload === "api") {
                response = state.allPokemons.filter(
                    (pokemon) => pokemon.id <= 120
                );
            }
            console.log(state.allPokemons);

            if (payload === "database") {
                response = state.allPokemons.filter(
                    (pokemon) => typeof pokemon.id != "number"
                );
            }

            if (payload == "all") {
                response = state.allPokemons;
            }
            return {
                ...state,
                pokemonsFilter: response,
            };
        case FILTER_BY_TYPE:
            let arrayOfTypes = [];
            if (payload) {
                arrayOfTypes = state.allPokemons.filter((pokemon) => {
                    return pokemon.types.some((pokeType) => {
                        return pokeType.type && pokeType.type.name === payload;
                    });
                });
            } else {
                arrayOfTypes = state.allPokemons;
            }

            return {
                ...state,
                pokemonsFilter: arrayOfTypes,
            };
        case GET_TYPES:
            return {
                ...state,
                types: payload,
            };

        case ORDER_BY_NAME_AND_ATACK:
            const orderPokemons = [...state.pokemonsFilter].sort((a, b) => {
                if (payload === "asc") {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });

            return {
                ...state,
                pokemonsFilter: orderPokemons,
            };
    }
};

// ["emanuel, rafa"];
// const state = {
//     allPokemons: [...allPokemons, payload],
// };

// persona.name = "toni";
export default reducer;

//primero creo la action
//luego mando la action al reducer
//el reducer procesa la informacion y actualiza el estado
//luego de esto lo conecto con el front
//tengo que usar el useSelector para conectar con el estado y leerlo para luego modificarlo
