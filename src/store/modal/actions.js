import store from "~/store";
import { _destroyModal, _setIsOpen, _setModal } from "~/store/modal";

export const setModal = (name, data = {}) =>
  store.dispatch(_setModal({ name, data }));
export const destroyModal = () => store.dispatch(_destroyModal());
export const closeModal = () => {
  store.dispatch(_setIsOpen(false));
  setTimeout(destroyModal, 200);
};
