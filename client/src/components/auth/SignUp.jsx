import React from "react";
import "../../components/header/style.css";
import { useState, useRef } from "react";

import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
import { useForm } from "react-hook-form";
import OutlinedInput from "@mui/material/OutlinedInput";
import "../header/style.css";
const style = { color: "#006E2E", fontSize: "24px" };

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmitData = (e, data) => {
    console.log(data);
    // e.preventDefault();
    // console.log("user33",user)
    dispatch(signUp(user));

    setUser({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone: "",
    });
  };

  if (auth._id) return <Navigate to="/" />;

  const handleError = (errors) => {};

  const registerOptions = {
    first_name: { required: "First Name is required" },
    last_name: { required: "Last Name is required" },
    email: { required: "Email is required" },
    phone: {
      minLength: {
        value: 10,
        message: "Phone number must have at least 10 digits",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  return (
    <>
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="brand-name">Mooli</span>
        </Link>
      </div>
      <hr></hr>

      <form
        autoComplete="off"
        onSubmit={handleSubmit(handleSubmitData, handleError)}
      >
        <Card
          className="mt-4"
          variant="outlined"
          style={{ margin: "auto" }}
          sx={{
            width: {
              sx: 1.0, // 100%
              sm: 250,
              md: 400,
              lg: 640,
            },
          }}
        >
          <CardContent>
            <div className="d-flex">
              <div className="px-2 flex-fill">
                {/* <span className="link-item-signin">First Name</span> */}

                <TextField
                  className="mb-4"
                  label={"First Name"}
                  fullWidth
                  // helperText="Email"
                  id="demo-helper-text-misaligned"
                  value={user.first_name}
                  name="first_name"
                  {...register("first_name", registerOptions.first_name)}
                  onChange={(e) =>
                    setUser({ ...user, first_name: e.target.value })
                  }
                />

                <small className="text-danger mb-4">
                  {errors?.first_name && errors.first_name.message}
                </small>
              </div>

              <div className="px-2 flex-fill">
                {/* <span className="link-item-signin">Last Name</span> */}
                <TextField
                  className="mb-4"
                  label={"Last Name"}
                  fullWidth
                  // helperText="Email"
                  id="demo-helper-text-misaligned"
                  name="last_name"
                  {...register("last_name", registerOptions.last_name)}
                  value={user.last_name}
                  onChange={(e) =>
                    setUser({ ...user, last_name: e.target.value })
                  }
                />
                <small className="text-danger mb-4">
                  {errors?.last_name && errors.last_name.message}
                </small>
              </div>
            </div>
            <div>
              {/* <span className="link-item-signin">Phone</span> */}
              <TextField
                className="mb-4"
                label={"Phone"}
                fullWidth
                // helperText="Email"
                id="demo-helper-text-misaligned"
                name="phone"
                {...register("phone", registerOptions.phone)}
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
              <small className="text-danger  mb-4">
                {errors?.phone && errors.phone.message}
              </small>
            </div>
            <div>
              {/* <span className="link-item-signin">Email</span> */}
              <TextField
                className="mb-4"
                label={"Email"}
                fullWidth
                // helperText="Email"
                id="demo-helper-text-misaligned"
                type="email"
                name="email"
                {...register("email", { required: "Email is required" })}
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <small className="text-danger mb-4">
                {errors?.email && errors.email.message}
              </small>
            </div>
            <div className="mt-4">
              {/* <span className="link-item-signin">Password</span> */}

              <TextField
                className="mb-2"
                fullWidth
                label={"Password"}
                helperText=" "
                type="password"
                id="demo-helper-text-misaligned"
                value={user.password}
                name="password"
                {...register("password", registerOptions.password)}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <small className="text-danger">
                {errors?.password && errors.password.message}
              </small>
            </div>
            {/* <div> */}
            <FormGroup
              style={{
                position: "absolute",
                top: "60%",
                marginLeft: "-2px",
                marginTop: "21px",
              }}
            >
              {/* <FormControlLabel
                  className="mb-2"
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                    />
                  }
                  label="Remember me"
                /> */}
              {/* <span className="link-item">Forgot Password</span> */}
            </FormGroup>
            {/* </div> */}
            <FormGroup style={{ float: "left" }}>
              <FormControlLabel
                className="mt-4"
                control={
                  <Checkbox
                    className="p-1"
                    style={{ marginLeft: "3px" }}
                    defaultChecked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                  />
                }
                label="Yes, I want to save money by receiving personalized emails with awesome deals."
              />
              {/* <span className="link-item">Forgot Password</span> */}
              <p className="mt-2">
                By clicking below, I agree to the <span>Terms of Use</span> and
                have read the <span>Privacy Statement.</span>
              </p>
            </FormGroup>
            <button
              type="submit"
              className="header-btn"
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "#1aba10",
              }}
            >
              {" "}
              Sign Up
            </button>{" "}
            {/* <div
              className="sign-in-modal-btn"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <button className="header-btn" style={{ width: "410px" }}>
                <FacebookIcon style={{ color: "#3b5998" }} /> Facebook
              </button>{" "}
              <button
                className="header-btn"
                style={{ width: "410px", marginLeft: "14px" }}
              >
                <GoogleIcon style={{ fontSize: "18px", marginRight: "4px" }} />
                Google
              </button>{" "}
            </div> */}
          </CardContent>
        </Card>
      </form>
    </>
  );
}

export default SignUp;
