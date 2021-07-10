import numeral from "numeral";

import "./Table.css";

const Table = ({ countries }) => {
  return (
    <ul className="table">
      {countries.map(({ country, cases }) => (
        <li className="table__row" key={country}>
          <p>{country}</p>
          <span>
            <strong>{numeral(cases).format("0,0")}</strong>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Table;
