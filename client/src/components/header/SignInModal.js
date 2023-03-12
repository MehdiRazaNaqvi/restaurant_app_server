import React, { useState, useEffect } from "react";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useFormControl } from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { signIn } from "../../store/actions/authActions";
import { useForm } from "react-hook-form";
import {
  forgetPasswordEmail,

} from "../../store/actions/authActions";
import "./style.css";

const SignInModal = ({ showSignInModal, divRef }) => {
  console.log(showSignInModal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const initialState = {
    email: "",
    code: "",
  };
  const [open, setOpen] = useState(showSignInModal);
  const [showAuth, setshowAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showForgetPasswordModal, setShowForgetPasswordModal] = useState(false);
  const [formValue, setFormValue] = useState(initialState);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  console.log("show auth", showAuth);
  const auth = useSelector((state) => state.auth);
  console.log("auth", auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setAnchorEl(divRef.current);
  }, [divRef]);

  const handleError = (errors) => {};

  const registerOptions = {
    email: { required: "Email is required" },

    password: {
      required: "Password is required",
    },
  };

  const handleForgetPassword = () => {
    console.log("profile data========", formValue.email);
    const data = formValue.email;
   
    setShowForgetPasswordModal(true)
    // if(showForgetPasswordModal){
    //   sendForgetPasswordEmail(data)
    // }

  };

  const sendForgetPasswordEmail=(data)=>{
    dispatch(forgetPasswordEmail(data));
  }
  

  const handleSubmitData = (e) => {
    console.log("data", creds.email, creds.password);
    // e.preventDefault();
    dispatch(signIn(creds.email, creds.password));
 
    setCreds({ email: "", password: "" });
  };

  if (auth.token) return <Navigate to="/" />;

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Popper
      id={"showSignInModal"}
      open={showSignInModal}
      onClose={handleClose}
      anchorEl={anchorEl}
      placement={"bottom-start"}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Box
            sx={{
              border: "1px solid #d8d8d8",
              borderRadius: "4px",
              width: "370px",
              display: "flex",
              flexDirection: "column",
              marginTop: 7,
              marginLeft: 100,
              p: 3,
              bgcolor: "background.paper",
            }}
          >
            {showForgetPasswordModal ? (
              <>
                <h4 style={{ float: "left",marginLeft:'11px',fontSize:'17px' }}>Forget Password</h4>
                <Form
                  style={{ width: "94%", margin: "15px auto" }}
                  onSubmit={handleSubmit(handleForgetPassword)}
                >
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                       size="small"
                    required
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Please Enter Your Email"
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          email: e.target.value,
                        })
                      }
                    />
                    <small className="text-danger mb-4">
                  {errors?.email && errors.email.message}
                </small>
                  </FormGroup>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      //   border:'1px solid red'
                    }}
                  >
                    <Button
                      type="submit"
                      className="header-btn"
                      style={{
                        width: "60%",
                        height: "45px",
                        backgroundColor: "#1aba10",
                        // paddingLeft: "30px",
                        marginBottom:"10px",
                        marginRight:'10px',
                        marginTop:'10px'
                      }}
                      // onClick={() => setforgetPassword(true)}
                      // onSubmit={()=>handleSendEmail()}
                    >
                      Send Email
                    </Button>
                    <Button
                      className="header-btn "
                      style={{
                        width: "45%",
                        height: "44px",
                        backgroundColor: "#8898aa",
                        marginTop:'10px'
                        // color: 'black'
                      }}
                      color="primary"
                      onClick={() => {
                        setAnchorEl(null)
                      setFormValue('')
                      }}
                    >
                      Cancel
                    </Button>
                    <span className="top-nav-link">
                    {/* <Link
          className="top-nav-link" to="/reset-password">
            Reset Password
          </Link>  */}
                    </span>
                  
                  </div>
                </Form>
              </>
            ) : (
              <form
                autoComplete="off"
                onSubmit={handleSubmit(handleSubmitData, handleError)}
              >
                <div>
                  {/* <span className="link-item-signin">Email</span> */}
                  <TextField
                  size="small"
                  style={{ width: '90%' }}
                    label="Email"
                    fullWidth
                    sx={{
                      color: "red",
                    }}
                    // helperText="Email"
                    id="demo-helper-text-misaligned"
                    value={creds.email}
                    name="email"
                    {...register("email", { required: "Email is required" })}
                    onChange={(e) =>
                      setCreds({ ...creds, email: e.target.value })
                    }
                  />
                  <small className="text-danger">
                    {errors?.email && errors.email.message}
                  </small>
                </div>
                <div className="mt-4"
               >
                  {/* <span className="link-item-signin">Password</span> */}

                  <TextField
                  size="small"
                  style={{ width: '90%' }}
                    fullWidth
                    label="Password"
                    type="password"
                    helperText=" "
                    id="demo-helper-text-misaligned"
                    value={creds.password}
                    name="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    onChange={(e) =>
                      setCreds({ ...creds, password: e.target.value })
                    }
                  />
                  <small className="text-danger">
                    {errors?.password && errors.password.message}
                  </small>
                </div>
                <FormGroup className="mt-4">
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                      />
                    }
                    label="Remember me"
                  />
                  <span>
                    <button
                      className="forget-pwd-btn"
                      onClick={handleForgetPassword}
                      ref={divRef}
                    >
                      {" "}
                      Forget Password
                    </button>{" "}

                    
                    {/* {showAuth && <signIn showAuth={showAuth}></signIn>} */}
                    {/* {showForgetPasswordModal && <ForgetPasswordModal showForgetPasswordModal={showForgetPasswordModal} divRef={divRef}></ForgetPasswordModal>}*/}
                  </span>
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
                  Sign In
                </button>{" "}
                {/* <div className="sign-in-modal-btn">
                <button className="header-btn" style={{ width: "174px" }}>
                  <FacebookIcon style={{ color: "#3b5998" }} /> Facebook
                </button>{" "}
                <button
                  className="header-btn"
                  style={{ width: "174px", marginLeft: "14px" }}
                >
                  <GoogleIcon
                    style={{ fontSize: "18px", marginRight: "4px" }}
                  />
                  Google
                </button>{" "}
              </div> */}
              </form>
            )}
          </Box>
        </Fade>
      )}
    </Popper>
  );
};

export default SignInModal;
