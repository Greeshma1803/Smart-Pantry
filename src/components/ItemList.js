// src/components/ItemList.js
import React from "react";

const ItemList = ({ items }) => (
  <ul className="item-list">
    {items.map((item, index) => (
      <li key={index} className="item">
        <p>Name: {item.name}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Purchase Date: {item.purchaseDate.toLocaleDateString()}</p>
        <p>Expiration Date: {item.expirationDate.toLocaleDateString()}</p>
      </li>
    ))}
  </ul>
);

export default ItemList;
