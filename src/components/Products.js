import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
function Products() {
  let { register, handleSubmit } = useForm();
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get("http://localhost:4000/products");
    setProducts(res.data);
  };

  const onFormSubmit = async (prodObj) => {
    let res = await axios.post("http://localhost:4000/products", prodObj);
    let message = res.data;
    alert("Product Created");
  };
  return (
    <div className="conainer text-center mt-5">
      {/* inpurt form */}
      <h1 className="text-info">Create Product</h1>
      <form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          {...register("productName")}
          className="form-control mb-3 "
          placeholder="Product Name"
        />
        <input
          type="number"
          {...register("productPrice")}
          className="form-control mb-3"
          placeholder="Product Price"
        />
        <input
          type="text"
          {...register("productImage")}
          className="form-control mb-3"
          placeholder="Product Image url"
        />

        <button type="submit" className="btn btn-warning">
          Add Product
        </button>
      </form>

      {/* display */}
      {/* <div className="container mt-5">
        <div className="d-flex flex-wrap justify-content-spacearound">
       { products.map((prodObj, index) => (
            <div
              className="card mx-auto mb-3"
              style={{ width: "18rem" }}
              key={prodObj.id}
            >
              <img
                src={prodObj.productImage}
                
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{prodObj.productName}</h5>
                <p className="card-text">{prodObj.productPrice}</p>
                <a href="#" className="btn btn-primary">
                  Add To cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Products;
