import { useList, useNavigation } from "@refinedev/core";

import { MapWrapper, MapMarker } from "../../components";

export const DeliveryMap: React.FC = () => {
  const { data: orderData } = useList<any>({
    resource: "drivers",
    config: {
      filters: [
        {
          field: "display_name",
          operator: "eq",
          value: "Active",
        },
      ],
      pagination: {
        pageSize: 1000,
      },
    },
  });

  const defaultProps = {
    center: {
      lat: 40.73061,
      lng: -73.935242,
    },
    zoom: 13,
  };

  const { show } = useNavigation();

  return (
    <MapWrapper {...defaultProps}>
      {orderData?.data.map((order) => {
        return (
          <MapMarker
            key={order.id}
            onClick={() => show("orders", order.id)}
            icon={{
              url: "/images/marker-courier.svg",
            }}
            position={{
              lat: Number(order.address.coordinate[0]),
              lng: Number(order.address.coordinate[1]),
            }}
          />
        );
      })}
      {orderData?.data.map((order) => {
        return (
          <MapMarker
            key={order.id}
            onClick={() => show("orders", order.id)}
            icon={{
              url: "/images/marker-location.svg",
            }}
            position={{
              lat: Number(order.store.address.coordinate[0]),
              lng: Number(order.store.address.coordinate[1]),
            }}
          />
        );
      })}
    </MapWrapper>
  );
};