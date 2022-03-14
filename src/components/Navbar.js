function Navbar() {
  return (
    <ul className="nav nav-tabs mb-0 h5 mt-2">
      {/* <span className="navbar-brand mb-0 h1">Navbar</span> */}
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          User Profile
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
