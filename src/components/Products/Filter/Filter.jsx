import React, { useContext } from "react";
import { FilterContext } from "../../Context/ContextFilter";
import "./Filter.css";
import { ProductContext } from "./../../Context/ContextProvider";

export default function Filter() {
  const { state, dispath } = useContext(FilterContext);
  const { state: lng } = useContext(ProductContext);

  return (
    <div className="filter_container">
      <div className="filter_btnBox">
        <button
          onClick={() => dispath({ type: "ALL" })}
          className={`filter_btn  ${state.category === "ALL" && "active"}`}
        >
          {lng.lng === "PR" ? "تمام" : "All"}
        </button>
        <button
          onClick={() => dispath({ type: "VEGETABLE" })}
          className={`filter_btn ${state.category === "VEGETABLE" && "active"}`}
        >
          {lng.lng === "PR" ? "سبزیاں" : "Vegetables"}
        </button>
        <button
          onClick={() => dispath({ type: "FRUIT" })}
          className={`filter_btn ${state.category === "FRUIT" && "active"}`}
        >
          {lng.lng === "PR" ? "پھل" : "Fruit"}
        </button>
        <button
          onClick={() => dispath({ type: "NUTS" })}
          className={`filter_btn ${state.category === "NUTS" && "active"}`}
        >
          {lng.lng === "PR" ? "گری دار میوے" : "Nuts"}
        </button>
        <button
          onClick={() => dispath({ type: "BEANS" })}
          className={`filter_btn ${state.category === "BEANS" && "active"}`}
        >
          {lng.lng === "PR" ? "پھلیاں" : "Beans"}
        </button>
      </div>
    </div>
  );
}
