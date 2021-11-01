import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import About from "./views/About";
import PostContextProvider from "./contexts/PostContext";
import products from "./views/Products";
import ProductDetail from "./components/products/ProductDetail";
import Cart from "./components/cart/Cart";
import Home from "./views/Home";

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/login"
              render={(props) => <Auth {...props} authRoute="login" />}
            />
            <Route
              exact
              path="/register"
              render={(props) => <Auth {...props} authRoute="register" />}
            />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/about" component={About} />
            <ProtectedRoute exact path="/products" component={products} />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <ProtectedRoute
              exact
              path="/productdetail/:id"
              component={ProductDetail}
            />
          </Switch>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
