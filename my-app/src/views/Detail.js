import { Col, Container, Row, Spinner, Image, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, fetchCharacter } from '../store/action'
import { useEffect } from 'react'
export default function DetailProduct() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const character = useSelector(state => state.character.character)
  const Loading = useSelector(state => state.character.loading)
  const wishlist = useSelector(state => state.favorite.favorite)
  useEffect(() => dispatch(fetchCharacter(id)), [])
  let same = false
  wishlist.forEach(e => {
    if (e.id === id) {
      console.log('sama vuy');
      same = true
    }
  })
  const addToWishlist = () => {
    if(!same) {
      dispatch(addFavorite({ id, name:character.name, image: character.image}))
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'success add favorite',
        showConfirmButton: false,
        timer: 1000
      })
    }
  }
  if(Loading) {
    return (
      <Container className="mt-5" style={{paddingTop: "5rem"}}>
        <center>
          <Spinner animation="border" role="status" style={{ margin: 'auto' }}></Spinner>
        </center>
      </Container>
    )
  }
  return (
    <>
      <Container fluid style={{paddingTop: "5rem"}}>
        <Row>
          <Col className="position-relative">
            <Image src={character?.image} style={{ width: '500px' }} rounded />
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="tooltop-top">
                  add to favorite
              </Tooltip>
              }
            >
              <button className="position-absolute top-0 end-0 btn btn-lg" onClick={addToWishlist}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg></button>
            </OverlayTrigger>
          </Col>
          <Col>
            <Row>
              <Col md={12}>
                <center><h1>{character?.name}</h1></center>
                <ListGroup className="my-5">
                  <ListGroup.Item>Gender: {character?.gender}</ListGroup.Item>
                  <ListGroup.Item>Species: {character?.species}</ListGroup.Item>
                  <ListGroup.Item>Status: {character?.status}</ListGroup.Item>
                  <ListGroup.Item>Location: {character?.location?.name}</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}