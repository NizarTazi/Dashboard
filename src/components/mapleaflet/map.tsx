import { Card, Space, Typography } from 'antd'
import { LatLngExpression } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import { supabaseClient } from '../../utility'
import { useEffect, useState } from 'react'
import LeafletControlGeocoder from './geocoder/wrapper'
import "leaflet/dist/leaflet.css";
import { taxiIcon } from './icon'
import RoutingMachine from './routingmachine'
import GeoSearchExample from './geocoder/other'

type DriverLocation = {
    display_name: string;
    phone:string;
    latitude: number;
    longitude: number;
  };
  const { Text } = Typography;

  const dashboardCardStyles = {
    dailyRevenue: {
      bodyStyle: {
        padding: 10,
        paddingBottom: 0,
      },
      style: {
        background: "url(images/daily-revenue.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "cover",
      },
    },
  
    dailyOrders: {
      bodyStyle: {
        padding: 10,
        paddingBottom: 0,
      },
      style: {
        background: "url(images/daily-order.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "cover",
      },
    },
  
    newCustomers: {
      bodyStyle: {
        padding: 10,
        paddingBottom: 0,
      },
      style: {
        background: "url(images/new-orders.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "cover",
      },
    },
  
    deliveryMap: {
      bodyStyle: {
        height: 550,
        padding: 0,
      },
    },
  
    orderTimeline: {
      bodyStyle: {
        height: 550,
        overflow: "scroll",
      },
    },
  };

 



function Map() {


  const [driverLocations, setDriverLocations] = useState<DriverLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const defaultPosition: LatLngExpression = [45.536642022222225, -73.58291204545455]; // Default position

 

    const fetchDriverLocations = async () => {
      const { data, error } = await supabaseClient.rpc('fetch_lat_long');
      if (error) {
        setError("Error fetching driver data");
        console.error(error);
      } else {
        setDriverLocations(data || []); // Set the driver data in state
      }
      setLoading(false);
    };


    useEffect(() => {
        fetchDriverLocations(); // Fetch data immediately on component mount
    
        // Set up interval to refresh the data every 10 seconds
        const intervalId = setInterval(() => {
          fetchDriverLocations(); // Fetch data every 10 seconds
        }, 10000); // 10000 milliseconds = 10 seconds
    
        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, []);
    
      if (loading) return <p>Loading driver locations...</p>;
      if (error) return <p>{error}</p>;



 

    

      
      
    return (
     <>
    
     <Card
          bodyStyle={dashboardCardStyles.deliveryMap.bodyStyle}
          title={<Text strong>Delivery map</Text>}
          style={{height: "100%" }}
        >
     
        <MapContainer
        style={{ minHeight: 200, minWidth: 200, height: '100%', width: '100%' }}
        center={defaultPosition} // Center the map to the default position
        zoom={13}
        scrollWheelZoom={true}
      >
        <LeafletControlGeocoder/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {driverLocations.map((driver, index) => (
          <Marker icon={taxiIcon} key={index} position={[driver.longitude, driver.latitude] as LatLngExpression}>
            <Popup>
              {driver.display_name} <br /> {driver.phone}
            </Popup>
          </Marker>
        ))}
        
      {//<RoutingMachine/>
      }
       
      </MapContainer>
     
      </Card>
      </>
    );
  }
  
  export default Map;
     