import React,{useState} from "react";

function Item({ name, category }) {
  const [inCart , setCart] = useState(false)

  function handleCart () {
    setCart((inCart) => !inCart)
  }

  return (
    <li className= {inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
