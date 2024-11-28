import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from '../Data/items.json';
import StoreItem from "./StoreItem";

const Store = () => {
  return (
    <>
         
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;