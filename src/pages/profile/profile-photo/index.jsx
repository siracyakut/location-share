import { Form, Formik } from "formik";
import { photoChangeSchema } from "~/validations";
import Input from "~/components/input";
import Button from "~/components/button";
import { firebaseUpdate } from "~/firebase/auth";
import toast from "react-hot-toast";
import { useAuth } from "~/store/auth/hooks";

export default function ProfilePhotoChange() {
  const user = useAuth();
  const handleSubmit = async (values, helpers) => {
    if (await firebaseUpdate(false, values.photoLink)) {
      helpers.resetForm();
      toast.success("Profil fotoğrafınızı güncellediniz!");
    }
  };

  return (
    <Formik
      initialValues={{
        photoLink: user.photoURL,
      }}
      validationSchema={photoChangeSchema}
      onSubmit={(values, formikHelpers) => handleSubmit(values, formikHelpers)}
    >
      {({ isSubmitting }) => (
        <Form className="grid gap-y-3">
          <Input name="photoLink" label="Resim URL:" />
          <div className="mt-1.5">
            <Button
              disabled={isSubmitting}
              type="submit"
              component="button"
              size="full"
              variant="secondary"
            >
              Fotoğrafı Güncelle
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
