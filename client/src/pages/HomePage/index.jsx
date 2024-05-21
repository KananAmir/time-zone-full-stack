import { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Card, Col, Row, Input, Button, Select } from "antd";
import { getAllData } from "../../services";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CiHeart } from "react-icons/ci";
import FavoritesContext from "../../context/favoritesCotext";
import { CiShoppingBasket } from "react-icons/ci";
import BasketContext from "../../context/basketContext";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
const { Meta } = Card;
const HomePage = () => {
  const [watchs, setWatchs] = useState(null);
  const [watchsCopy, setWatchsCopy] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const { favs, setFavs } = useContext(FavoritesContext);
  const { basket, setBasket } = useContext(BasketContext);

  useEffect(() => {
    getAllData().then((res) => {
      setWatchs(res.data.data);
      setWatchsCopy(res.data.data);
    });
  }, []);

  const filteredWatches = watchs?.filter((q) =>
    q.title.toLowerCase().includes(searchValue.toLowerCase().trim())
  );
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

  const handleFavorite = (watch) => {
    const found = favs.find((q) => q._id === watch._id);

    if (found) {
      setFavs([...favs.filter((q) => q._id !== watch._id)]);

      localStorage.setItem(
        "favs",
        JSON.stringify([...favs.filter((q) => q._id !== watch._id)])
      );
    } else {
      setFavs([...favs, watch]);
      localStorage.setItem("favs", JSON.stringify([...favs, watch]));
    }
    console.log(favs);
  };

  const handleBasket = (watch) => {
    const found = basket.find((q) => q.product._id === watch._id);

    if (found) {
      found.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { product: watch, count: 1 }]);
    }

    console.log(basket);
  };

  console.log(favs);
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

          <section id="cards-carousel" style={{ padding: "8rem 0" }}>
            <div className="container">
              <div className="cards-carousel">
                <Swiper
                  spaceBetween={50}
                  loop
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                  breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    992: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                >
                  <SwiperSlide>
                    <Card
                      style={{ position: "relative" }}
                      hoverable
                      cover={
                        <img
                          alt="example"
                          src={
                            "https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
                          }
                        />
                      }
                    >
                      <Meta title={"test"} description={`test`} />
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card
                      style={{ position: "relative" }}
                      hoverable
                      cover={
                        <img
                          alt="example"
                          src={
                            "https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"
                          }
                        />
                      }
                    >
                      <Meta title={"test"} description={`test`} />
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card
                      style={{ position: "relative" }}
                      hoverable
                      cover={
                        <img
                          alt="example"
                          src={
                            "https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"
                          }
                        />
                      }
                    >
                      <Meta title={"test"} description={`test`} />
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card
                      style={{ position: "relative" }}
                      hoverable
                      cover={
                        <img
                          alt="example"
                          src={
                            "https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
                          }
                        />
                      }
                    >
                      <Meta title={"test"} description={`test`} />
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card
                      style={{ position: "relative" }}
                      hoverable
                      cover={
                        <img
                          alt="example"
                          src={
                            "https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"
                          }
                        />
                      }
                    >
                      <Meta title={"test"} description={`test`} />
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card
                      style={{ position: "relative" }}
                      hoverable
                      cover={
                        <img
                          alt="example"
                          src={
                            "https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"
                          }
                        />
                      }
                    >
                      <Meta title={"test"} description={`test`} />
                    </Card>
                  </SwiperSlide>
                </Swiper>
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
                            style={{ position: "relative" }}
                            hoverable
                            cover={<img alt="example" src={w.imageUrl} />}
                          >
                            <Meta
                              title={
                                <Link to={`/products/${w._id}`}>{w.title}</Link>
                              }
                              description={`$ ${w.price}`}
                            />

                            <CiHeart
                              style={{
                                position: "absolute",
                                right: 5,
                                top: 5,
                                fontSize: "1.5rem",
                                color:
                                  favs.find((q) => q._id === w._id) && "red",
                              }}
                              onClick={() => handleFavorite(w)}
                            />

                            <CiShoppingBasket
                              style={{ fontSize: "1.5rem" }}
                              onClick={() => {
                                handleBasket(w);
                              }}
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
