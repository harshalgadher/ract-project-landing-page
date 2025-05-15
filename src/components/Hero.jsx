import React from 'react' 

const Hero = (props) => {
  return (
    <div className='container'>
        <div className='row p-2 justify-content-between'>
            <div className='col-md-5 col-12 p-3 d-flex  flex-column justify-content-center align-items-center'>
                <h1 className='display-4 fw-bold'>{props.title}</h1>
                <p>{props.dis}</p>
                <button className='startBtn'>Start Designing →</button>
            </div>
            <div className='col-md-5 col-12 p-3'>
                <div>
                    <img src="https://avada.com/wp-content/uploads/2024/10/avada-homepage-hero-cta2.jpg" alt="banner-img"  className='img-fluid'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero ;