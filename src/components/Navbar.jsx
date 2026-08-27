import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>WariVedh</h2>

      <div>
        <Link to="/">Home</Link>
        {" | "}
      
        <Link to="/apply-organizer">
          Apply as Organizer
        </Link>
        {" | "}
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;