import React, {useState} from "react";

function PizzaForm({pizzaId, editedTopping, editedSize, editedIsVegetarian, handleFormSubmit}) {

  const [newTopping, setNewToppping] = useState("")
  const [newSize, newSetSize] = useState("")
  // const [newIsVeggie, setNewIsVeggie] = useState(null)

  console.log(editedIsVegetarian)



  function formTopping(event){
    console.log(event.target.value)
    setNewToppping(event.target.value)
  }

  function formSize(event){
    console.log(event.target.value)
    newSetSize(event.target.value)
  }

  // function formIsVegetarian(event){
  //   console.log(event.target.value)
  //   setNewIsVeggie(event.target.value)
  // }

  // 3 state var
  // 3 func to set them 
  // then use submitPizzaForm to submit the info

  function submitPizzaForm(event){
    event.preventDefault()
    // console.log(pizzaId)
    // console.log(newTopping, newSize)
    // // console.log(event.target[1])
    // // console.log(event.target[2])
    // // console.log(event.target[3])

    fetch(`http://localhost:3001/pizzas/${pizzaId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        { 
          topping: newTopping,
          size: newSize,
        }),
    })
      .then((r) => r.json())
      .then((newPizza) => handleFormSubmit(newPizza));

  }


  return (
    <form onSubmit={submitPizzaForm /*handle that submit*/}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            defaultValue={editedTopping}
            onChange={formTopping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" defaultValue={editedSize} onChange={formSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              // onChange={formIsVegetarian}
              checked={editedIsVegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              // onChange={formIsVegetarian}
              checked={!editedIsVegetarian}            
              />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
