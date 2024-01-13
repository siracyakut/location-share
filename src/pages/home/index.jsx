import Map from "~/pages/home/map";
import Button from "~/components/button";
import { useGeolocation } from "react-use";
import { useMarkers } from "~/store/markers/hooks";
import { useAuth } from "~/store/auth/hooks";
import MapMarker from "~/pages/home/map/map-marker";
import { addMarkerToFirebase, deleteMarkerFirebase } from "~/firebase/db";
import toast from "react-hot-toast";

export default function Home() {
  const location = useGeolocation();
  const markers = useMarkers();
  const user = useAuth();

  const isSharing = () => {
    const find = markers.find((m) => m.uid === user.uid);
    return !!find;
  };

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
      lat: location.latitude,
      lon: location.longitude,
    };
    await addMarkerToFirebase(userLocation);
    toast.success("Konumunuzu paylaşmaya başladınız!");
  };

  const handleDeleteLocation = async () => {
    await deleteMarkerFirebase(user.uid);
    toast.success("Konum paylaşımını durdurdunuz.");
  };

  return (
    <div className="w-full h-full">
      <div className="grid gap-y-3 md:flex md:items-center md:justify-between mb-4">
        <p className="text-center text-xl font-medium">Konumunuzu paylaşın!</p>
        {(location.loading || location.error) && (
          <p className="text-center bg-zinc-700 text-white px-4 py-2 rounded text-sm">
            {location.loading &&
              "Konumunuz alınıyor... (Konum izinlerini açmanız gerekli)"}
            {location.error &&
              "Konumunuz alınırken hata oluştu. Lütfen konum izinlerini verin."}
          </p>
        )}
        <div className="flex flex-wrap gap-y-4 items-center justify-center gap-x-4">
          {user && (
            <Button
              onClick={handleAddLocation}
              component="button"
              size="normal"
              variant="primary"
              disabled={
                !user || location.loading || location.error || isSharing()
              }
            >
              Konum Paylaşımını Başlat
            </Button>
          )}
          {user && isSharing() && (
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
      </div>
      <div className="w-full h-[600px] bg-zinc-500 p-2 rounded-lg">
        <Map>
          {markers.map((marker, index) => (
            <MapMarker
              key={index}
              name={marker.name}
              lat={marker.lat}
              lng={marker.lon}
            />
          ))}
        </Map>
      </div>
    </div>
  );
}
