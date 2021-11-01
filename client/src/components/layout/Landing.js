// import { Redirect } from 'react-router-dom'
import Home from "../../views/Home";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
// import Dashboard from "../../views/Dashboard";
const Landing = () => {
	const {
    authState: {  isAuthenticated },
  } = useContext(AuthContext);
  if (!isAuthenticated) {
    return (
      <>
        <Home />
        {/* <Redirect to='/login' /> */}
      </>
    );
  }
  // else if (isAuthenticated) {
  //   return (
  //     <>
  //       <Dashboard />
  //     </>
  //   );
  // }
};

export default Landing;
