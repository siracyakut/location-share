import { Outlet } from "react-router-dom";
import Header from "~/layouts/main/header";
import Modal from "~/modals";
import { useModal } from "~/store/modal/hooks";
import { Toaster } from "react-hot-toast";
import { useAuth } from "~/store/auth/hooks";
import Loading from "~/components/loading";
import { useMarkers } from "~/store/markers/hooks";
import Footer from "~/layouts/main/footer";
import { useEffect, useState } from "react";
import { getTimestamp } from "~/utils/timestamp";
import { deleteMarkerFirebase } from "~/firebase/db";

export default function MainLayout() {
  const [isOk, setIsOk] = useState(false);
  const { modal } = useModal();
  const user = useAuth();
  const markers = useMarkers();

  const checkTimeout = () => {
    if (markers && markers.length > 0) {
      markers.forEach(async (marker) => {
        if (marker.expire !== -1 && marker.expire <= getTimestamp()) {
          await deleteMarkerFirebase(marker.id);
        }
      });
      setIsOk(true);
    } else {
      setIsOk(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(checkTimeout, 1000);

    return () => clearInterval(interval);
  }, [markers]);

  return (
    <div className="min-h-full container mx-auto flex flex-col">
      {user === null || !markers || !isOk ? (
        <Loading />
      ) : (
        <>
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
          <Footer />
        </>
      )}
    </div>
  );
}
