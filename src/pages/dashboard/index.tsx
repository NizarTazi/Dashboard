import { Row, Col, Card, Typography } from "antd";
import Map from "../../components/mapleaflet/map";


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

export const DashboardPage: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col md={24}>
        <Row gutter={[16, 16]}>
          <Col xl={10} lg={24} md={24} sm={24} xs={24}>
            <Card
              bodyStyle={dashboardCardStyles.dailyRevenue.bodyStyle}
              style={dashboardCardStyles.dailyRevenue.style}
            >
              <p>Active Drivers</p>
            </Card>
          </Col>

          <Col xl={7} lg={12} md={24} sm={24} xs={24}>
            <Card
              bodyStyle={dashboardCardStyles.dailyOrders.bodyStyle}
              style={dashboardCardStyles.dailyOrders.style}
            >
              <p>Active Rides</p>
            </Card>
          </Col>

          <Col xl={7} lg={12} md={24} sm={24} xs={24}>
            <Card
              bodyStyle={dashboardCardStyles.newCustomers.bodyStyle}
              style={dashboardCardStyles.newCustomers.style}
            >
              <p>Total Rides</p>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col xl={17} lg={16} md={24} sm={24} xs={24}>
       
          
          <Map/>
        
      </Col>
      <Col xl={7} lg={8} md={24} sm={24} xs={24}>
        <Card
          bodyStyle={dashboardCardStyles.orderTimeline.bodyStyle}
          title={
            <Text strong style={{ textTransform: "capitalize" }}>
              Active Drivers - timeline
            </Text>
          }
        >
          <p>timeline</p>
        </Card>
      </Col>
    </Row>
  );
};