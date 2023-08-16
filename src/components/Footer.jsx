import React from 'react'
import { Container } from 'react-bootstrap'
const Footer = () => {
  return (
    <section>
    <footer className='bg-dark py-5'>
        <Container>
        <div className="row">
            <div className="col-md-3" data-aos="fade-right" data-aos-delay="100">
                <h3 className='txt-uppercase mb-3 position-relative footer-menu-heading'>LYNARO <span className='half-border '></span></h3>
                <p className='text-white'>A unified token enabling <br /> various ventures <br /> and explorations.</p>
            </div>
            <div className="col-md-3" data-aos="fade-right" data-aos-delay="200">
                <h3 className='txt-uppercase mb-3 position-relative footer-menu-heading'>Navigation <span className='half-border '></span></h3>
                <ul className='footer-menu'>
                    <li><a href="#" className='footer-nav-links'>Home</a></li>
                    <li><a href="#" className='footer-nav-links'>Lynaro</a></li>
                    <li><a href="#" className='footer-nav-links'>Token</a></li>
                    <li><a href="#" className='footer-nav-links'>Learn</a></li>
                </ul>
            </div>
            <div className="col-md-3" data-aos="fade-right" data-aos-delay="300">
                <h3 className='txt-uppercase mb-3 position-relative footer-menu-heading'>general <span className='half-border '></span></h3>
                <ul className='footer-menu'>
                    <li><a href="#" className='footer-nav-links'>FAQ</a></li>
                    <li><a href="#" className='footer-nav-links'>Privacy Policy</a></li>
                    <li><a href="#" className='footer-nav-links'>Terms of Use</a></li>
                    <li><a href="#" className='footer-nav-links'>Team</a></li>
                </ul>
            </div>
            <div className="col-md-3" data-aos="fade-right" data-aos-delay="400">
                <h2 className='txt-uppercase mb-3 position-relative footer-menu-heading'>socials <span className='half-border '></span></h2>
                <ul className='footer-menu'>
                    <li><a href="#" className='footer-nav-links'>Twitter</a></li>
                    <li><a href="#" className='footer-nav-links'>Telegram</a></li>
                    <li><a href="#" className='footer-nav-links'>LinkedIn</a></li>
                    <li><a href="#" className='footer-nav-links'>Medium</a></li>
                    <li><a href="#" className='footer-nav-links'>Youtube</a></li>
                </ul>
            </div>
        </div>
        </Container>
    </footer>
    <div className="mini-footer text-center m-0"> <p className='m-0 p-1 fw-bold'>&copy; 2023 Lynaro. All rights reserved.</p> </div>
    </section>
  )
}

export default Footer