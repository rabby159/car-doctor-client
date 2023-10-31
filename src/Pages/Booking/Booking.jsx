import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../SharedComp/Navbar/Navbar";
import Footer from "../../SharedComp/Footer/Footer";
import BookingInfo from "../BookingInfo/BookingInfo";
import Swal from "sweetalert2";

const Booking = () => {
  const { users } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${users?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = id =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            const remaining = bookings.filter(booking => booking._id !== id)
            setBookings(remaining);
          }
          console.log(data)
        })
      }
    })
  }

  const handleConfirmUpdate = id => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount > 0){
        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id === id);
        updated.status = 'confirm'
        const newUpdate = [updated, ...remaining];
        setBookings(newUpdate);
      }
    })
  }

  return (
    <div>
      <Navbar></Navbar>
      <div>
        {bookings.map((booking) => (
              <BookingInfo key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirmUpdate={handleConfirmUpdate}></BookingInfo>
            ))}
      </div>
      <Footer></Footer>
    </div>
  );
};


export default Booking;
