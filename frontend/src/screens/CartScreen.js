import React from "react";
import { useSearchParams, useParams } from "react-router-dom";

const CartScreen = () => {
  const [searchParms] = useSearchParams();
  const qty = Number(searchParms.get("qty"));
  const { id } = useParams();
  console.log(qty, id);
  return <div>Cart</div>;
};

export default CartScreen;
