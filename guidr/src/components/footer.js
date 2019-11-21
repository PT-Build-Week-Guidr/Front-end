import React from "react";
import {Link} from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

//import images here please
import logo from '../images/logo.png';
import fb from '../images/facebook.png';
import tw from '../images/twitter.png';
import pin from '../images/pinterest.png';
import inst from '../images/instagram.png';
import gapp from '../images/play.store.png';
import app from '../images/app.store.png';






const Footer = (props) =>{

  return(

    <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
        <div style={{ backgroundColor: "#00A693" }}>
          <MDBContainer>
            <MDBRow className="py-2 d-flex align-items-center">
              <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0 white-text">
                  Get connected with us
                </h6>
              </MDBCol>
              <MDBCol md="6" lg="7" className="text-center text-md-right">
                <a className="fb-ic ml-0" href="http://facebook.com">
                  <img src={fb} alt='facebook link' className='social-app' />
                </a>{' '}
                <a href className="tw-ic" href="http://twitter.com">
                  <img src={tw} alt='twitter link' className='social-app' />
                </a>{' '}
                <a className="gplus-ic" href="http://pinterest.com">
                  <img src={pin} alt='pinterest link' className='social-app' />
                </a>{' '}
                <a className="ins-ic" href="http://instagram.com">
                  <img src={inst} alt='instagram link' className='social-app' />
                </a>{' '}

                <a className="ins-ic" href="http://play.google.com">
                  <img src={gapp} alt='play store link' className='social-app2' />
                </a>{' '}
                <a className="ins-ic" href="http://apple.com">
                  <img src={app} alt='apple store link' className='social-app2' />
                </a>{' '}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <MDBContainer className="mt-2 mb-1 text-center text-md-left">
          <MDBRow className="mt-1">
            <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">

              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
              <p>
                <Link to='/'><img src={logo} alt="guider logo" className="footer-logo" /></Link>
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">

            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">

            </MDBCol>
            <MDBCol md="6" lg="4" xl="2" className="mb-4 pt-5 dark-grey-text text-right">


                <Link to='/'>Home</Link>{' | '}

                <Link to='/profile/'>Profile</Link>{' | '}

                <Link to='/trips/'>Trips</Link>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    );

};

export default Footer;
