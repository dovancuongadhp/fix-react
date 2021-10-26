import { useParams } from "react-router";
import { get } from '../api/call-api'
import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
function Edit(props) {
    
    const [product, setproduct] = useState({});
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset,setValue } = useForm();
    useEffect( () => {
     if(id !== undefined){
         get(id)
        .then( res =>  setproduct(res.data))
     }
    }, []);
    const onSubmit = async (data) => {
        // console.log(data)
        // reset();
    };
    return (
        <div>
            <div className="add__product__inner">
            <form onSubmit={handleSubmit(onSubmit)} >
                    <TextField
                        required
                        InputLabelProps={{ shrink: true }}
                        label="titlte"
                        {...register("titlte")}
                        defaultValue={product.titlte}
                        // value={product.titlte}
                        />
                        {console.log(product)}
                    <TextField
                        required
                        InputLabelProps={{ shrink: true }}
                        label="img"
                        {...register("img")}
                    />

                    <TextField
                        InputLabelProps={{ shrink: true }}
                        label="price"
                        {...register("price")}
                    />

                    <TextField
                        InputLabelProps={{ shrink: true }}
                        label="desc"
                        {...register("desc",)}
                    />
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        label="author"
                        {...register("author")}
                    />
                    <Button variant="contained" type="submit">Sửa</Button>
                </form>
            </div>
        </div>
    );
}

export default Edit;