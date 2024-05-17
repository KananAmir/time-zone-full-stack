import { useEffect, useState } from "react";
import "./index.scss";
import { Card, Col, Row } from "antd";
import { getAllData } from "../../services";
const { Meta } = Card;
const HomePage = () => {
  const [watchs, setWatchs] = useState(null);

  useEffect(() => {
    getAllData().then((res) => {
      setWatchs(res.data.data);
    });
  }, []);

  return (
    <div id="home-page">
      <div className="home-page">
        <section id="banner">
          <div className="banner">
            <div className="container">
              <div className="content">
                <h1>Select Your New Perfect Style</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore corporis placeat reiciendis magnam dolorum ipsam,
                  excepturi aliquam laudantium cum aperiam! Laudantium ullam
                  quas, officia sapiente doloribus vel et nisi soluta.
                </p>
                <button className="show">Shop Now</button>
              </div>
            </div>
          </div>
        </section>

        <section id="popular-items">
          <div className="container">
            <div className="popular-items">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                fugiat officiis, obcaecati sed saepe odio dignissimos magnam
                <br />
                quos praesentium quia voluptatem ipsa quasi nesciunt corrupti
                nisi ab. Labore, cum id.
              </p>

              <div></div>
              <Row gutter={16}>
                {watchs &&
                  watchs.map((w) => {
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
                          hoverable
                          cover={<img alt="example" src={w.imageUrl} />}
                        >
                          <Meta title={w.title} description={`$ ${w.price}`} />
                        </Card>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
