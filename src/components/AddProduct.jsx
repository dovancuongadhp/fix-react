
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { add } from "../api/call-api";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function AddProduct(props) {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = async (data) => {
        await add(data).then(res => props.onAdd(res.data))
        reset();
        setOpen(true)
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Đã thêm sản phẩm mới
                </Alert>
            </Snackbar>
           <div className="add__product">
               <div className="add__product__inner">
               <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="titlte"
                    {...register("titlte", {
                        required: true,
                        
                    })}
                    // sx={{ marginBottom: "1rem" }}
                    />
                 {errors?.titlte?.type === "required" && <p>Khong duoc de trong</p>}
                {/* <br /> */}
                <TextField
                    label="img"
                    {...register("img", {
                        required: true,
                        
                    })}
                    // sx={{ marginBottom: "1rem" }}
                    />
                    {errors?.img?.type === "required" && <p>Khong duoc de trong</p>}
                {/* <br /> */}
                <TextField
                    label="price"
                    {...register("price", {
                        required: true,
                        maxLength: 20,
                        
                      })}
                    // sx={{ marginBottom: "1rem" }}
                />
                {errors?.price?.type === "required" && <p>Khong duoc de trong</p>}
                {/* <br /> */}

                <TextField
                    label="desc"
                    {...register("desc", {
                        required: true,
                        maxLength: 20,
                        
                      })}
                    // sx={{ marginBottom: "1rem" }}
                />
                {errors?.desc?.type === "required" && <p>Khong duoc de trong</p>}
                {/* <br /> */}
                <TextField
                    label="author"
                    {...register("author", {
                        required: true,
                        maxLength: 20,
                        
                      })}
                    // sx={{ marginBottom: "1rem" }}
                />
                {errors?.author?.type === "required" && <p>Khong duoc de trong</p>}
                {/* <br /> */}
                <Button variant="contained" type="submit">Thêm sản phẩm</Button>
            </form>
               </div>
           </div>

        </div>
    );
}

export default AddProduct;