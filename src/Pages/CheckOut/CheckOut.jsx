import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedComp/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Footer from "../../SharedComp/Footer/Footer";

const CheckOut = () => {
  const services = useLoaderData();
  const { users } = useContext(AuthContext);

  const { title, _id, img } = services;

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const form = event.target;

    const fName = form.first.value;
    const lName = form.last.value;
    const phone = form.phone.value;
    const email = users?.email;
    const msg = form.msg.value;
    const order = {
      fName,
      lName,
      img,
      phone,
      email,
      service_name: title,
      service_id: _id,
      msg,
    };
    console.log(order);

    fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId ){
            Swal.fire(
                'Welcome!',
                  'Successfully complete booking!',
                  'success'
              );
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-center text-4xl font-bold">Book for: {title}</h2>
      <form className="mt-10" onSubmit={handleSubmitForm}>
        {/* 1st row */}
        <div className="md:flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                required
                name="first"
                placeholder="first name"
                className="input input-bordered input-error w-full "
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-10">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                required
                name="last"
                placeholder="last name"
                className="input input-bordered input-error w-full "
              />
            </label>
          </div>
        </div>

        {/* 2nd row */}
        <div className="md:flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Your Phone</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                required
                name="phone"
                placeholder="+880"
                className="input input-bordered input-error w-full "
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-10">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                defaultValue={users?.email}
                className="input input-bordered input-error w-full "
              />
            </label>
          </div>
        </div>

        <textarea
          className="textarea textarea-error w-full"
          name="msg"
          required
          placeholder="Your message.."
        ></textarea>

        <div className="mt-5">
          <input
            type="submit"
            value="Add Product"
            className="btn btn-error w-full text-white"
          />
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default CheckOut;
