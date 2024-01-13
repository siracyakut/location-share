import GoogleMapReact from "google-map-react";
import { darkTheme } from "~/constants/map-themes";

const AnyReactComponent = ({ text }) => (
  <div className="bg-red-500">{text}</div>
);

export default function App() {
  const defaultProps = {
    center: {
      lat: 39,
      lng: 35,
    },
    zoom: 7,
  };

  return (
    <div className="min-h-full container bg-zinc-300 mx-auto w-full h-full flex items-center justify-center">
      <div className="w-full h-full flex flex-col">
        <div className="h-16 bg-yellow-50">test</div>
        <div className="flex-1 w-full h-full bg-yellow-500">
          <div style={{ height: "100%", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_KEY }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              options={{ styles: darkTheme }}
            >
              <AnyReactComponent lat={39} lng={32} text="My Marker" />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
}
