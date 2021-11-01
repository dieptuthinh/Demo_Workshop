// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const RegisterForm = () => {
	// Context
	const { registerUser } = useContext(AuthContext)

	// Local state
	const [registerForm, setRegisterForm] = useState({
		username: '',
		password: '',
		confirmPassword: ''
	})

	const [alert, setAlert] = useState(null)

	const { username, password, confirmPassword } = registerForm

	const onChangeRegisterForm = event =>
		setRegisterForm({
			...registerForm,
			[event.target.name]: event.target.value
		})

	const register = async event => {
		event.preventDefault()

		if (password !== confirmPassword) {
			setAlert({ type: 'danger', message: 'Passwords do not match' })
			setTimeout(() => setAlert(null), 5000)
			return
		}

		try {
			const registerData = await registerUser(registerForm)
			if (!registerData.success) {
				setAlert({ type: 'danger', message: registerData.message })
				setTimeout(() => setAlert(null), 5000)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
    <>
      <section className="vh-100 login-bg">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-7">
              <div className="card mt-3">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img2.jpg"
                      alt="login form"
                      className="img-fluid h-100"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form className="space-y-6" onSubmit={register}>
                        <AlertMessage info={alert} />
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fa fa-cubes fa-2x me-3 login-icon"></i>
                          <span className="h1 fw-bold mb-0">REGISTER</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3">Sign up today</h5>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            name="username"
                            required
                            value={username}
                            onChange={onChangeRegisterForm}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            className="form-control form-control-lg"
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            value={password}
                            onChange={onChangeRegisterForm}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            required
                            value={confirmPassword}
                            onChange={onChangeRegisterForm}
                          />
                        </div>

                        <div className="pt-1 mb-4 d-grid ">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            // onClick={register}
                            type="submit"
                          >
                            Sign up
                          </button>
                        </div>

                        <Link className="small text-muted td-none" to="/">
                          Forgot password?
                        </Link>
                        <p className="mb-5 pb-lg-2 text-primary">
                          Already have an account?
                          <Link
                            className="td-none"
                            to="/login"
                            // onClick={() => history.push('/login')}
                          >
                            Login here
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
}

export default RegisterForm
