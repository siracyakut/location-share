import Yup from "~/validations/yup";

export const mailChangeSchema = Yup.object().shape({
  newMail: Yup.string().email().required(),
  newMailConfirm: Yup.string()
    .oneOf([Yup.ref("newMail"), null], "E-Postalar eşleşmiyor!")
    .required(),
});
