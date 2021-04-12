import { Container, Row} from 'react-bootstrap';
import {useSelector} from 'react-redux'
import Card from '../components/CardList'

export default function Favorite() {
  const favorite = useSelector(state => state.favorite.favorite)
  return (
    <>
      <Container style={{paddingTop: "5rem"}}>
        <Row>
          {favorite.map(fav => 
          <Card 
            key={fav.id}
            name={fav.name}
            pic={fav.image}
            className="col"
          />
          )}
        </Row>
      </Container>
    </>
  )
}