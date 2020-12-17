import React, {useState} from 'react'
import './ListTrips.css'
import { List, Card, Layout } from 'antd';
const { Header, Footer, Content } = Layout;
const { Meta } = Card;


export const ListTrips = () => {
  const [data, setData] = useState([{id:1, logo: "https://cdn.puraventura.info/img/480x360/101.jpg", title: "Soy un titulo ", price: "$ 40"}, {id:1, logo: "https://cdn.puraventura.info/img/480x360/101.jpg", title: "Soy un titulo ", price: "$ 40"}, {id:1, logo: "https://cdn.puraventura.info/img/480x360/101.jpg", title: "Soy un titulo ", price: "$ 40"}])
  return (
   <>
   <Layout className="layout-container">
      <Header className="header-container">Listing Trips</Header>
      <Content><ListItems items={data}/></Content>
      <Footer className="header-container">Test Ventura Travel </Footer>
    </Layout>
   </>
  )
}


const ListItems = ({items}) => {
  return(
    <div className="box-container">
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 3,
        xxl: 5,
      }}
      dataSource={items}
      renderItem={item => (
        <List.Item>
          <Card
            hoverable={true}
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={item.logo}
                style={{maxHeight: '200px'}}
              />
            }>
            <Meta title={`${item.title}`} description={item.price} />
          </Card>
        </List.Item>
      )}
    />
   </div>
  );
}
