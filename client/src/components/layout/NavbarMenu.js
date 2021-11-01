import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
const NavbarMenu = () => {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();

  const isLogin = () => {
    return (
      <>
        <Navbar
          expand="lg"
          bg="white"
          variant="light"
          className="py-3 shadow-sm"
        >
          <div className="container-fluid">
            <Navbar.Brand className=" fw-bold fs-4">
              Frontend <span className="text-warning">Developer</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto mb-lg-0">
                <Nav.Link
                  className="font-weight-bolder"
                  to="/dashboard"
                  as={Link}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="font-weight-bolder"
                  to="/products"
                  as={Link}
                >
                  Products
                </Nav.Link>
                <Nav.Link className="font-weight-bolder" to="/about" as={Link}>
                  About
                </Nav.Link>
              </Nav>

              <Nav className="buttons">
                <Nav.Link
                  className="font-weight-bolder mr-2 text-info"
                  disabled
                >
                  Welcome {username}
                </Nav.Link>
                <Link
                  variant="white"
                  className="btn btn-warning ms-2 font-weight-bolder text-white mb-0"
                  to="/cart"
                >
                  <i className="fa fa-shopping-cart me-1"></i>
                  Cart
                </Link>
                <Nav.Link
                  variant="white"
                  className="btn btn-warning ms-2 font-weight-bolder text-white"
                  onClick={logout}
                >
                  <i className="fa fa-sign-out me-1"></i>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  };
  const notLogin = () => {
    return (
      <>
        <Navbar
          expand="lg"
          bg="white"
          variant="light"
          className="py-3 shadow-sm"
        >
          <div className="container">
            <Navbar.Brand className=" fw-bold fs-4">
              Frontend <span className="text-warning">Developer</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto mb-lg-0">
                <Nav.Link
                  className="font-weight-bolder"
                  to="/dashboard"
                  as={Link}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="font-weight-bolder"
                  to="/products"
                  as={Link}
                >
                  Products
                </Nav.Link>
                <Nav.Link className="font-weight-bolder" to="/about" as={Link}>
                  About
                </Nav.Link>
              </Nav>

              <Nav className="buttons">
                <Nav.Link
                  variant="white"
                  className="btn btn-warning font-weight-bolder text-white px-3"
                  onClick={logout}
                >
                  <i className="fa fa-sign-in me-1"></i>
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  };

  return (
    <>
      {username && isLogin()}
      {!username && notLogin()}
    </>
  );
};

export default NavbarMenu;
