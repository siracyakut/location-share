import { Form, Formik } from "formik";
import { photoChangeSchema } from "~/validations";
import Input from "~/components/input";
import Button from "~/components/button";
import { firebaseUpdate } from "~/firebase/auth";
import toast from "react-hot-toast";
import { useAuth } from "~/store/auth/hooks";
import { useMarkers } from "~/store/markers/hooks";
import { setMarkers } from "~/store/markers/actions";
import { firebaseDocumentImageUpdate } from "~/firebase/db";

export default function ProfilePhotoChange() {
  const user = useAuth();
  const markers = useMarkers();

  const handleSubmit = async (values, helpers) => {
    if (await firebaseUpdate(false, values.photoLink)) {
      await helpers.setValues({
        photoLink: values.photoLink,
      });
      const newMarkers = structuredClone(markers).map((marker) => {
        if (marker.uid === user.uid) {
          marker.image = values.photoLink;
          firebaseDocumentImageUpdate(marker.id, values.photoLink);
        }
        return marker;
      });
      setMarkers(newMarkers);
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
