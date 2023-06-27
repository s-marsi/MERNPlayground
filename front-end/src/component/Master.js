import "./css/Master.css";
import { Link, Outlet } from "react-router-dom";
const Master = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <Link className="navbar-brand" href="#">
          Product
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Link
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="#">
                Products
              </Link>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-danger my-2 my-sm-0 ms-5"
              type="submit"
            >
              New Product
            </button>
          </div>
        </div>
      </nav>
        <Outlet />
      <div className="footer">
        <h1 className="card-header">F O O T E R</h1>
        <p className="copyright">&copy; s-marsi</p>
      </div>
    </>
  );
};

export default Master;
