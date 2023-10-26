import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/Collection.css";

function Collections({ collections, DeleteItem }) {
  function deleteFunction(id) {
    DeleteItem(id);
    console.log("successfully deleted");
  }

  return (
    <section style={{ marginTop: "25px" }} className="collection-section">
      <Container className="collection-container-section">
      <h1 className="display-6 text-center text-body-secondary collection-header" style={{fontWeight: "bold"}}>COLLECTION BOX</h1>
        {collections.map((list) => (
          <Col key={list.id}  lg={6} className="collection-card" style={{margin: "0.5rem"}}>
            <div key={list.id} className="collected-image-box">
              <img
                src={list.image}
                alt="collectionsCards"
                className="collection-image"
                style={{
                  width: "80px",
                  borderRadius: "25%",
                  marginLeft: "25px",
                  boxShadow:
                    "3px 3px 6px 0px inset rgb(204, 219, 232), -3px -3px 6px 1px inset rgba(255, 255, 255, 0.5)",
                }}
              />
            </div>
            <div className="collection-group">
              <p className="collection-item">Title: {list.name.length > 25 ? `${list.name.substring(0, 20)}...` : list.name}</p>
              <p className="collection-item">Genre: {list.genres?  list.genres[0] : "null" }</p>
              <p className="collection-item">Language: {list.language ? list.language : "not found" }</p>
              <p className="collection-item">Rating: {list.rating ? list.rating : "null"}</p>
            </div>
            <div className="delete-bin">
              <FontAwesomeIcon
                onClick={() => deleteFunction(list.id)}
                icon={faTrash}
                beat
                className="trash-bin"
              />
              <p className="delete-word">delete</p>
            </div>
          </Col>
        ))}
      </Container>
    </section>
  );
}

export default Collections;
