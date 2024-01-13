import { Form, Formik } from "formik";
import Input from "~/components/input";
import { setModal } from "~/store/modal/actions";
import Button from "~/components/button";
import Or from "~/components/or";
import { firebaseGoogleLogin, firebaseRegister } from "~/firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { registerSchema } from "~/validations/auth/register";

export default function RegisterModal() {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) =>
          firebaseRegister(values.username, values.email, values.password)
        }
      >
        {({ isSubmitting }) => (
          <Form className="grid gap-y-4">
            <Input label="Kullanıcı Adınız" name="username" />
            <Input label="E-Posta Adresiniz" name="email" />
            <Input label="Şifreniz" name="password" type="password" />
            <Button
              disabled={isSubmitting}
              component="button"
              size="full"
              variant="secondary"
              type="submit"
            >
              Kayıt Ol
            </Button>
          </Form>
        )}
      </Formik>
      <div className="flex flex-col gap-y-4 mt-4">
        <Or label="veya" />
        <Button
          onClick={() => firebaseGoogleLogin()}
          component="button"
          variant="primary"
          size="full"
          type="submit"
        >
          <FcGoogle />
          <p>Google ile Kayıt Ol</p>
        </Button>
        <div className="text-sm text-zinc-400 text-center mt-4">
          <p>Hesabınız var mı?</p>
          <p>
            Giriş yapmak için{" "}
            <span
              onClick={() => setModal("login")}
              className="text-blue-500 underline cursor-pointer"
            >
              buraya tıklayın!
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
