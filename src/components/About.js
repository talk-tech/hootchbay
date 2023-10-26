import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import "../styles/About.css";
function About() {
  return (
    <section>
      <Container className="about-container">
        <h1 className="display-6 logo-brand text-center">
          <span className="brand-name">HOOTCH</span>{" "}
          <span className="next-brand-class" style={{ fontWeight: "bold" }}>
            BAY
          </span>
        </h1>
          <Col className="about-text-box" lg ={6} >
            <h1 className="display-6 logo-brand text-center">
              About Hootch Bay Movie App
            </h1>
            <p className="para">
              Welcome to Hootch Bay Movie App, your go-to destination for
              discovering and collecting information about your favorite movies
              and TV shows. Our app provides a user-friendly interface that
              allows you to search for movies and shows based on your interests.
              Whether you're a fan of action, horror, comedy, or animation,
              we've got you covered.
            </p>
          </Col>
          <Col lg ={6}>
            <h1 className="display-6 logo-brand text-center">Key Features:</h1>
            <ListGroup>
              <ListGroup.Item>
                Search for Movies and Shows: Use our search functionality to
                find movies and TV shows by entering keywords related to their
                titles, genres, or any other relevant information.
              </ListGroup.Item>
              <ListGroup.Item>
                Detailed Information: Get access to comprehensive details about
                each movie or show, including its title, genres, language, and
                rating.
              </ListGroup.Item>
              <ListGroup.Item>
                Interactive Carousel: Explore our visually appealing carousel
                that showcases banners for different genres like action, horror,
                comedy, and animation.
              </ListGroup.Item>
              <ListGroup.Item>
                Collect Your Favorites: Have a movie or show you love? Add it to
                your collection with just a click.
              </ListGroup.Item>
              <ListGroup.Item>
                View and Close Details: Dive into the details of each movie or
                show with the "View" button, and easily close the details when
                you're done.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        <Col lg={6} className="container-fluid d-flex justify-content-center align-items-center last-text">
          <p>
            Our app is designed to enhance your movie and TV show discovery
            experience. We hope you enjoy using Hootch Bay Movie App as much as
            we enjoyed creating it. Happy searching and collecting!
          </p>
        </Col>
      </Container>
    </section>
    
  );
}

export default About;
