import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../slices/productsSlice";

function NewProducts({ products, fetchProducts }) {
  useEffect(() => {
    // Dispatch the action to fetch products when the component mounts
    fetchProducts("http://localhost:4000/products");
  }, [fetchProducts]);

  return (
    <div className="container mt-5">
      <div className="d-flex flex-wrap justify-content-start">
        {products.map((prodObj) => (
          <div
            className="card shadow mx-auto mb-3"
            style={{ width: "20rem" }}
            key={prodObj.id}
          >
            <div id="img11-container">
              
              <img
                id="img11"
                src={prodObj.productImage}
                className="card-img-top"
                alt="Product"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{prodObj.productName}</h5>
              <p className="card-text">₹ {prodObj.productPrice}/-</p>
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, dolore.
              </p>
              <a href="#" className="btn btn-primary">
                Add To cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products, // Accessing products from Redux store
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (url) => dispatch(fetchProducts(url)), // Dispatching fetchProducts action
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts);
