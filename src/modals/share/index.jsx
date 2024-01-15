import toast from "react-hot-toast";
import { addMarkerToFirebase } from "~/firebase/db";
import { useMarkers } from "~/store/markers/hooks";
import { useAuth } from "~/store/auth/hooks";
import Button from "~/components/button";
import { useState } from "react";
import { addTimestampToSeconds } from "~/utils/timestamp";
import { closeModal } from "~/store/modal/actions";
import PropTypes from "prop-types";

export default function ShareModal({ data }) {
  const [second, setSecond] = useState(600);
  const markers = useMarkers();
  const user = useAuth();

  const isSameNameSharing = () => {
    const find = markers.find(
      (m) => m.uid !== user.uid && m.name === user.displayName,
    );
    return !!find;
  };

  const handleAddLocation = async () => {
    if (isSameNameSharing())
      return toast.error(
        "Aynı isimde bir başka üye konum paylaşımı yapıyor. Lütfen kullanıcı adınızı değiştirin.",
      );
    const userLocation = {
      name: user.displayName,
      uid: user.uid,
      lat: data.latitude,
      lon: data.longitude,
      expire: second === -1 ? -1 : addTimestampToSeconds(second),
    };
    if (await addMarkerToFirebase(userLocation)) {
      toast.success("Konumunuzu paylaşmaya başladınız!");
      closeModal();
    }
  };

  return (
    <>
      <p className="mb-4">
        Konumunuzu paylaşmak üzeresiniz. Lütfen paylaşım süresi seçin:
      </p>
      <div className="grid gap-1.5 mb-4">
        <div className="grid md:grid-cols-3 gap-1.5">
          <Button
            selected={second === 600}
            onClick={() => setSecond(600)}
            component="button"
            size="full"
            variant="primary"
          >
            10 dakika
          </Button>
          <Button
            selected={second === 1800}
            onClick={() => setSecond(1800)}
            component="button"
            size="full"
            variant="primary"
          >
            30 dakika
          </Button>
          <Button
            selected={second === 3600}
            onClick={() => setSecond(3600)}
            component="button"
            size="full"
            variant="primary"
          >
            1 saat
          </Button>
        </div>
        <Button
          selected={second === -1}
          onClick={() => setSecond(-1)}
          component="button"
          size="full"
          variant="primary"
        >
          Sınırsız
        </Button>
      </div>
      <Button
        onClick={handleAddLocation}
        component="button"
        size="full"
        variant="secondary"
      >
        Paylaşımı Başlat
      </Button>
    </>
  );
}

ShareModal.propTypes = {
  data: PropTypes.object.isRequired,
};
