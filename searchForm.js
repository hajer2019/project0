import React from "react";

function Searchform() {
  return (
    <div className="form">
      <h3>Recherche de bien </h3>
      <div className="active-cyan-3 active-cyan-4 mb-4">
        <input
          className="form-control"
          type="text"
          placeholder="Ville"
          value=""
        />
        <input
          className="form-control"
          type="text"
          placeholder="Type de bien "
          value=""
        />
        <input
          className="form-control"
          type="text"
          placeholder="nombre de chambres"
          value=""
        />
        <input
          className="form-control"
          type="text"
          placeholder="Prix"
          value=""
        />
        <button value=""> </button>
      </div>
    </div>
  );
}

export default Searchform;
