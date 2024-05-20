import { useEffect, useState } from "react";
import "./index.scss";
import { Card, Col, Row, Input, Button, Select } from "antd";
import { getAllData } from "../../services";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const { Meta } = Card;
const HomePage = () => {
  const [watchs, setWatchs] = useState(null);
  const [watchsCopy, setWatchsCopy] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getAllData().then((res) => {
      setWatchs(res.data.data);
      setWatchsCopy(res.data.data);
    });
  }, []);

  const filteredWatches = watchs?.filter((q) =>
    q.title.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  console.log("test");
  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);

  //   if (value === "asc") {
  //     getAllData().then((res) => {
  //       setWatchs(res.data.data.sort((a, b) => a.price - b.price));
  //     });
  //   } else if (value === "desc") {
  //     getAllData().then((res) => {
  //       setWatchs(res.data.data.sort((a, b) => b.price - a.price));
  //     });
  //   } else {
  //     getAllData().then((res) => {
  //       setWatchs(res.data.data);
  //     });
  //   }
  // };

  const handleChange = (value) => {
    if (value === "asc") {
      setWatchs([...watchs.toSorted((a, b) => a.price - b.price)]);
    } else if (value === "desc") {
      setWatchs([...watchs.toSorted((a, b) => b.price - a.price)]);
    } else {
      setWatchs([...watchsCopy]);
    }
  };

  // const handleSearch = (value) => {

  //   getAllData().then((res) => {
  //     setWatchs(
  //       res.data.data.filter((q) =>
  //         q.title.toLowerCase().includes(value.toLowerCase().trim())
  //       )
  //     );
  //   });
  // };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Watch Shop | Ecommerce</title>
      </Helmet>
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

                <Row style={{ margin: "20px 0" }}>
                  <Col span={12}>
                    <Input
                      placeholder="search watch here.."
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </Col>
                  <Col
                    span={12}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Select
                      defaultValue="default"
                      style={{
                        width: 220,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "asc",
                          label: "Sort by Price Asc",
                        },
                        {
                          value: "desc",
                          label: "Sort by Price Desc",
                        },
                        {
                          value: "default",
                          label: "Sort by Price Default",
                        },
                      ]}
                    />
                  </Col>
                </Row>
                <Row gutter={16}>
                  {filteredWatches &&
                    filteredWatches.map((w) => {
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
                            <Meta
                              title={
                                <Link to={`/products/${w._id}`}>{w.title}</Link>
                              }
                              description={`$ ${w.price}`}
                            />
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
    </>
  );
};

export default HomePage;
