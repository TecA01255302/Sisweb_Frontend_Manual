import "./App.css";
import { Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

/*import ProductPage from "./pages/ProductPage";
import ListProducts from "./components/ListProducts";*/

interface Props {}

export default function App(props: Props) {
  return (
    <>
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <FontAwesomeIcon icon={faHome} className="fas fa-lg mr-3" />

            <p className="subtitle is-5">
              <strong>This's</strong> my store
            </p>
          </div>
        </div>

        <div className="level-right">
          <p className="level-item">
            <Link to="/">
            <a>Home</a>
            </Link>
          </p>

          <p className="level-item">
            <Link to="/products">
            <a>Products</a>
            </Link>
          </p>

          <p className="level-item">
            <a>Orders</a>
          </p>

          <p className="level-item">
            <a>Providers</a>
          </p>
        </div>

        <div className="level-right">
          <p className="level-item">
            <button type="button" className="button is-link is-outlined">
              Login
            </button>
          </p>
        </div>
      </nav>

      <Outlet />
      {/*<h1>Welcome to React</h1>
     <ListProducts /> */}
    </>
  );
}
