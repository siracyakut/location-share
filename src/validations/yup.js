import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Bu alanı doldurmalısınız.",
  },
  string: {
    email: "Geçerli bir e-posta adresi girmelisiniz.",
    min: "En az ${min} karakter girmelisiniz.",
    max: "En fazla ${max} karakter girmelisiniz.",
    url: "Geçerli bir link girmelisiniz.",
  },
  boolean: {
    oneOf: "Bu alanı işaretlemelisiniz.",
  },
});

export default Yup;
