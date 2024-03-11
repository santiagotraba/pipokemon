import React from "react";
import "./Pagination.css";

const Pagination = ({ changePage, pokemonsPerPage, filterPokemons }) => {
    const divisionTotal = [];

    for (
        let index = 1;
        index <= Math.ceil(filterPokemons / pokemonsPerPage);
        index++
    ) {
        divisionTotal?.push(index);
    }

    return (
        <div>
            {divisionTotal?.map((page) => (
                <button
                    className="button-pagination"
                    key={page}
                    onClick={() => changePage(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
