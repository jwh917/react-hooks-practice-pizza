import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])

  const [pizzaId, setPizzaId] = useState(0)
  const [editedTopping, setEditedTopping] = useState("")
  const [editedSize, setEditedSize] = useState("Small")
  const [editedIsVegetarian, setEditedIsVegetarian] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((pizzaData) => setPizzas(pizzaData));
  }, []);


  function editPizza(pizza){
    setPizzaId(pizza.id)
    setEditedTopping(pizza.topping)
    setEditedSize(pizza.size)
    setEditedIsVegetarian(pizza.vegetarian)
  }

  function handleFormSubmit(newPizza){
    console.log(newPizza)

    const updatedPizza = pizzas.map((pizza) => {
      if (pizza.id === newPizza.id) {
        return newPizza
      } else {
        return pizza
      }
    })
    setPizzas(updatedPizza);

  }

  return (
    <>
      <Header />
      <PizzaForm pizzaId={pizzaId} editedTopping={editedTopping} editedSize={editedSize} editedIsVegetarian={editedIsVegetarian} handleFormSubmit={handleFormSubmit}/>
      <PizzaList pizzas={pizzas} editPizza={editPizza}/>
    </>
  );
}

export default App;
