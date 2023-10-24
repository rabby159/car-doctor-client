import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
//   console.log(services)

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-16">
      <div className="text-center space-y-2">
        <p className="text-red-500 text-xl font-medium">Service</p>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {
            services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
        }
      </div>
    </div>
  );
};

export default Services;
