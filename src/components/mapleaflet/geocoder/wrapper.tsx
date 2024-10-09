import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";

export default function LeafletControlGeocoder() {
  const map = useMap();
  const markerRef = useRef<L.Marker | null>(null); // Ref to store the current marker
  useEffect(() => {
    // @ts-ignore
    var geocoder = L.Control.Geocoder.nominatim();
    
    // If URLSearchParams and location.search are available
    if (typeof URLSearchParams !== "undefined" && location.search) {
      const params = new URLSearchParams(location.search);
      const geocoderString = params.get("geocoder");
      
      // Dynamically use the geocoder string to fetch the appropriate geocoder
      // @ts-ignore
      if (geocoderString && L.Control.Geocoder[geocoderString]) {
        // @ts-ignore
        geocoder = L.Control.Geocoder[geocoderString]();
      } else if (geocoderString) {
        console.warn("Unsupported geocoder", geocoderString);
      }
    }
    // @ts-ignore
    const control = L.Control.geocoder({
      query: "",
      placeholder: "Search here...",
      defaultMarkGeocode: false,
      geocoder,
    })// @ts-ignore
      .on("markgeocode", function (e) {
        const latlng = e.geocode.center;
         // Remove the previous marker if it exists
         if (markerRef.current) {
            map.removeLayer(markerRef.current);
          }

          const newMarker = L.marker(latlng)
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup();

          // Store the new marker in the ref for future reference
        markerRef.current = newMarker;

        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
      
    const geocoderInput = document.querySelector(".leaflet-control-geocoder-form input") as HTMLInputElement;;
    if (geocoderInput) {
      geocoderInput.style.color = "black"; // Force input text color to black
      geocoderInput.style.backgroundColor = "white"; // Adjust background color if needed
    }
    // Cleanup function to remove the geocoder when the component unmounts
    return () => {
      map.removeControl(control);
    };
  }, [map]);

  return null;
}
