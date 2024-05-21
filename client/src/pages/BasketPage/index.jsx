import { useContext } from "react";
import BasketContext from "../../context/basketContext";
import "./index.scss";
import { FaPlus } from "react-icons/fa";

const BasketPage = () => {
  const { basket, setBasket } = useContext(BasketContext);
  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <table>
            <thead>
              <tr>
                <th>photo</th>
                <th>title</th>
                <th>price</th>
                <th>increment</th>
                <th>count</th>
                <th>decrement</th>
              </tr>
            </thead>
            <tbody>
              {basket.length > 0 &&
                basket.map((basketItem) => {
                  return (
                    <tr key={basketItem.product._id}>
                      <td>
                        <img
                          src={basketItem.product.imageUrl}
                          alt=""
                          width={100}
                        />
                      </td>

                      <td>{basketItem.product.title}</td>
                      <td>{basketItem.product.price}</td>
                      <td>
                        <button
                          onClick={() => {
                            const found = basket.find(
                              (q) => q.product._id === basketItem.product._id
                            );
                            found.count++;
                            setBasket([...basket]);
                          }}
                        >
                          <FaPlus />
                        </button>
                      </td>
                      <td>{basketItem.count}</td>
                      <td>
                        <button
                          onClick={() => {
                            const found = basket.find(
                              (q) => q.product._id === basketItem.product._id
                            );
                            if (found.count === 1) {
                              setBasket([
                                ...basket.filter(
                                  (q) =>
                                    q.product._id !== basketItem.product._id
                                ),
                              ]);
                            } else {
                              found.count--;
                              setBasket([...basket]);
                            }
                          }}
                        >
                          -
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
