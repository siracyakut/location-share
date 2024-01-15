import { Form, Formik } from "formik";
import { passwordChangeSchema } from "~/validations";
import Input from "~/components/input";
import Button from "~/components/button";
import { firebaseUpdatePassword } from "~/firebase/auth";
import toast from "react-hot-toast";

export default function ProfilePasswordChange() {
  const handleSubmit = async (values, helpers) => {
    if (await firebaseUpdatePassword(values.newPassword)) {
      helpers.resetForm();
      toast.success("Şifrenizi başarıyla güncellediniz!");
    }
  };

  return (
    <Formik
      initialValues={{
        newPassword: "",
        newPasswordConfirm: "",
      }}
      validationSchema={passwordChangeSchema}
      onSubmit={(values, formikHelpers) => handleSubmit(values, formikHelpers)}
    >
      {({ isSubmitting }) => (
        <Form className="grid gap-y-3">
          <Input type="password" name="newPassword" label="Yeni Şifreniz:" />
          <Input
            type="password"
            name="newPasswordConfirm"
            label="Yeni Şifreniz Tekrar:"
          />
          <div className="mt-1.5">
            <Button
              disabled={isSubmitting}
              type="submit"
              component="button"
              size="full"
              variant="secondary"
            >
              Şifreyi Güncelle
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
