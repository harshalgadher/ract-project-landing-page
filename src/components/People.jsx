import React from 'react'

export const People = () => {
  return (
    <div className="container-fluid">
      <div className="row gy-3 g-0 mb-5">
        <div className="col-md-6 col-12">
          <div className="bannerIMG2"></div>
        </div>
        <div className="col-md-6 col-12 px-1">
          <div className="p-96">
            <p className="h2">
              “We choose to specialise in Avada because it is both functional and practical,
              and our clients simply love it! It has stood the test of time and continues
              to evolve – an excellent solution for our talented design team, who continue
              to push the boundaries.”
            </p>
            <div>
              <img className="line-W img-fluid" src="https://avada.com/wp-content/uploads/2021/08/separator-2.png" alt="line" />
            </div>
            <div className="d-flex align-items-center">
              <img className="mx-3" src="https://avada.com/wp-content/uploads/2021/08/squarebird-logo.png" alt="img" />
              <h4>Squarebird</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
