import Yup from "~/validations/yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required(),
});
