import React from "react";
import { stack as Slider } from "react-burger-menu";

const Menu = (props) => {
  return (
    <Slider {...props}>
      <a className="menu-item" href="/">
        Trang chủ
      </a>

      <a className="menu-item" href="/burgers">
        Trò chơi
      </a>

      <a className="menu-item" href="/pizzas">
        Đóng góp
      </a>

      <a className="menu-item" href="/desserts">
        Tài khoản
      </a>
    </Slider>
  );
};

export default Menu;
