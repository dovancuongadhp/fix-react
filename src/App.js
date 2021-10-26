import Routes from "./Router";
import { useState,useEffect } from "react";
import { getAll } from "./api/call-api";
function App() {
  const [products, setproducts] = useState();
  useEffect(() => {
    getAll()
    .then(res => setproducts(res.data))
  }, []);
  const handleAdd = (data) => {
    setproducts([...products,data])
  }
  const handleDelete = (id) => {
    const newData = products.filter(product => product.id !== id)
    setproducts(newData);
  }
  return (
    <div className="App">
      {/* {console.log(products)} */}
     <Routes products = {products} onAdd={handleAdd} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
