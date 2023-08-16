import React from "react";
import { Container } from "react-bootstrap";
import videoFile from './about-cred.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Banner = () => {
  return (
    <section className="banner-section bg-dark ">
      <Container>
        <div>
          <div className="row mobile_row">
            <div className="col-md-6">
              <div>
                <video  controls autoPlay loop className="vide-size"data-aos="fade-up" data-aos-delay="200">
                  <source src={videoFile} type="video/mp4" />
                  {/* Add additional source elements for other video formats (e.g., WebM, Ogg) */}
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="col-md-6 display_al">
                <div className="ri-content">
              <h2 className="banner-heading txt-uppercase lg-text "  data-aos="fade-up" data-aos-delay="200">
                mint the <br /> lounge pass
              </h2>
              <div className="btn-box"  data-aos="fade-up" data-aos-delay="300">
                <button className="btn btn-theme bg-primary-aqua  txt-uppercase">mint nft</button>
                <button className="btn btn-theme bg-transparent-btn txt-uppercase ml-2">
                  use dapp <FontAwesomeIcon icon={faArrowRight}  className=""/>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
