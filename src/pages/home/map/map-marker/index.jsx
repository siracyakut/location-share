import { FaMapMarkerAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { Popover } from "@headlessui/react";

export default function MapMarker({ name, lat, lng }) {
  const marker_width = 40;
  const marker_height = 40;

  const markerStyles = {
    position: "absolute",
    width: marker_width,
    height: marker_height,
    left: -marker_width / 2,
    top: -marker_height / 2,
  };

  return (
    <Popover className="relative">
      <Popover.Button>
        <div style={markerStyles}>
          <FaMapMarkerAlt size={20} className="text-blue-400" />
          <p className="text-white font-medium">{name}</p>
        </div>
      </Popover.Button>
      <Popover.Panel className="absolute top-5 -left-9 z-[2] bg-zinc-900 rounded-md p-2 w-max flex flex-col items-center justify-center text-center">
        {}
        <p>Kullanıcı: {name}</p>
        <p>LAT: {lat.toFixed(5)}</p>
        <p>LON: {lng.toFixed(5)}</p>
      </Popover.Panel>
    </Popover>
  );
}

MapMarker.propTypes = {
  name: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};
