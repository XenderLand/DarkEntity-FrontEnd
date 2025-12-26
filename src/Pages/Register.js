import React, { useState } from "react";
import axios from "axios";

// const useLocalStorage = (key, initialValue) => {
//     const [value, setValue] = useState(() => {
//       const storedValue = localStorage.getItem(key);
//       return storedValue ? JSON.parse(storedValue) : initialValue;
//     });

//     useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value]);

//     return [value, setValue];
//   };

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "https://darkentity.onrender.com/register",
        {
          name,
          email,
          password,
        }
      );
      localStorage.setItem("user", JSON.stringify(result.data));

      console.log(result.data);
      alert("Registration successful");
      window.location.href = "/";
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={collectData}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
      <div className="register">
        <h1>Add Product </h1>
        <form className="row g-3" style={{ marginBottom: "5rem" }}>
          <div className="col-md-6">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              className="form-control"
              id="productName"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Type to search..."></input>
            <datalist id="datalistOptions">
              <option value="Cosmetics" />
              <option value="Foods" />
              <option value="Drinks" />
              <option value="Health" />
              <option value="Electronics" />
              <option value="Home Appliance" />
              <option value="Tools" />
              <option value="Cloths" />
            </datalist>
          </div>

          <div className="col-12">
            <label className="form-label">Product Description</label>
            <textarea
              className="form-control "
              id="productDescription"
              cols="30"
              rows="5">
              {" "}
            </textarea>
          </div>

          <div className="col-12">
            <label className="form-label">Product Image </label>
            <input
              type="file"
              className="form-control"
              id="productImage1"></input>
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" for="position">
              Display Position
            </label>
            <select className="form-control" id="position">
              <option selected>Choose...</option>
              <option value="Discount">Discount Slide</option>
              <option value="Best Sellers">Best Sellers</option>
              <option value="Latest">Latest Products</option>
              <option value="Products">All Products</option>
            </select>
          </div>
          <div className="col-12">
            <button className="btn btn-primary ">Add Product</button>
            <button className="btn btn-warning ">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
