import Card from '../components/CardList'
import { Spinner, Container, Image } from 'react-bootstrap'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters, setSearch, searchProduct } from '../store/action'
import { DebounceInput } from 'react-debounce-input';
import { useHistory } from 'react-router-dom'


export default function Home() {
  const dispatch = useDispatch()
  const history = useHistory()
  const chars = useSelector(state => state.character.characters)
  const term = useSelector(state => state.character.searchProduct)
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])
  useEffect(() => {
    if (term) {
      dispatch(searchProduct(term))
    } else {
      dispatch(fetchCharacters())
    }
  }, [term])
  const handleDetail = (id) => {
    history.push(`/character/${id}`)
  }

  const loading = useSelector(state => state.character.loading)
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-center">
          <center>
            <Image src={"https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e"} style={{ width: '300px' }} className="pt-5" rounded />
          </center>
          <div className="col-9">
            <h1 className="mt-5"> Character List: </h1>
          </div>
          <div className="col mt-5">
            <DebounceInput
              minLength={2}
              debounceTimeout={300}
              onChange={e => dispatch(setSearch(e.target.value))}
              className="form-control"
              placeholder="Search character.."
            />
          </div>
        </div>
        {loading ?
          <Spinner animation="border" role="status" style={{ marginLeft: '50%', marginTop: '15%' }}>
          </Spinner>
          : !chars ?
            <Container>
              <div>
                <center><h1>RESULT NOT FOUND :(</h1></center>
              </div>
            </Container>
            :
            <div className="container-fluid mt-5">
              <div className="row">
                {
                  chars?.map(char =>
                    <Card
                      handleShow={(id) => handleDetail(id)}
                      key={char.id}
                      name={char.name}
                      pic={char.image}
                      id={char.id}
                      className="col-3 "
                    />
                  )}
              </div>
            </div>}
      </div>
    </>
  )
}