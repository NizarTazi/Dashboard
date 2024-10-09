import { ArrowDownOutlined, LoadingOutlined, NodeIndexOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Statistic } from "antd";

interface InfoboxProps {
    distance: string;
    duration: string;
  }
  
  export const Infobox = ({ distance, duration }: InfoboxProps) => {
    return (
        
        <Row gutter={16} style={{padding: "5px 0px 0px 20px"}}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Distance"
              value={distance}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<NodeIndexOutlined />}
             
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Duration"
              value={duration}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<LoadingOutlined />}
              
            />
          </Card>
        </Col>
      </Row>
      
    );
  };