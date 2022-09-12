import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return(
        <nav>
            <div className="container">
          <div className="footer-content py grid text-center">
            <div className="footer-item">
              <h3>hieucollection.com</h3>
              <p className="text">
                Thank you for shopping with us your order is on the way. Have a
                wonderful day!
              </p>
              <ul className="social-links flex">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100004517205574" className="flex"><FacebookIcon style={{fill:"black"}}/> </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/hieucollection___/" className="flex"><InstagramIcon style={{fill:"black"}}/></a>
                </li>
                <li>
                  <a href="https://twitter.com/MNgcHiu2" className="flex"><TwitterIcon style={{fill:"black"}}/></a>
                </li>
                <li>
                  <a href="https://github.com/hieunotorious" className="flex"><GitHubIcon style={{fill:"black"}}/></a>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h3>Contact Us</h3>
              <p className="text">Address: 102 Nguyen Trai, BMT, VietNam</p>
              <p className="text">Phone: (+84) 912590467</p>
              <p className="text">Email: hieumn2001@gmail.com</p>
            </div>

            <div className="footer-item">
              <h3>Store at</h3>
              <ul>
                <li className="text"><a href="#">Amazon</a></li>
                <li className="text"><a href="#">Walmart</a></li>
                <li className="text"><a href="#">Target</a></li>
              </ul>
            </div>

            <div className="footer-item">
              <h3>Our Profile</h3>
              <ul>
                <li className="text">
                  <a href="https://www.instagram.com/hieucollection___/">instagram: hieucollection__</a>
                </li>
                <li className="text">
                  <a href="#">Email: hieucollection31@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-end bg-dark">
          <div className="container grid">
            <p className="text text-white text-center">
              &copy; Copyright 2022. All Right Reserved. Designed and Developed
              by Ma Ngoc Hieu
            </p>
            <div className="flex payment">
              <img src="images/pay_3.png" />
              <img src="images/pay_4.png" />
              <img src="images/pay_5.png" />
            </div>
          </div>
        </div>
     </nav>
    )
}

export default Footer;