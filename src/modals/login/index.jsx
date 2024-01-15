import { Form, Formik } from "formik";
import Input from "~/components/input";
import { setModal } from "~/store/modal/actions";
import Button from "~/components/button";
import { firebaseGoogleLogin, firebaseLogin } from "~/firebase/auth";
import Or from "~/components/or";
import { FcGoogle } from "react-icons/fc";
import { loginSchema } from "~/validations";

export default function LoginModal() {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => firebaseLogin(values.email, values.password)}
      >
        {({ isSubmitting }) => (
          <Form className="grid gap-y-4">
            <Input label="E-Posta Adresiniz" name="email" />
            <Input label="Şifreniz" name="password" type="password" />
            <Button
              disabled={isSubmitting}
              component="button"
              size="full"
              variant="secondary"
              type="submit"
            >
              Giriş Yap
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
          <p>Google ile Giriş Yap</p>
        </Button>
        <div className="text-sm text-zinc-400 text-center mt-4">
          <p>Hesabınız yok mu?</p>
          <p>
            Ücretsiz hesap açmak için{" "}
            <span
              onClick={() => setModal("register")}
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
