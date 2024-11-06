import React, { useState } from 'react';


const testimonials = [
  {
    id: 1,
    image: 'assets/img/abc1.jpg',
    name: 'Ayra Khan',
    title: 'I love teacher Sarah so much',
    description: 'Teacher Sarah makes Quran memorization so fun.',
  },
  {
    id: 2,
    image: 'assets/img/abc2.jpg',
    name: 'Ali Ahmed',
    title: 'A wonderful learning experience',
    description: 'Teacher Sarah’s classes are engaging and inspiring.',
  },
  {
    id: 3,
    image: 'assets/img/abc3.jpg',
    name: 'Zainab Noor',
    title: 'Highly recommended for beginners',
    description: 'Learning Quran has never been so enjoyable and interactive.',
  },
  {
    id: 4,
    image: 'assets/img/abc4.jpg',
    name: 'Ayaan Raza',
    title: 'Great support for memorization',
    description: 'I feel more confident in my memorization journey.',
  },
];

const TestimonialComponent = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  return (
    <>
      <style jsx>{`
    .testimonial-container {
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    color: white;
    border-radius: 15px;
    background-image: url('/images/about/ceo-bg.png');
    background-size: cover;
    background-position: center;
  }
        .testimonial-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 30px; 
          font-size:60px;
        }

        .testimonial-image {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid black;
        }

        .testimonial-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .testimonial-content {
          flex: 2;
        }

        .testimonial-content h3 {
          font-size: 2.0em;
          margin-bottom: 10px;
          color: #000; 
          color:red

        }

        .testimonial-content h4 {
          font-size: 1.2em;
          margin-bottom: 20px;
          color: black;
        }

        .testimonial-content p {
          font-size: 1.2em;
          line-height: 1.6;
          color: #000;

        }

        .thumbnail-row {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          gap: 10px;
        }

        .thumbnail {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
          border: 3px solid transparent;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumbnail:hover,
        .thumbnail.active {
          transform: scale(1.1);
          border-color: black;
        }
      `}</style>
<div>       
  
<div className='col-md-12' style={{backgroundColor:'#fff',paddingTop:'80px', paddingBottom:'50px',borderRadius:'0px 10px 0px 0px'}}>
<h2 className="text-center" style={{ color: '#E63946' ,fontWeight:'500' ,fontSize:'20px',marginLeft:'100px',}}>Learn From the Best</h2><br></br>
<p className="text-center" style={{fontSize:'43px',fontWeight:'200',marginLeft:'110px',}} >Our Teachers</p>
      <div className="testimonial-container ">
        
        <div className="testimonial-image-container">
          <div className="testimonial-image">
            <img src={activeTestimonial.image} alt={activeTestimonial.name} />
          </div>
        </div>
        <div className="testimonial-content">
          <h3>{activeTestimonial.name}</h3>
          <h4>{activeTestimonial.title}</h4>
          <p>{activeTestimonial.description}</p>
        </div>
      </div>

      <div className="thumbnail-row">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`thumbnail ${activeTestimonial.id === testimonial.id ? 'active' : ''}`}
            onClick={() => setActiveTestimonial(testimonial)}
          >
            <img src={testimonial.image} alt={testimonial.name} />
          </div>
        ))}
      </div>
      </div>
      </div>
    </>
  );
};

export default TestimonialComponent;
