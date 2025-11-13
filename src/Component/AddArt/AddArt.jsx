import React  from "react";
import { AuthContext } from "../../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useContext } from "react";

const AddArt = () => {
  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handelAddArt = (e) => {
    e.preventDefault();
    const form = e.target;
    const time = new Date().toISOString();
    const id = Date.now().toString().slice(-9) ;

    const title = form.title.value;
    const imageURL = form.imageURL.value;
    const name = form.name.value;
    const email = form.email.value;
    const category = form.category.value;
    const medium = form.medium.value;
    const description = form.description.value;

    try {
      const newArt = {
        _id : id,
        title: title,
        image: imageURL,
        artist_name: name,
        artist_email: email,
        category: category,
        medium: medium,
        description: description,
        date_added: time,
      };

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Artwork Add Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      fetch("http://localhost:3000/allart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newArt),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("after save data :", data);
        });
      form.reset();
      Navigate("/artwork");
    } catch (error) {
      console.error(error.message);
      Swal.fire({
        icon: "error",
        title: "Art Add Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="flex justify-center py-10">
      <div>
        <form
          onSubmit={handelAddArt}
          className="fieldset bg-gray-700 border-base-300 rounded-box min-w-[300px] border p-4"
        >
          <legend className="fieldset-legend text-accent text-center text-2xl">
            Add your Artwork Here
          </legend>

          <label className="label">Title</label>
          <input
            required
            name="title"
            type="text"
            className="input"
            placeholder="Art Title"
          />

          <label className="label">Art Image URL</label>
          <input
            required
            name="imageURL"
            type="text"
            className="input"
            placeholder="https://___________"
          />

          <label className="label">Artist Name</label>
          <input
            required
            type="text"
            name="name"
            readOnly
            className="input"
            value={user?.displayName}
          />

          <label className="label">Artist Email</label>
          <input
            required
            name="email"
            type="text"
            className="input"
            readOnly
            value={user?.email}
          />

          <label className="label">Category</label>
          <input
            required
            name="category"
            type="text"
            className="input"
            placeholder="category"
          />

          <label className="label">Medium</label>
          <input
            required
            name="medium"
            type="text"
            className="input"
            placeholder="Medium"
          />

          <label required className="label">
            Description
          </label>
          <textarea
            rows="5"
            cols="40"
            name="description"
            placeholder="description"
            className="border-2 border-gray-300 bg-gray-800 w-80 text-[18px]"
          />

          <button type="submit" className="btn btn-outline btn-accent">
            Add Art
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArt;
