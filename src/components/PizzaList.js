import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, editPizza}) {

  const displayedPizzas = pizzas.map((pizza) => {
    return(
      <Pizza 
      key={pizza.id}
      pizza={pizza}
      editPizza={editPizza}
      />
    )
  })
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          //render Pizza here
        }
        {displayedPizzas}
      </tbody>
    </table>
  );
}

export default PizzaList;
