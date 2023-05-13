// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData()
  const { _id, name, quantity, supplier, taste, category, details, photoUrl } = coffee
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;
    const UpdatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };
    console.log(UpdatedCoffee);
    // send to server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "Coffee Added",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
  }
  return (
    <div className="p-10 bg-gray-400 h-[100vh]">
      <h2 className="text-2xl font-bold mb-4">Update Coffee: { name}</h2>
      <Link to={"/"} className="btn m-2">
        {" "}
        <button>GO home</button>
      </Link>
      <form onSubmit={handleUpdate}>
        {/* form row */}
        <div className="md:flex gap-2 md:mb-6 mb-2 w-full">
          <div className="form-control md:w-1/2 mb-4">
            <label className="input-group input-group-vertical">
              <span>Coffee Name</span>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-4">
            <label className="input-group input-group-vertical">
              <span>Available Quantity</span>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="md:flex gap-2 md:mb-6 mb-2 w-full">
          <div className="form-control md:w-1/2 mb-4">
            <label className="input-group input-group-vertical">
              <span>Supplier Name</span>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier Name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-4">
            <label className="input-group input-group-vertical">
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="md:flex gap-2 md:mb-6 mb-2 w-full">
          <div className="form-control md:w-1/2 mb-4">
            <label className="input-group input-group-vertical">
              <span>Category</span>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-4">
            <label className="input-group input-group-vertical">
              <span>Details</span>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className=" w-full">
          <div className="form-control w-full mb-4">
            <label className="input-group input-group-vertical">
              <span>Photo URL</span>
              <input
                type="text"
                name="photoUrl"
                defaultValue={photoUrl}
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* submit */}
        <input type="submit" value={"Update Coffee details"} className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateCoffee;