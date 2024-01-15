import { Form, Formik } from "formik";
import Input from "~/components/input";
import Button from "~/components/button";
import { firebaseUpdateMail } from "~/firebase/auth";
import toast from "react-hot-toast";
import { mailChangeSchema } from "~/validations";

export default function ProfileMailChange() {
  const handleSubmit = async (values, helpers) => {
    if (await firebaseUpdateMail(values.newMail)) {
      helpers.resetForm();
      toast.success("E-Posta adresinizi güncellediniz!");
    }
  };

  return (
    <Formik
      initialValues={{
        newMail: "",
        newMailConfirm: "",
      }}
      validationSchema={mailChangeSchema}
      onSubmit={(values, formikHelpers) => handleSubmit(values, formikHelpers)}
    >
      {({ isSubmitting }) => (
        <Form className="grid gap-y-3">
          <Input name="newMail" label="Yeni E-Posta:" />
          <Input name="newMailConfirm" label="Yeni E-Posta Tekrar:" />
          <div className="mt-1.5">
            <Button
              disabled={isSubmitting}
              type="submit"
              component="button"
              size="full"
              variant="secondary"
            >
              E-Posta Güncelle
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
