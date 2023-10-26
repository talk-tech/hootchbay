import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "../styles/Home.css";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";

function Home({AddToCollection}) {
  // Define state variables to store data and control visibility
  const [sonic, setSonic] = useState({});
  const [mario, setMario] = useState([]);
  const [buzz, setBuzz] = useState([]);
  const [monsters, setMonsters] = useState([]);
  const [isSonicViewVisible, setIsSonicViewVisible] = useState(false);
  const [isMarioVisible, setIsMarioViewVisible] = useState(false);
  const [isBuzzViewVisible, setIsBuzzViewVisible] = useState(false);
  const [isMonsterViewVisible, setIsMonsterViewVisible] = useState(false);

  // Functions to show and hide card details
  function showSonicView() {
    setIsSonicViewVisible(true);
  }

  function hideSonicView() {
    setIsSonicViewVisible(false);
  }

  function showMarioView() {
    setIsMarioViewVisible(true);
  }

  function hideMarioView() {
    setIsMarioViewVisible(false);
  }

  function showMonsterView() {
    setIsMonsterViewVisible(true);
  }

  function hideMonsterView() {
    setIsMonsterViewVisible(false);
  }

  // Function to show card details for Buzz
  const showBuzzView = () => {
    setIsBuzzViewVisible(true);
  };

  // Function to hide card details for Buzz
  const hideBuzzView = () => {
    setIsBuzzViewVisible(false);
  };

  // Asynchronous functions to fetch data from API
  async function FetchSonic() {
    try {
      let response = await fetch("https://api.tvmaze.com/singlesearch/shows?q=sonic");
      if (response.ok) {
        let dataCollection = await response.json();
        let distructuredData = {
          id: dataCollection.id,
          name: dataCollection.name,
          language: dataCollection.language,
          genres: dataCollection.genres,
          rating: dataCollection.rating.average,
          image: dataCollection.image.original,
        };

        console.log("fetch success", distructuredData);
        setSonic(distructuredData);
      }
    } catch (e) {
      console.log("failed to fetch the data", e);
    }
  }

  async function FetchMario() {
    try {
      let response = await fetch("https://api.tvmaze.com/shows/37350");
      if (response.ok) {
        let dataCollection = await response.json();
        let distructuredData = {
          id: dataCollection.id,
          name: dataCollection.name,
          language: dataCollection.language,
          genres: dataCollection.genres,
          rating: dataCollection.rating.average,
          image: dataCollection.image.original,
        };

        console.log("fetch success", distructuredData);
        setMario(distructuredData);
      }
    } catch (e) {
      console.log("failed to fetch the data", e);
    }
  }

  async function FetchBuzz() {
    try {
      let response = await fetch("https://api.tvmaze.com/shows/10441");
      if (response.ok) {
        let dataCollection = await response.json();
        let distructuredData = {
          id: dataCollection.id,
          name: dataCollection.name,
          language: dataCollection.language,
          genres: dataCollection.genres,
          rating: dataCollection.rating.average,
          image: dataCollection.image.original,
        };

        console.log("fetch success", distructuredData);
        setBuzz(distructuredData);
      }
    } catch (e) {
      console.log("failed to fetch the data", e);
    }
  }

  async function FetchMonsters() {
    try {
      let response = await fetch("https://api.tvmaze.com/shows/28757");
      if (response.ok) {
        let dataCollection = await response.json();
        let distructuredData = {
          id: dataCollection.id,
          name: dataCollection.name,
          language: dataCollection.language,
          genres: dataCollection.genres,
          rating: dataCollection.rating.average,
          image: dataCollection.image.original,
        };

        console.log("fetch success", distructuredData);
        setMonsters(distructuredData);
      }
    } catch (e) {
      console.log("failed to fetch the data", e);
    }
  }

  // Fetch data for Sonic when the component mounts
  useEffect(() => {
    FetchSonic();
  }, []);

  // Fetch data for Mario when the component mounts
  useEffect(() => {
    FetchMario();
  }, []);

  // Fetch data for Buzz when the component mounts
  useEffect(() => {
    FetchBuzz();
  }, []);

  // Fetch data for Monsters when the component mounts
  useEffect(() => {
    FetchMonsters();
  }, []);
 
  function AddHomeCard(item) {
    AddToCollection(item)
    alert("Card Successfully collected 🙂")
  }

  return (
    <section>
      <Container className="home-heading-container">
        <Col className="home-heading-box">
          <p className="h3 home-heading">
            Welcome To <span className="hootch">Hootch</span> Bay
          </p>
          <p className="h5 home-semi-heading">
            Start Collecting Movie Cards Below Free...
          </p>
        </Col>
      </Container>
      <Container className="card-holder-box-mother">
        <p className="h4 rated-semi-heading text-center star">
          Most Rated Cards 
        </p>
        <Row className="card-holder-box">
          {/* Sonic Card */}
          <Col
            key={sonic.id}
            style={{ width: "250px" }}
            xs={4}
            sm={12}
            md={6}
            lg={3}
            xl={4}
            className="card-card"
          >
            <div
              className="movie-card-design"
              style={{ width: "250px", margin: "0.5rem" }}
            >
              <div className="movie-poster">
                <img
                  src={sonic.image}
                  className="img-fluid image-size"
                  style={{ borderRadius: "25px" }}
                  alt={sonic.name}
                />
              </div>
              <div className="toggle-group">
                {isSonicViewVisible ? (
                  <div className="movie-details">
                    <p className="movie-title">{sonic.name}</p>
                    <p className="movie-title">
                      {sonic.genres
                        ? `${sonic.genres[0]} ${sonic.genres[1] || ""}`
                        : "N/A"}
                    </p>
                    <p className="movie-title">Language: {sonic.language}</p>
                    <p className="movie-title">Rating: {sonic.rating}</p>
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                      {" "}
                      <Button
                        className="smooth-button-close"
                        onClick={hideSonicView}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="buttons-group">
                    <Button
                      className="smooth-button button-view"
                      onClick={showSonicView}
                    >
                      View
                    </Button>
                    <Button className="button-collect" onClick={() => AddHomeCard(sonic)}>Collect</Button>
                  </div>
                )}
              </div>
            </div>
          </Col>

          {/* Mario Card */}
          <Col
            key={mario.id}
            style={{ width: "250px" }}
            xs={4}
            sm={12}
            md={6}
            lg={3}
            xl={4}
            className="card-card"
          >
            <div
              className="movie-card-design"
              style={{ width: "250px", margin: "0.5rem" }}
            >
              <div className="movie-poster">
                <img
                  src={mario.image}
                  className="img-fluid image-size"
                  style={{ borderRadius: "25px" }}
                  alt={mario.name}
                />
              </div>
              <div className="toggle-group">
                {isMarioVisible ? (
                  <div className="movie-details">
                    <p className="movie-title">{mario.name}</p>
                    <p className="movie-title">
                      {mario.genres
                        ? `${mario.genres[0]} ${mario.genres[1] || ""}`
                        : "N/A"}
                    </p>
                    <p className="movie-title">Language: {mario.language}</p>
                    <p className="movie-title">Rating: {mario.rating}</p>
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                      <Button
                        className="smooth-button-close"
                        onClick={hideMarioView}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="buttons-group">
                    <Button
                      className="smooth-button button-view"
                      onClick={showMarioView}
                    >
                      View
                    </Button>
                    <Button className="button-collect"  onClick={() => AddHomeCard(mario)}>Collect</Button>
                  </div>
                )}
              </div>
            </div>
          </Col>

          {/* Buzz Card */}
          <Col
            key={buzz.id}
            style={{ width: "250px" }}
            xs={4}
            sm={12}
            md={6}
            lg={3}
            xl={4}
            className="card-card"
          >
            <div
              className="movie-card-design"
              style={{ width: "250px", margin: "0.5rem" }}
            >
              <div className="movie-poster">
                <img
                  src={buzz.image}
                  className="img-fluid image-size"
                  style={{ borderRadius: "25px" }}
                  alt={buzz.name}
                />
              </div>
              <div className="toggle-group">
                {isBuzzViewVisible ? (
                  <div className="movie-details">
                    <p className="movie-title">{buzz.name}</p>
                    <p className="movie-title">
                      {buzz.genres
                        ? `${buzz.genres[0]} ${buzz.genres[1] || ""}`
                        : "N/A"}
                    </p>
                    <p className="movie-title">Language: {buzz.language}</p>
                    <p className="movie-title">Rating: {buzz.rating}</p>
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                      <Button
                        className="smooth-button-close"
                        onClick={hideBuzzView}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="buttons-group">
                    <Button
                      className="smooth-button button-view"
                      onClick={showBuzzView}
                    >
                      View
                    </Button>
                    <Button className="button-collect"  onClick={() => AddHomeCard(buzz)}>Collect</Button>
                  </div>
                )}
              </div>
            </div>
          </Col>

          {/* Monsters Card */}
          <Col
            key={monsters.id}
            style={{ width: "250px" }}
            xs={4}
            sm={12}
            md={6}
            lg={3}
            xl={4}
            className="card-card"
          >
            <div
              className="movie-card-design"
              style={{ width: "250px", margin: "0.5rem" }}
            >
              <div className="movie-poster">
                <img
                  src={monsters.image}
                  className="img-fluid image-size"
                  style={{ borderRadius: "25px" }}
                  alt={monsters.name}
                />
              </div>
              <div className="toggle-group">
                {isMonsterViewVisible ? (
                  <div className="movie-details">
                    <p className="movie-title">{monsters.name}</p>
                    <p className="movie-title">
                      {monsters.genres
                        ? `${monsters.genres[0]} ${monsters.genres[1] || ""}`
                        : "N/A"}
                    </p>
                    <p className="movie-title">Language: {monsters.language}</p>
                    <p className="movie-title">Rating: {monsters.rating}</p>
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                      <Button
                        className="smooth-button-close"
                        onClick={hideMonsterView}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="buttons-group">
                    <Button
                      className="smooth-button button-view"
                      onClick={showMonsterView}
                    >
                      View
                    </Button>
                    <Button className="button-collect"  onClick={() => AddHomeCard(monsters)}>Collect</Button>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div class="container-fluid d-flex justify-content-center align-items-center">
        <Button variant="link" href="/search">Find More</Button>
      </div>
    </section>
  );
}

export default Home;
