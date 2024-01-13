import { Outlet } from "react-router-dom";
import Header from "~/layouts/main/header";
import Modal from "~/modals";
import { useModal } from "~/store/modal/hooks";
import { Toaster } from "react-hot-toast";

export default function MainLayout() {
  const { modal } = useModal();

  return (
    <div className="min-h-full container mx-auto">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#444",
            color: "#fff",
          },
        }}
      />
      {modal && <Modal />}
      <Header />
      <Outlet />
    </div>
  );
}
