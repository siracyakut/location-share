import LoginModal from "~/modals/login";
import RegisterModal from "~/modals/register";

const modals = [
  {
    name: "login",
    title: "Giriş Yap",
    element: LoginModal,
  },
  {
    name: "register",
    title: "Kayıt Ol",
    element: RegisterModal,
  },
];

export default modals;
