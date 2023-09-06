import "./style.css";
import basket from "../../assets/free-add-to-basket-icon-3042-thumb.png";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";
const AppBar = ({ baskets, setBaskets }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="appbar">
      <h2>Products</h2>
      <div className="basket" onClick={() => setOpen(true)}>
        <img src={basket} alt="" />
        <span>{baskets.length}</span>
      </div>
      <Drawer
        open={open}
        setOpen={setOpen}
        baskets={baskets}
        setBaskets={setBaskets}
      />
    </div>
  );
};

export default AppBar;
