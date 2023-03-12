import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import SignUp from "./components/auth/SignUp";

import { Home, NotFound, OfferDetails} from "./screens";
import { loadUser } from "./store/actions/authActions";
import { Container } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./components/auth/ResetPassword";
import Profile from "./components/header/Profile";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Container>
          <Container>
            <Routes>
              {/* <Route path="/signin" component={SignIn} /> */}
              <Route path="/campaign/:id" exact element={<OfferDetails />} />
              <Route path="/category" exact element={<categoryResults />} />
              <Route path="/signup" exact element={<SignUp />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/reset-password" exact element={<ResetPassword />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter>

      {/* 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/offer" exact element={<OfferDetails/>}/>
      <Route path="/category" exact element={<CategoryResults/>}/>
      <Route path="/signup" exact element={<SignUp/>}/>
    <Route  path='*' exact={true} element={<NotFound/>}/>

    </Routes> */}
    </div>
  );
}

export default App;
