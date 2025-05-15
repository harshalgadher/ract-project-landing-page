import React from 'react'

const perform = [
    { 
        headign: "World-Class Support",
        img: "	https://avada.com/wp-content/uploads/2021/06/world-class-support.png" ,
        dis : "We build long-term professional relationships with our customers that you can rely on & trust."
    },
    { 
        headign: "Documentation & Tutorials",
        img: "https://avada.com/wp-content/uploads/2021/06/documentation.png" ,
        dis : "Over 550 help files & 200 tutorial videos will make building websites with Avada even easier."
    },
    { 
        headign: "100% Built In-House",
        img: "https://avada.com/wp-content/uploads/2021/06/built-in-house-200x94.png" ,
        dis : "Avada is not reliant on 3rd party tools to deliver a reliable & stable website building experience."
    },
    { 
        headign: "Free Lifetime Updates",
        img: "	https://avada.com/wp-content/uploads/2021/06/free-updates-200x151.png" ,
        dis : "Your website will receive free & regular updates, compatible with industry standards & trends, for life."
    }
]


export const Performance = () => {
  return (
    <div className="my-5 mainBGW">
      <div className="container">
        <div className="text-center mt-5">
          <h2 className="display-5 fw-bolder">
            1,018,299 Website Owners <br /> Trust Avada
          </h2>
          <p className="h5 text-secondary">
            The #1 selling Website Builder on Themeforest for 12+ years.
          </p>

          <div className="row mt-5 gy-3">
            {perform.map((item, index) => (
              <div className="col-md-6 col-lg-3 mb-5 d-flex align-items-stretch" key={index}>
                <div className="text-center w-100 px-3">
                  <div className="mb-4">
                    <img src={item.img} alt={`img-${index}`} className="img-fluid" width={100} />
                  </div>
                  <h5 className=" mt-4">{item.headign}</h5>
                  <p className="h6 text-secondary">{item.dis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

