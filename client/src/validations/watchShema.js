import * as Yup from "yup";

export const WatchSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .min(5, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
  imageUrl: Yup.string().url().required("Required"),
  description: Yup.string()
    .min(5, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
});
