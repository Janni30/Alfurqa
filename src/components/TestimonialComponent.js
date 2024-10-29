import React, { useState } from 'react';
import Image from 'next/image';

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
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px;
          background-color: #333;
          color: white;
          border-radius: 15px;
        }

        .testimonial-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 30px;
        }

        .testimonial-image {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid white;
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
          font-size: 1.8em;
          margin-bottom: 10px;
        }

        .testimonial-content h4 {
          font-size: 1.2em;
          margin-bottom: 20px;
          color: #ccc;
        }

        .testimonial-content p {
          font-size: 1em;
          line-height: 1.6;
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
          border-color: white;
        }
      `}</style>
       <div className='col-md-12' style={{backgroundColor:'#0A0A1D',paddingTop:'80px', paddingBottom:'50px',borderRadius:'0px 150px 0px 10px'}}>
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
    </>
  );
};

export default TestimonialComponent;
