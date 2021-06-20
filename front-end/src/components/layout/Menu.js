import React, { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const BurgerMenu = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleStateChange = (state) => {
    setOpenMenu(state.isOpen);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };
  return (
    <Menu
      {...props}
      isOpen={openMenu}
      onStateChange={(state) => handleStateChange(state)}
    >
      <Link className="menu-item" to="/" onClick={() => closeMenu()}>
        Trang chủ
      </Link>
      <Link className="menu-item" to="/games" onClick={() => closeMenu()}>
        Trò chơi
      </Link>
      <Link className="menu-item" to="/submit" onClick={() => closeMenu()}>
        Đóng góp
      </Link>
      <Link className="menu-item" to="/user" onClick={() => closeMenu()}>
        Tài khoản
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
