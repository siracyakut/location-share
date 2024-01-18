import Map from "~/pages/home/map";
import Button from "~/components/button";
import { useGeolocation } from "react-use";
import { useMarkers } from "~/store/markers/hooks";
import { useAuth } from "~/store/auth/hooks";
import MapMarker from "~/pages/home/map/map-marker";
import { deleteMarkerFirebase, updateMarkerFirebase } from "~/firebase/db";
import toast from "react-hot-toast";
import { setModal } from "~/store/modal/actions";
import { useEffect } from "react";

export default function Home() {
  const location = useGeolocation({ enableHighAccuracy: true });
  const markers = useMarkers();
  const user = useAuth();

  const isSharing = () => {
    const find = markers.find((m) => m.uid === user.uid);
    return !!find;
  };

  const handleDeleteLocation = async () => {
    const marker = markers.find((m) => m.uid === user.uid);
    if (await deleteMarkerFirebase(marker.id)) {
      toast.success("Konum paylaşımını durdurdunuz.");
    }
  };

  const updateMarkerLocation = async () => {
    const marker = markers.find((m) => m.uid === user.uid);
    if (
      marker &&
      marker.lat !== location.latitude &&
      marker.lon !== location.longitude
    ) {
      await updateMarkerFirebase(marker.id, {
        lat: location.latitude,
        lon: location.longitude,
      });
    }
  };

  useEffect(() => {
    if (user && !location.error && !location.loading) {
      void updateMarkerLocation();
    }
  }, [user, location]);

  return (
    <div className="w-full h-full">
      <div className="grid gap-y-3 md:flex md:items-center md:justify-between mb-4">
        <p className="flex flex-col text-center md:text-left text-xl font-medium">
          Konumunuzu paylaşın!
          {!user && (
            <span className="text-sm text-zinc-400">
              Konumunuzu paylaşabilmek için lütfen giriş yapın.
            </span>
          )}
        </p>
        {(location.loading || location.error) && (
          <p className="text-center bg-zinc-700 text-white px-4 py-2 rounded text-sm">
            {location.loading &&
              "Konumunuz alınıyor... (Konum izinlerini açmanız gerekli)"}
            {location.error &&
              "Konumunuz alınırken hata oluştu. Lütfen konum izinlerini verin."}
          </p>
        )}
        {user && (
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button
              onClick={() => setModal("share", location)}
              component="button"
              size="normal"
              variant="primary"
              disabled={
                !user || location.loading || location.error || isSharing()
              }
            >
              Konum Paylaşımını Başlat
            </Button>
            {isSharing() && (
              <Button
                onClick={handleDeleteLocation}
                component="button"
                size="normal"
                variant="primary"
                disabled={
                  !user || location.loading || location.error || !isSharing()
                }
              >
                Konum Paylaşımını Durdur
              </Button>
            )}
          </div>
        )}
      </div>
      <div className="w-full h-[600px] bg-zinc-500 p-2 rounded-lg">
        <Map>
          {markers.map((marker, index) => (
            <MapMarker
              key={index}
              name={marker.name}
              image={marker.image}
              lat={marker.lat}
              lng={marker.lon}
            />
          ))}
        </Map>
      </div>
    </div>
  );
}
