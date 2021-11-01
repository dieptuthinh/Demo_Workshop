// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const LoginForm = () => {
  // Context
  const { loginUser } = useContext(AuthContext);

  // Local state
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [alert, setAlert] = useState(null);

  const { username, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      if (!loginData.success) {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="vh-100 login-bg">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-8">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                      alt="login form"
                      className="img-fluid h-100"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form className="space-y-6" onSubmit={login}>
                        <AlertMessage info={alert} />
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fa fa-cubes fa-2x me-3 login-icon"></i>
                          <span className="h1 fw-bold mb-0">LOGIN</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3">
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            className="form-control form-control-lg"
                            required
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={onChangeLoginForm}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            name="password"
                            required
                            value={password}
                            onChange={onChangeLoginForm}
                          />
                        </div>

                        <div className="pt-1 mb-4 d-grid ">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>

                        <Link className="small text-muted td-none" to="/">
                          Forgot password?
                        </Link>
                        <p className="mb-5 pb-lg-2 text-primary">
                          Don't have an account?{" "}
                          <Link className="td-none" to="/register">
                            Register here
                          </Link>
                        </p>
                        <Link to="/" className="small text-muted td-none">
                          Terms of use.
                        </Link>
                        <Link to="/" className="small text-muted td-none">
                          Privacy policy
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
