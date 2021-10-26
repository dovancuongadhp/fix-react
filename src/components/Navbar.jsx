import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";



function Navbar() {
    return ( 
        <div>
            <NavLink to ="/products"><Button>Danh sách</Button></NavLink>
            <NavLink to ="/product/add"><Button>Thêm sản phẩm</Button></NavLink>
        </div>
     );
}

export default Navbar;