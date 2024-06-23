import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="section"  smooth={true} duration={500} className="title"> &lt; Noman /&gt;</Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          {" "}
          <Link to="about" smooth={true} duration={500} className="nav-link">
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link to="skills" smooth={true} duration={500} className="nav-link">
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

