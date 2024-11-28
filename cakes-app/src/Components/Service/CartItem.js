import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import storeItems from "../Data/items.json";
import FormatCurrency from "./FormatCurrency";
const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
       
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {FormatCurrency(item.price)}
        </div>
      </div>
      <div>{FormatCurrency(item.price * quantity)}</div>
      <Button
      className="bg-danger text-white"
         variant="danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
      x
      </Button>
    </Stack>
  );
};

export default CartItem;