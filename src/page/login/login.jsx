import "./login.scss";

import koi from "../../img/koi.jpg";
import logo from "../../img/lo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
function Login() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/register");
  };

  return (
    <div className="container__login">
      <div className="row login__page">
        <div className="col-md-6 left">
          <img className="koi" src={koi} alt="Koi" width="59%" />
        </div>
        <div className="col-md-6 right">
          <div className="login">
            <img className="login__logo" src={logo} alt="" width="30%" />
            <p>Royal Koi</p>
            <h2>Login into your account</h2>
            <Form className="login__form">
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Please enter your email" }]}
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
              <Form.Item>
                <Button
                  type="secondary"
                  htmlType="submit"
                  className="login__but1"
                  block
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            <Link className="forgot">Forgot Password?</Link>
            <div className="signup">
              <h3>New member?</h3>
              <Link onClick={handleSignUpClick}>Sign Up Now!</Link>
            </div>
            <div className="divider"></div>
            <button className="login__google">
              <img
                className="google"
                src="https://tse2.mm.bing.net/th?id=OIP.DdVPhTob_7Dpl5-BRiaK8wHaHa&pid=Api&P=0&h=220"
                width={20}
                alt="Google Logo"
              />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
