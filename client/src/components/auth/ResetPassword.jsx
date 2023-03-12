import React, { useEffect, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CustomInput,
  FormGroup,
  Row,
  Col,
  Button,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Form from "react-validation/build/form";

function ResetPassword () {

  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.forgetPasswordEmail);
  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const [showPassword, setshowPassword] = useState(false);
  const [showNewPassword, setshowNewPassword] = useState(false);

  let resetPassInitialState = {
    email: email,
    code: "",
    password: "",
    confirmPassword: "",
  };
  const [resetPassFormvalue, setResetPassFormvalue] = useState(
    resetPassInitialState
  );

  const onSubmitResetPassword = (data) => {
    setResetPassFormvalue(data);
    // if (data.password !== data.confirmPassword) {
    //   return dispatch(setToast("error", "Password should be same"));
    // } else {
      let obj = {
        email: email,
        code: data.code,
        password: data.password,
      };
      console.log(obj);
      dispatch(
        // resetPassword(
          obj,
          // () => props.setactivePage("login")
          // handleClick("resetPasswordForm", "recoverForm", "login-form")
        )
      // );
    }
  // };




  return (
    <div id="resetPasswordForm">
      <div 
      // onClick={() => props.setactivePage("forgetpassword")}
      >
        <i className="fa fa-arrow-left mr-1"></i>Back
      </div>
      <div className="logo">
        <span className="db">
          {/* <img src="" alt="logo" /> */}
        </span>
        <h5 className="font-medium text-white mb-3">Reset New Password</h5>
        <span>Enter the code we sent you in email and set new password</span>
      </div>
      <Row className="mt-3">
        <Col xs="12">
          <Form onSubmit={handleSubmit(onSubmitResetPassword)}>
            <FormGroup>
              <label
                className="control-label"
                style={{ color: "white" }}
                htmlFor="email"
              >
                Verification Code
              </label>
              <div className="mb-2">
                <InputGroup className="mb-3"> 
                  {/* <InputGroupAddon addonType="prepend"> */}
                    <InputGroupText>
                      <i className="fa fa-code"></i>
                    </InputGroupText>
                  {/* </InputGroupAddon> */}
                   <input
                    placeholder="Enter Verification Password"
                    type="text"
                    name="code"
                    // ref={register({ required: true, min: 6 })}
                    className="form-control"
                  /> 
                </InputGroup>
              </div>
              {/* <span className="text-danger">
                {errors.code && "Invalid Code"}
              </span> */}
            </FormGroup>

            <FormGroup>
              <label
                className="control-label"
                style={{ color: "white" }}
                htmlFor="password"
              >
                Password
              </label>
              <div className="mb-2">
                <InputGroup className="mb-3">
                  {/* <InputGroupAddon addonType="prepend"> */}
                    <InputGroupText>
                      <i className={"fa fa-key"}></i>
                    </InputGroupText> 
                  {/* </InputGroupAddon> */}
                <input
                    placeholder="Enter New Password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    // ref={register({ required: true, min: 8 })}
                    className="form-control"
                  />
                  <InputGroupText style={{ backgroundColor: "white" }}>
                    <i
                      onClick={() => setshowPassword(!showPassword)}
                      className={
                        !showPassword ? "fa fa-eye" : "fa fa-eye-slash"
                      }
                    ></i>
                  </InputGroupText>
                </InputGroup>
              </div>
              {/* <span className="text-danger">
                {errors.password &&
                  "Password must be atleast 8 characters long"}
              </span> */}
            </FormGroup>
            <FormGroup>
              <label
                className="control-label"
                style={{ color: "white" }}
                htmlFor="confirm password"
              >
                Confirm Password
              </label>
              <div className="mb-2">
                <InputGroup className="mb-3"> 
                  {/* <InputGroupAddon addonType="prepend"> */}
                     <InputGroupText>
                      <i className={"fa fa-key"}></i>
                    </InputGroupText>
                  {/* </InputGroupAddon> */}
              <input
                    placeholder="Re-Enter Password"
                    type={showNewPassword ? "text" : "password"}
                    name="confirmPassword"
                    // ref={register({ required: true, min: 8 })}
                    className="form-control"
                  />
                  <InputGroupText style={{ backgroundColor: "white" }}>
                    <i
                      onClick={() => setshowNewPassword(!showNewPassword)}
                      className={
                        !showNewPassword ? "fa fa-eye" : "fa fa-eye-slash"
                      }
                    ></i>
                  </InputGroupText>
                </InputGroup> 
               </div>
              {/* <span className="text-danger">
                {errors.confirmPassword &&
                  "Password must be atleast 8 characters long"}
              </span> */}
            </FormGroup>
            <Row className="mt-3">
              <Col xs="12">
                <Button
                  color="danger"
                  size="lg"
                  type="submit"
                  block 
                   // style={styles.btnRed} 
              >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
            </Col>
            </Row>
      </div>
  )
}

export default ResetPassword