import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100 "   style={{ width:"300px",boxShadow: "0 2px 5px rgb(188, 188, 255)"}}>
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4 text-slate-900">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
        {quantity === 0 ? (
            <Button className="w-100"  style={{backgroundColor:"#e43558",color:"white" ,border:"none"}} onClick={() => increaseCartQuantity(id)}>
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button style={{backgroundColor:"rgb(6, 6, 71)",color:"white" ,border:"none"}}  onClick={() => decreaseCartQuantity(id)}>-</Button>

                <div>
                  <span className="fs-3">{quantity} in cart</span>
                </div>
                <Button  style={{backgroundColor:"rgb(6, 6, 71)",color:"white" ,border:"none"}}  onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                className="bg-danger text-white" 
                size="sm"
                onClick={() => removeFromCart(id)}
                style={{backgroundColor:"#e43558",color:"white" ,border:"none"}}  

              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;