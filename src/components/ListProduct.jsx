import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { remove } from '../api/call-api';
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
function ListProduct(props) {
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const { products } = props;
    const handleRemove = async (id) => {
        await remove(id)
        props.handleDelete(id);
        setOpen(true)

    }
    return (
        <div className="list__products">
             <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Xoá thành công
                </Alert>
            </Snackbar>
            {products && products.map(product => (
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={product.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.titlte}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.author}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <NavLink to={`/product/${product.id}`}><Button size="small" variant="contained">Chi tiết</Button></NavLink>
                        <Button size="small" variant="contained" color="error" onClick={()=> handleRemove(product.id)}>Xoá</Button>
                        <NavLink to={`/product/edit/${product.id}`}><Button size="small" variant="contained">Sửa</Button></NavLink>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

export default ListProduct;