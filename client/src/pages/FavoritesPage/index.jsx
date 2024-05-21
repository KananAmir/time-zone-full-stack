import { Card, Col, Row } from "antd";
import { useContext } from "react";
import FavoritesContext from "../../context/favoritesCotext";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
const { Meta } = Card;
const FavoritesPage = () => {
  const { favs, setFavs } = useContext(FavoritesContext);
  return (
    <div id="favorites">
      <div className="container">
        <div className="favorites">
          <Row gutter={16}>
            {favs.length > 0 &&
              favs.map((w) => {
                return (
                  <Col
                    className="gutter-row"
                    span={8}
                    key={w._id}
                    xs={24}
                    md={12}
                    lg={8}
                  >
                    <Card
                      style={{ position: "relative" }}
                      hoverable
                      cover={<img alt="example" src={w.imageUrl} />}
                    >
                      <Meta
                        title={<Link to={`/products/${w._id}`}>{w.title}</Link>}
                        description={`$ ${w.price}`}
                      />

                      <CiHeart
                        style={{
                          position: "absolute",
                          right: 5,
                          top: 5,
                          fontSize: "1.5rem",
                        }}
                        onClick={() => {
                          setFavs([...favs.filter((q) => q._id !== w._id)]);

                          localStorage.setItem(
                            "favs",
                            JSON.stringify([
                              ...favs.filter((q) => q._id !== w._id),
                            ])
                          );
                        }}
                      />
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
