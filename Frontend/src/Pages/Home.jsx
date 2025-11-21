import React from 'react'
import { Leaf, TreePine, Recycle, Globe,ArrowRight } from 'lucide-react'
import "../css/home.css"  // Import CSS
import { useNavigate } from 'react-router-dom'
import teagarden from '../../public/pictures/tea_garden.jpg'
import back from "../../public/image/home_back.jpeg";
import boatlake from "../../public/image/home_boat_lake.avif";
import botanical from "../../public/image/home-botanical-garden.jpg";



export default function Home() {
    const navigate=useNavigate();
   
  const features = [
    {
      icon: <Leaf className="icon" />,
      title: 'Nature Tours',
      description: 'Explore lush tea gardens, pristine lakes, and scenic viewpoints'
    },
    {
      icon: <TreePine className="icon" />,
      title: 'Local Culture',
      description: 'Experience authentic Tamil and colonial heritage of Ooty'
    },
    {
      icon: <Recycle className="icon" />,
       title: 'Expert Guides',
      description: 'Local guides with deep knowledge of Ooty\'s history and nature'
    },
    {
      icon: <Globe className="icon" />,
      title: 'Global Impact',
      description: 'Contributing to conservation efforts worldwide'
    }
  ]
  const destination=[
    {
        title:'Tea Gardens',
        description: 'Walk through sprawling tea plantations and learn about tea processing',
        image:teagarden
    },
    {
        title:'Ooty Lake',
        description: 'Enjoy boating and scenic walks around the beautiful artificial lake',
        image:boatlake
    },
    {
        title:'Botanical Gardens',
        description: 'Explore rare plants and flowers in the Government Botanical Garden',
        image:botanical
    }
  ];
  const feedbacks=[
    {
        name:'Yogesh',
        feedback:'Amazing experience in Ooty! The tea gardens were breathtaking and our guide was fantastic."'
    },
    {
        name:'Yokith',
        feedback:'"Best hill station tour I have ever been on. Highly recommend their botanical garden tours."'
    },
    {
        name:'Vishal',
        feedback:'"Perfect blend of nature and culture. The lake boating was so peaceful. Will visit again!"'
    }
  ]

  return (
    <div className="home">
    
      <section className="hero">
       
        <div
            className="hero-bg"
            style={{
                backgroundImage:`url(${back})`
            }}
        ></div>

   
      <div className="hero-overlay"></div>

 
      <div className="hero-content">
        <h1 className="hero-title">
          Discover Ooty
          <span className="hero-highlight">Queen of Hills</span>
        </h1>
        <p className="hero-subtitle">
          Experience the breathtaking beauty of India's most beloved hill station
        </p>
            <div className="hero-buttons">
                <a href="/activity" className="btn-primary">
                    Discover Adventures <ArrowRight className="arrow-icon" />
                </a>
                <a href="/contact" className="btn-secondary">
                    plan your Trip
                </a>
            </div>
      </div>
    </section>
          

      <section className="features">
        <h2 className="features-title">Why Choose Ooty Tours?</h2>
        <p className='features-subtitle'>We believe in responsible tourism that enriches both travelers and destinations</p>
        <div className="features-grid">
          {features.map((f, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-description">{f.description}</p>
            </div>
          ))}
        </div>


      </section>
      <section className='destination'>
            <h2 className='destination-title'>Popular Attractions</h2>
            <p className='destination-subtitle'>View our Popular Eco-Friendly Destinations</p>
             <div className="destination-grid">
                {destination.map((f, index) => (
                    <div key={index} className="destination-card">
                        <img src={f.image} alt={f.title} className="destination-image" />
                        <h3>{f.title}</h3>
                        <p>{f.description}</p>
                        <button className='destination-button' onClick={()=>{navigate('/activity')}}>Learn More
                            <ArrowRight className="destination-icon" />
                        </button>
                       
                    </div>
                ))}
            </div>
        </section>

        <section className='feedback'>
            <h2 className='destination-title'>What our Customer Say</h2>
            <p className='destination-subtitle'>Real experiences from our Ooty adventurers</p>
            <div className='feedback-grid'>
                {feedbacks.map((f, index)=>(
                    <div key={index} className='feedback-card'>
                        <p>{f.feedback}</p>
                        <div className="feedback-card-footer">
                            <h3 className="feedback-card-name">-{f.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        {/* <WhatsAppButton/> */}

    </div>
  )
}
