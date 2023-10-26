import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form, InputGroup } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import "../styles/SearchPage.css";
import ActionBanner from "../images/1-action-banner.jpg";
import HorrorBanner from "../images/2-horror-banner.jpg";
import ComedyBanner from "../images/3-comedy-banner.jpg";
import AnimationBanner from "../images/4-animation-banner.jpg";
import { useCallback } from "react";


function SearchPage({ AddToCollection }) {
  // State to store the search query
  const [query, setQuery] = useState("");

  // State to store the index of the card that should show details
  const [showingCardIndex, setShowingCardIndex] = useState(-1);

  // State to store the fetched movie data
  const [moviesData, setMoviesData] = useState([]);

  // Function to fetch movie data from the API
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );
  
      if (response.ok) {
        // Parse the JSON response
        let dataCollection = await response.json();
        let destructuredData = dataCollection.map((list) => {
          return {
            id: list.show.id,
            name: list.show.name,
            language: list.show.language || "Unknown",
            genres: list.show.genres || "Unknown",
            rating: list.show.rating.average || "Not Rated",
            image: list.show.image.original,
          };
        });
        // Set the mapped data in the state
        setMoviesData(destructuredData);
        console.log("Data fetched successfully", destructuredData);
      } else {
        console.log("Failed to load data due to fetching related errors");
      }
    } catch (e) {
      console.log("Failed to fetch the data", e);
    }
  }, [query, setMoviesData]); // Include query and setMoviesData in the dependency array
  

  // Use the useEffect hook to fetch data when the query changes
  useEffect(() => {
    fetchData();
  }, [query, fetchData]);

  // Function to show details for a specific card
  function ShowDetails(index) {
    setShowingCardIndex(index);
  }

  // Function to hide details for a specific card
  function HideDetails() {
    setShowingCardIndex(-1);
  }

  // Function to add a movie to the collection
  function addMovieToCollection(movie) {
    AddToCollection(movie);
    alert("Card Successfully collected 🙂")
    console.log("Successfully added");
  }

  // Function to handle the search button click
  function handleSearch() {
    if (query) {
      fetchData();
    } else {
      // If the search input is empty, clear the results
      setMoviesData([]);
    }
  }

  return (
    <section>
      <Container className="search-banners">
        <Carousel>
          <Carousel.Item>
            <img src={ActionBanner} className="img-fluid" text="First slide" alt="action" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={HorrorBanner} className="img-fluid" text="Second slide" alt="horror" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={ComedyBanner} className="img-fluid" text="Third slide" alt="comdey" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={AnimationBanner} className="img-fluid" text="forth slide" alt="animation" />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className="search-container">
        <Col>
          <p className="h1 text-body-secondary heading-search-page">Search For Movies/Shows Below</p>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search for a movie"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={query}
              onChange={(evt) => setQuery(evt.target.value)}
            />
            <InputGroup.Text id="basic-addon2" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Container>
          <Row className="movie-container" style={{ margin: "0.5rem" }}>
            {moviesData.map((list, index) => (
              <Col
                key={list.id}
                xm={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className="movie-pack"
              >
                <div
                  className="movie-card-design"
                  style={{ width: "250px", margin: "0.5rem" }}
                >
                  <div className="movie-poster">
                    <img
                      src={list.image}
                      className="img-fluid"
                      style={{
                        borderRadius: "25px",
                        width: "250px",
                        height: "250px",
                      }}
                      alt="searchImage"
                    />
                  </div>
                  <div className="toggle-group-2">
                    {showingCardIndex === index ? (
                      <div>
                        <div className="movie-details">
                          <p className="movie-title">{list.name}</p>
                          <p className="movie-title">
                            {list.genres
                              ? `${list.genres[0]} ${list.genres[1] || ""}`
                              : "N/A"}
                          </p>
                          <p className="movie-title">{list.language}</p>
                          <p className="movie-title">{list.rating}</p>
                        </div>
                        <div className="container-fluid d-flex justify-content-center align-items-center">
                          <Button
                            className="smooth-button-close"
                            onClick={HideDetails}
                          >
                            Close
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="buttons-group">
                        <Button
                          className="smooth-button button-view"
                          onClick={() => ShowDetails(index)}
                        >
                          View
                        </Button>{" "}
                        <Button
                          variant="success"
                          className="button-collect"
                          onClick={() => addMovieToCollection(list)}
                        >
                          Collect
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default SearchPage;
