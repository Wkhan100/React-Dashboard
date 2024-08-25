import { Link, useNavigate} from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    // alert('Button clicked!');
    localStorage.removeItem('userId');
    window.location.reload();
    navigate('/'); 
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="dashboard">Dashboard</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="weather">Weather</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="search">searchbox</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="user">User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="userform">user form</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="forma">FormA</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="parent">Parent</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="userlist">user Jserver</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="userinfo">user Info</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="count">Count</Link>
              </li>
          
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
              <button className="btn btn-outline-primary" type="button" onClick={handleClick} >Logout</button>

            </form>
          </div>
        </div>
      </nav>



    </>
  );
}
export default Header;