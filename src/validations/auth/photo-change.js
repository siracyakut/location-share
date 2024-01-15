import Yup from "~/validations/yup";

export const photoChangeSchema = Yup.object().shape({
  photoLink: Yup.string()
    .url()
    .test("valid-image-url", "Lütfen geçerli bir resim URL girin.", (value) =>
      testImage(value, 2000).then((status) => status === "success"),
    )
    .required(),
});

const testImage = (url, timeout) =>
  new Promise((res) => {
    timeout = timeout || 5000;
    let timedOut = false;
    let timer;
    const img = new Image();

    img.onerror = img.onabort = () => {
      if (!timedOut) {
        clearTimeout(timer);
        res("error");
      }
    };

    img.onload = () => {
      if (!timedOut) {
        clearTimeout(timer);
        res("success");
      }
    };

    img.src = url;

    timer = setTimeout(() => {
      timedOut = true;
      img.src = "//!!!!/test.jpg";
      res("timeout");
    }, timeout);
  });
