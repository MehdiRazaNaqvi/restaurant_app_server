import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { updatePassword } from "../../store/actions/authActions";

const Profile = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const state = useSelector((state) => state);
  console.log("state", state);

  // const initinalValues = {
  //   email: state.auth.email,
  //   currentPassword: "",
  //   newPassword: "",
  // };

  const [user, setUser] = useState({
    email: state.auth.email,
    currentPassword: "",
    newPassword: "",
  });

  // const [formValues, setFormValues] = useState(initinalValues);

  const handleUpdatePassword = (data) => {
    console.log("click", data);
    console.log("formvalues", user);
    dispatch(updatePassword(user));
  };

  const registerOptions = {
    currentPassword: { required: "Current Password is required",
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters",
    }, },
    newPassword: { required: "New Password is required",
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters",
    }, },
  };

  return (
    <>
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="brand-name">Mooli</span>
        </Link>
      </div>
      <hr></hr>
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
          <div className="">
            <h2>My Profile</h2>
            <div className="px-2 flex-fill">
              {/* <span className="link-item-signin">First Name</span> */}
              <CardMedia
                component="img"
                height="140"
                image="https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg"
                alt="green iguana"
              />
              <div className="d-flex">
                <Typography gutterBottom variant="p" component="div">
                  First Name:
                </Typography>
                <Typography
                  variant="p"
                  color="text.secondary"
                  style={{
                    marginTop: "-1px",
                    marginLeft: "10px",
                  }}
                >
                  {state.auth.first_name}
                </Typography>
              </div>

              <div className="d-flex">
                <Typography gutterBottom variant="p" component="div">
                  Last Name:
                </Typography>
                <Typography
                  variant="p"
                  color="text.secondary"
                  style={{
                    marginTop: "-1px",
                    marginLeft: "10px",
                  }}
                >
                  {state.auth.last_name}
                </Typography>
              </div>

              <div className="d-flex">
                <Typography gutterBottom variant="p" component="div">
                  Email:
                </Typography>
                <Typography
                  variant="p"
                  color="text.secondary"
                  style={{
                    marginTop: "-1px",
                    marginLeft: "10px",
                  }}
                >
                  {state.auth.email}
                </Typography>
              </div>

              <div className="d-flex">
                <Typography gutterBottom variant="p" component="div">
                  Phone:
                </Typography>
                <Typography
                  variant="p"
                  color="text.secondary"
                  style={{
                    marginTop: "-1px",
                    marginLeft: "10px",
                  }}
                >
                  {state.auth.phone}
                </Typography>
              </div>
              <form onSubmit={handleSubmit(handleUpdatePassword)}>
                <FormGroup className="mb-4">
                  <Label for="currentPassword">Current Password</Label>
                  <TextField
                    type="password"
                    fullWidth
                    style={{border:'1px solid gray'}}
                    id="currentPassword"
                    placeholder={"Enter your current password"}
                    value={user.currentPassword}
                    name="currentPassword"
                    {...register(
                      "currentPassword",
                      registerOptions.currentPassword
                    )}
                    onChange={(e) =>
                      setUser({ ...user, currentPassword: e.target.value })
                    }
                  />
                  <small className="text-danger mb-4">
                    {errors?.currentPassword && errors.currentPassword.message}
                  </small>
                </FormGroup>

                <br></br>
                <div>
                  <FormGroup className="mb-5">
                    <Label for="newPassword">New Password</Label>
                    <TextField
                      type="password"
                      style={{border:'1px solid gray',outline:'none'}}
                      fullWidth
                      id="newPassword"
                      placeholder={"Enter your new password"}
                      value={user.newPassword}
                      name="newPassword"
                      {...register("newPassword", registerOptions.newPassword)}
                      onChange={(e) =>
                        setUser({ ...user, newPassword: e.target.value })
                      }
                    />
                    <small className="text-danger mb-4">
                      {errors?.newPassword && errors.newPassword.message}
                    </small>
                  </FormGroup>
                </div>

                <Button type={"submit"} color={"primary"}>
                  Update Password
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Profile;
