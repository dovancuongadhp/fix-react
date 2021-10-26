import { useParams } from "react-router";
import {get} from '../api/call-api'
import { useState,useEffect } from "react";
function Detail() {
    const [product, setproduct] = useState({});
    const id = useParams().id;
    useEffect(() => {
        get(id)
        .then(res => setproduct(res.data))
    }, []);
    return ( 
        <div>
            <h1>Ten san pham : {product.tilte}</h1>
            <img src={product.img} alt="photo" style={{width:"200px"}} />
            <h1>gia :{product.price}</h1>
            <h1>mo ta :{product.desc}</h1>
            <h1>nha san xuat :{product.author}</h1>
            
        </div>
     );
}

export default Detail;