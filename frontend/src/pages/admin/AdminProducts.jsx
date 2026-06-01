import { useEffect, useState } from "react";
import "./css/adminProducts.css";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    title: "",
    price: "",
    info: "",
    image: "",
    category: "books",
    stock: "",
  });

  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/products");
    const data = await res.json();
    setProducts(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();

    const res = await fetch("https://mycart-mern-ecommerce.onrender.com/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      alert(data.message || "Product add failed");
      return;
    }

    setForm({
      title: "",
      price: "",
      info: "",
      image: "",
      category: "books",
      stock: "",
    });

    fetchProducts();
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    await fetch(`https://mycart-mern-ecommerce.onrender.com/api/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchProducts();
  };

  return (
    <section className="admin-page">
      <div className="admin-head">
        <div>
          <h1>Products</h1>
          <p>Manage product inventory, pricing and stock.</p>
        </div>
      </div>

      <form className="product-form" onSubmit={addProduct}>
        <input
          name="title"
          placeholder="Product Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          name="info"
          placeholder="Product Info"
          value={form.info}
          onChange={handleChange}
          required
        />

        <input
          name="image"
          placeholder="Image URL e.g. /images/iPhone 13 Pro.png"
          value={form.image}
          onChange={handleChange}
          required
        />

        <select name="category" value={form.category} onChange={handleChange}>
          <option value="books">Books</option>
          <option value="laptop">Laptop</option>
          <option value="mobile">Mobile</option>
          <option value="headphone">Headphone</option>
          <option value="furniture">Furniture</option>
          <option value="handbag">Handbag</option>
          <option value="deals">Deals</option>
        </select>

        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Product</button>
      </form>

      <div className="products-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    className="admin-product-img"
                    src={item.image}
                    alt={item.title}
                  />
                </td>

                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>${item.price}</td>
                <td>{item.stock}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteProduct(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan="6" className="empty-table">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminProducts;