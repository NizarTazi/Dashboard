
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
//@ts-ignore
const createRoutineMachineLayer = (props) => {
  //@ts-ignore
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(43.809788, -73.417495),
      L.latLng(43.696800, -74.398981),
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 5 }],
    },
    show: true,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: true,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;