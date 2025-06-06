import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Container className="mt-5">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cartItems.map((course) => (
            <ListGroup.Item key={course.id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{course.title}</strong> - ₹{course.price}
                </div>
                <Button variant="danger" size="sm" onClick={() => handleRemove(course.id)}>
                  Remove
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Cart;
