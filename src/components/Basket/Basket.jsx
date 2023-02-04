import React, { useContext } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext } from "../Context/ContextProvider";
import BasketItem from "./BasketItem";
import Offer from "./Offer";
import OfferBadge from "./OfferBadge";
import SendProducts from "./SendProducts";

export default function Basket() {
  const { state, dispath } = useContext(ProductContext);
  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>{state.lng === "PR" ? "ٹوکری" : "Basket"}</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            {state.lng === "PR" ? " مصنوعات کا صفحہ" : "Products page"}
          </Link>
        </div>
        {state.basket.length > 0 && (
          <div className="favorite_linkBar">
            <div className="free_send_title">
              <img src="images/sound(1).jpg" alt="" />
              <span>
                {state.lng === "PR"
                  ? "100,000 $ سے زیادہ کی خریداریوں کے لیے شپنگ مفت ہے۔."
                  : "Shipping is free for purchases over 100,000 $."}
              </span>
            </div>
          </div>
        )}
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
            <OfferBadge />
            <div className="basket_price">
              <span>
                {state.lng === "PR" ? " کل شاپنگ کارٹ" : "Total shopping cart"}
              </span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()} $</span>
            </div>
            {state.totalPriceAfterOffer > 0 && (
              <div className="basket_offer">
                <span>
                  {state.lng === "PR" ? " رعایتی قیمت" : "Discounted price"}
                </span>
                <span>
                  {state.totalPriceAfterOffer.toLocaleString()}
                  {state.lng === "PR" ? "ڈالر" : "$"}
                </span>
              </div>
            )}
            <Offer />
            <SendProducts />
            <div className="basket_send">
              <span>
                {state.lng === "PR"
                  ? "  قابل ادائیگی کل رقم"
                  : "Total amount payable"}
              </span>
              <span>
                {state.totalPriceFainal.toLocaleString()}
                {state.lng === "PR" ? "ڈالر" : "$"}
              </span>
            </div>
            <button className="basket_button_buy">
              {state.lng === "PR"
                ? " خریداری کا عمل جاری رکھیں"
                : "Continue the purchase process"}
            </button>
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >
              {state.lng === "PR"
                ? ` شاپنگ کارٹ سے ${state.basket.length}اشیاء کو ہٹا دیں۔`
                : `Remove ${state.basket.length} items from the shopping cart`}
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
          <span className="favorite_empty_title">
            {state.lng === "PR"
              ? " شاپنگ کارٹ خالی ہے۔"
              : "The shopping cart is empty"}
          </span>
        </div>
      )}
    </>
  );
}
