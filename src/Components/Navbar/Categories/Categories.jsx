import { Link } from "react-router-dom"
import React from "react"

const Categories = React.memo(() => {
  return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/category/1"}>Modular</Link></li>
                <li><Link className="dropdown-item" to={"/category/2"}>Synths</Link></li>
                <li><Link className="dropdown-item" to={"/category/3"}>Drum Machines</Link></li>
                <li><Link className="dropdown-item" to={"/category/4"}>Controllers</Link></li>
                <li><Link className="dropdown-item" to={"/"}>Pedals + FX</Link></li>
                <li><Link className="dropdown-item" to={"/"}>Pro Audio</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to={"/"}>Used deparment</Link></li>
            </ul>
        </li>
    )
})

export default Categories;