import LoginModal from "~/modals/login";
import RegisterModal from "~/modals/register";
import ShareModal from "~/modals/share";

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
  {
    name: "share",
    title: "Konum Paylaş",
    element: ShareModal,
  },
];

export default modals;
