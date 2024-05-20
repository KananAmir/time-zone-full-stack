import { useFormik } from "formik";
import { WatchSchema } from "../../validations/watchShema";
import { addNewData, deleteDataById, getAllData } from "../../services";
import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import { render } from "sass";

const AddProductPage = () => {
  const [watchs, setWatchs] = useState(null);

  useEffect(() => {
    getAllData().then((res) => {
      setWatchs(res.data.data);
    });
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Photo",
      dataIndex: "imageUrl",
      render: (text, record) => {
        return <img src={text} alt={record.title} width={150} />;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "DELETE",
      render: (text, record) => {
        return (
          <Button
            danger
            onClick={() => {
              deleteDataById(record._id).then((res) => {
                if (res.status === 200) {
                  // getAllData().then((res) => {
                  //   setWatchs(res.data.data);
                  // });
                  const filtered = watchs.filter((q) => q._id !== record._id);
                  setWatchs(filtered);
                }
              });
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];
  const formik = useFormik({
    initialValues: {
      title: "",
      price: 0,
      imageUrl: "",
      description: "",
    },
    onSubmit: async (values) => {
      // console.log(values);
      addNewData(values).then((res) => {
        console.log(res);
      });
    },
    validationSchema: WatchSchema,
  });
  return (
    <div id="add-product">
      <div className="container">
        <div className="add-product">
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: " center",
              gap: "20px",
            }}
          >
            <div>
              <label htmlFor="firstName">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
              />

              {formik.errors.title && formik.touched.title && (
                <div id="feedback" style={{ color: "red" }}>
                  {formik.errors.title}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="lastName">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price}
              />

              {formik.errors.price && formik.touched.price && (
                <div id="feedback" style={{ color: "red" }}>
                  {formik.errors.price}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="lastName">Image Url</label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.imageUrl}
              />

              {formik.errors.imageUrl && formik.touched.imageUrl && (
                <div id="feedback" style={{ color: "red" }}>
                  {formik.errors.imageUrl}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="lastName">Description</label>
              <input
                id="description"
                name="description"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.description}
              />

              {formik.errors.description && formik.touched.description && (
                <div id="feedback" style={{ color: "red" }}>
                  {formik.errors.description}
                </div>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>

          <hr />

          <Table columns={columns} dataSource={watchs} />
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
