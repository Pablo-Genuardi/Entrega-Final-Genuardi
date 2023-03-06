import { Link } from "react-router-dom";

const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>Contact</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/support"}>Support</Link>
            </li>
            
        </>
    );
}

export default Sections;
