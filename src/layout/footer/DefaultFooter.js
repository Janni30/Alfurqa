import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1d1d1d', color: '#cccccc', padding: '40px 0', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Explore Section */}
        <div>
          <h3 style={{ color: '#e63946' }}>EXPLORE</h3><br />
          <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left' }}>
            {['About', 'Blog', 'Teachers', 'Career', 'Testimonials', 'Contact Us', 'FAQs'].map((item, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                <Link href={`/${item.toLowerCase().replace(' ', '')}`} style={{ color: '#cccccc', textDecoration: 'none' }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Courses Section */}
        <div>
          <h3 style={{ color: '#e63946' }}>COURSES</h3><br />
          <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left' }}>
            {['Tajweed Course', 'Online Quran','Arabic'].map((course, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                <Link href={`/${course.toLowerCase().replace(' ', '')}`} style={{ color: '#cccccc', textDecoration: 'none' }}>
                  {course}
                </Link>
              </li>
            ))}
          </ul>
        </div>

 {/* Contact Us Section */}
      <div>
          <h3 style={{ color: '#e63946' }}>CONTACT US</h3><br/>
          <ul style={{ listStyleType: 'none', paddingLeft: '35px', textAlign: 'left', color: '#cccccc' }}>
            {[
              { name: 'USA +1 855 477 2100', href: 'tel:+1 85 5442 3380' },
              { name: 'UK +44 20 3287 5211', href: 'tel: +44 20 4577 1227' },
              // { name: 'AU +61 2 8005 1435', href: 'tel:+61280051435' },
              { name: 'contact@alfurqan.academy', href: 'mailto:contact@alfurqan.academy' }
            ].map((contact, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                <a href={contact.href} style={{ color: '#cccccc', textDecoration: 'none' }}>
                  {contact.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 style={{ color: '#e63946' }}>FOLLOW US</h3><br />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', fontSize: '1.5em' }}>
            {['facebook', 'instagram', 'whatsapp', 'youtube'].map((platform, index) => (
              <a key={index} href={`https://www.${platform}.com`} target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc' }}>
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Logos and Ratings */}
      <div style={{color: '#cccccc', marginBottom: '10px' }}>
        <div style={{marginBottom:'-50px'}}>
          {/* <img src="/assets/img/logo-white.png" alt="Accreditation Logo" style={{ width: '150px',height:'70px',width:'60px' }} /> */}
          {/* <img src="/assets/images/privacy-pledge.png" alt="Privacy Pledge" style={{ width: '80px', margin: '10px' }} /> */}
        </div>
        {/* <div style={{ marginTop: '20px' }}>
          <p>Trustpilot</p>
          <img src="/assets/images/trustpilot-stars.png" alt="Trustpilot Rating" style={{ width: '100px' }} />
          <p>TrustScore 4.8 | 307 reviews</p>
        </div> */}
      </div>

      {/* App and Newsletter Section */}
      <div style={{ marginTop: '20px', color: '#cccccc' }}>
        <h3 style={{color:'white'}}>LISTEN TO OUR PODCAST</h3>
        <button style={{ backgroundColor: '#333', color: '#cccccc', padding: '10px 20px', border: 'none', borderRadius: '5px', margin: '10px' }}>
          Listen on your Favorite Platform
        </button>

        <h3 style={{ marginTop: '20px',color:'white' }}>Download Our App</h3>
        <div>
          <img src="/assets/img/goog.jpg" alt="App Store" style={{ width: '120px', margin: '10px' }} />
          <img src="/assets/img/app.jpg" alt="Google Play" style={{ width: '120px', margin: '10px' }} />
        </div>

        <div style={{ marginTop: '20px' }}>
          <button style={{ backgroundColor: '#333', color: '#cccccc', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
          <p style={{color:'white'}}>  <i className="bi bi-whatsapp" style={{ fontSize: '1.5em', verticalAlign: 'middle' }} /> Chat with us on Whatsapp </p>

          </button>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h3 style={{color:'white',margin:'20px'}}>JOIN OUR NEWSLETTER</h3>
          <input type="email" placeholder="Your email address" style={{ padding: '8px', width: '200px', borderRadius: '5px', marginRight: '10px', border: '1px solid #cccccc' }} />
          <button style={{ backgroundColor: '#333', color: '#cccccc', padding: '8px 20px', border: 'none', borderRadius: '5px' }}>Subscribe</button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div style={{ marginTop: '40px', color: '#777', fontSize: '0.9em' }}>
        <p style={{color:'white'}}>© AlFurqanAcademy Network Inc. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
