import Layout from '../components/Layout'
import api from '../auth/axios'
import { PropertyVip } from '../components/PropertyVip'
import { MDBContainer } from 'mdbreact'
import { Carousel } from '../components/Carrousel'
import { PropertySection } from '../components/PropertySection'
import { Features } from '../components/Features'

export default function Home ({ propertiesVip, properties }) {
  return (
    <Layout>
      <Carousel />
      <MDBContainer>
        <PropertyVip properties={propertiesVip} />
        <PropertySection properties={properties} />
        <Features />
      </MDBContainer>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const { data: propertiesVip } = await api.get('/api/properties/vip')
  const { data } = await api.get('/api/properties?limit=6')
  const properties = data.data

  return {
    props: {
      propertiesVip,
      properties
    }
  }
}
