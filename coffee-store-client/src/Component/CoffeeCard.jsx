import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffes, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photoUrl } =
    coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-tzhasan.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
            const remainingCoffees = coffes.filter((cof) => cof._id !== _id);
            setCoffees(remainingCoffees);
          });
      }
    });
  };
  return (
    <div className="card card-side bg-gray-300 shadow-xl">
      <figure>
        <img src={photoUrl} alt="coffee" />
      </figure>
      <div className="flex items-center justify-between w-full mr-4">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Details: {details}</p>
        </div>
        <div className="card-actions ">
          <div className="btn-group btn-group-vertical space-y-2">
            <button className="btn">View</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
