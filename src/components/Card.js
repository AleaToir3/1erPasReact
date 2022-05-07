import React from 'react';

const Card = ({country}) => {
    return (
            <li className="card">
                <img src={country.flags.svg} alt={"drapeau "+country.translations.fra.common} />
                <div className="infos">
                    <h2> {country.translations.fra.common} :</h2>
                    <h4>{country.capital}</h4>
                    <h4>Pop {country.population.toLocaleString()}</h4>
                </div>
            </li>
    );
};

export default Card;