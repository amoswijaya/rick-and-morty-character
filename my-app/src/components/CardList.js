import { Button } from "react-bootstrap";
export default function Card({
  pic,
  name,
  id,
  handleShow
}) {
  function getId() {
    handleShow(id)
  }
  return (
    <>
    <div className="card mx-4 my-4 m-auto">
        <img src={pic} className="card-img-top" alt={pic} />
      <div className="card-body">
          <div className='row'>
            <div className="col-12">
              <h5 className="card-title">{name}</h5>
            </div>
            <div className=" col my-3 mx-auto">
              {handleShow?<Button variant="primary" onClick={getId} >
                see Detail
              </Button>:null
              }
              
          </div>
        </div>
        </div>
      </div>
    </>
  )
}