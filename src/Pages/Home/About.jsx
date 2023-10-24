import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-16">
      <div className="hero-content flex-col lg:flex-row space-y-4">
        <div className="w-1/2 relative">
          <img src={person} className="rounded-lg shadow-2xl w-3/4" />
          <img src={parts} className="rounded-lg absolute right-5 top-1/2 border-8 border-white w-1/2" />
        </div>
        <div className="w-1/2">
            <p className="text-xl text-red-500 font-medium">About Us</p>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field!</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
          </p>
          <p className="py-4">
          The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <button className="btn btn-error text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
