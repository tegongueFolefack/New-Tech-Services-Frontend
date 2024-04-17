import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Header1 = (props) => {
  return (
    <div className="header1" style={{ display: 'flex',justifyContent:'space-between' }}>
      <div className="contact" style={{ display: 'flex' }}>
        <div className="location1">
          <LocationOnIcon fontSize="large" />
          <a href="#">AKWA rue Foch</a>
        </div>
        <div className="location2">
          <ContactPhoneIcon fontSize="large" />
          <a href="#">+237 694 090 000 </a>
        </div>
        <div className="location3">
          <EmailIcon fontSize="large" />
          <a href="#">universelectrique@yahoo.com </a>
        </div>
      </div>

      <div className="lien" style={{ display: 'flex' }}>
        <a href="#" style={{ marginRight: '30px' }}>Actualite</a>
        <Link to="/boutique">Boutique</Link>
      </div>

      <div className="icone" style={{ display: 'flex' }}>
        <div className="icon">
          <FacebookIcon fontSize="large" />
        </div>
        <div className="icon">
          <WhatsAppIcon fontSize="large" />
        </div>
        <div className="icon">
          <YouTubeIcon fontSize="large" />
        </div>
        <div className="icon">
          <TwitterIcon fontSize="large" />
        </div>
      </div>

    </div>
  );
}
