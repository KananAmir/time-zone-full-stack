import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../../services";
import { Col, Row } from "antd";
import { Helmet } from "react-helmet";
const ProductDetailsPage = () => {
  const [watch, setWatch] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getDataById(id).then((res) => {
      // console.log(res.data.data);
      setWatch(res.data.data);
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{watch.title}</title>
      </Helmet>
      <div id="details">
        <div className="container">
          <div className="detail">
            <Row gutter={16}>
              <Col
                className="gutter-row"
                span={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <img src={watch.imageUrl} alt={watch.title} />
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <h2>{watch.title}</h2>
                <p>{watch.desc}</p>
                <p>{watch.price}</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
