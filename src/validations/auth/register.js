import Yup from "~/validations/yup";

export const registerSchema = Yup.object().shape({
  username: Yup.string().min(3).max(32).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required(),
});
