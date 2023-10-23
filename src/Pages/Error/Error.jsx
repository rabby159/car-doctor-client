import Navbar from '../../SharedComp/Navbar/Navbar';
import ErrorPage from '../../assets/images/page404/page404.jpg'

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img src={ErrorPage} alt="" />
        </div>
    );
};

export default Error;