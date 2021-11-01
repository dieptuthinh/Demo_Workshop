import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { ListGroup, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../../redux/productSlice";
import { getAllProducts } from "../../redux/productSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const reload = () => {
    toast.success("Cart checkout successful");
    window.location.reload();
  };

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleDel = (item) => {
    dispatch(deleteItem(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <button
              onClick={handleShow}
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pay Purchases</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {products.map((product) => (
              <ListGroup key={product.id}>
                <ListGroup.Item>
                  {product.title}: ${product.qty * product.price}
                </ListGroup.Item>
              </ListGroup>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-outline-primary " onClick={reload}>
              Yes
            </Button>
            <Button className="btn btn-outline-warning " onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <div>
      {products.length === 0 && emptyCart()}
      {products.length !== 0 && products.map(cartItems)}
      {products.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
