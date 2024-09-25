import "./header.scss";
import { Link } from "react-router-dom";
import koi from "../../img/cakoi.jpg";
import { useState } from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// import bg from '../../img/background.jpg';

function Header() {
  const [visible, setVisible] = useState(false);

  // Hàm để mở và đóng sidebar
  const handleMenu = () => {
    setVisible(true);
  };

  // Hàm để đóng sidebar khi nhấn ra ngoài hoặc nhấn nút "×"
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img className="" src={koi} alt="Koi" width={80} />
          <h2>Royal Koi</h2>
        </div>

        <div className="header__nav">
          <Link to="" className="nav__news">
            Home
          </Link>
          <Link to="/login" className="nav__profile">
            Profile
          </Link>
          <Link to="" className="nav__product">
            Product
          </Link>
          <Link to="" className="nav__news">
            Blog and News
          </Link>

          <span className="nav__menu">
            <Button onClick={handleMenu}>
              <MenuOutlined className="" />
            </Button>
          </span>
        </div>
      </div>

      {/* Overlay để khi nhấn ra ngoài sidebar sẽ đóng */}
      {visible && <div className="overlay" onClick={handleClose}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${visible ? "active" : ""}`}>
        <a href="#" className="closebtn" onClick={handleClose}>
          ×
        </a>
        <a href="/add">Add New Koi</a>
        <a href="/update">My Koi Fish</a>
        <a href="#">My Schedule Tasks</a>
        <a href="/environment">Environment Monitor</a>
        <a href="#">Statistics Table</a>
        <a href="#">Recommendations</a>
        <a href="#">Advice</a>
        <a href="#">Blogs and News</a>
        <a href="#">Profile</a>
        <a href="#">Logout</a>
      </div>
    </>
  );
}

export default Header;
