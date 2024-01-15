import Yup from "~/validations/yup";

export const passwordChangeSchema = Yup.object().shape({
  newPassword: Yup.string().min(6).max(32).required(),
  newPasswordConfirm: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Şifreleriniz eşleşmiyor!")
    .required(),
});
