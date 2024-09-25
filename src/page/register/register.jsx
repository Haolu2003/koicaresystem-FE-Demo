import "./register.scss";

import koi from "../../img/koi.jpg";
import logo from "../../img/lo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button} from "antd";
import axios from "axios";
import { useState } from 'react';
function Register() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };


  // const handleSubmit = async (values) => {
  //   const { email, password } = values;

  //   try {
  //     const response = await axios.get(
  //       "https://66e538655cc7f9b6273cae07.mockapi.io/register"
  //     );
  //     const existingUser = response.data.find((user) => user.email == email);

  //     if (existingUser) {
  //       message.error("Email has been signed!");
  //     } else {
  //       await axios.post(
  //         "https://66e538655cc7f9b6273cae07.mockapi.io/register",
  //         {
  //           email,
  //           password,
  //         }
  //       );

  //       message.success("Register successfully!");
  //       navigate("/login");
  //     }
  //   } catch (error) {
  //     console.error("An error has occurred", error);
  //     message.error("Error during register");
  //   }
  // };
  
  // New
  const handleSubmit = async (values) => {
    console.log(values);
    const {email, password} = values;
    
    try {
      const response = await axios.post ('https://localhost:5001/api/Register/register',values)
      if (response.data.success) {
        navigate("/login")
      }
     } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message); // Gọi thông báo lỗi từ API
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } 
  }


  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Password do not match !"));
    },
  });

  return (
    <div className="container__register">
      <div className="row register__page">
        <div className="col-md-6 left1">
          <img className="koi" src={koi} alt="Koi" width="59%" />
        </div>
        <div className="col-md-6 right1">
          <div className="register">
            <img className="register__logo" src={logo} alt="" width="30%" />
            <p>Royal Koi</p>
            <h2>Register your account</h2>
            {errorMessage && <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>}
            <Form className="register__form" onFinish={handleSubmit}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "The input is not valid email !" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item
                name="confỉrm_password"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password" },
                  validateConfirmPassword,
                ]}
              >
                <Input.Password placeholder="Confirm password" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="secondary"
                  htmlType="submit"
                  className="register__but1"
                  block
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            <div className="member">
              <h3>Have an account?</h3>
              <Link onClick={handleLogin}>Login Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
