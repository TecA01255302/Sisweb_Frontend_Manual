import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

interface Props{}


const ProductPage = (props: Props) => {

return (

<>
<nav className="panel">
        <p className="panel-heading">All Products</p>

        <div className="panel-block">
          <h2>Filter</h2>
        </div>

        <div className="panel-block ">
          <div className="field is-grouped">
            <div className="field">
              <label className="label">Title</label>

              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>

              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>

            <div className="field">
              <label className="label">Category</label>

              <p className="control">
                <div className="select">
                  <select>
                    <option>Category 1</option>

                    <option>Category 2</option>
                  </select>
                </div>
              </p>
            </div>

            <div className="field is-align-content-flex-end mb-3">
              <p className="control">
                <button className="button is-link is-outlined">Filtrar</button>
              </p>
            </div>
          </div>
        </div>

        <div className="panel-block">
          <h2>Results</h2>
        </div>

        <div className="panel-block">
          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>#</th>

                <th>Image</th>

                <th>Title</th>

                <th>Description</th>

                <th>Price</th>

                <th>
                  <abbr title="Discount Percentage">Disc.%</abbr>
                </th>

                <th>Rating</th>

                <th>Stock</th>

                <th>Modify</th>

                <th>Delete</th>
              </tr>
            </thead>

            <tfoot>
              <tr>
                <th>#</th>

                <th>Image</th>

                <th>Title</th>

                <th>Description</th>

                <th>Price</th>

                <th>
                  <abbr title="Discount Percentage">Disc.%</abbr>
                </th>

                <th>Rating</th>

                <th>Stock</th>

                <th>Modify</th>

                <th>Delete</th>
              </tr>
            </tfoot>

            <tbody>
              <tr>
                <th>1</th>

                <td>
                  <FontAwesomeIcon icon={faImage} />
                </td>

                <td>
                  <a className="button is-ghost p-0">Title</a>
                </td>

                <td>Some description</td>

                <td>12.34</td>

                <td>3.4</td>

                <td>5</td>

                <td>36</td>

                <td>
                  <button
                    type="button"
                    onClick={() => confirm("Save the changes?")}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() => confirm("Delete the product?")}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </nav>
</>

);

}


export default ProductPage;