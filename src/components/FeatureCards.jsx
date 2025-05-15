import React from 'react'

const CardData = [
  {
    bgClass: "yellow-card",
    title: "Launch Your First Website silently",
    sub: "For beginners",
    img: "https://avada.com/wp-content/uploads/2021/06/for-beginners@2x-200x231.jpg",
    buttons: ["Visual builder", "Documentation", "Support", "Prebuilt Websites"]
  },
  {
    bgClass: "green-card",
    title: "Generate Leads And Conversions",
    sub: "For Marketers",
    img: "https://avada.com/wp-content/uploads/2021/06/for-marketers@2x-200x200.jpg",
    buttons: ["Design", "SEO", "Shop Builder", "Form Builder"],
  },
  {
    bgClass: "blue-card",
    title: "Take Your Projects To The Next Level",
    sub: "For Professionals",
    img: "https://avada.com/wp-content/uploads/2021/06/for-pro-2@2x-400x382.jpg",
    buttons: ["All-In-One", "Patcher", "WCAG", "Dynamic Data"],
  },
];

export const FeatureCards = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {CardData.map((card, index) => (
          <div className="col-md-4 cardIn" key={index}>
            <div className="">
                <div className={`p-4 py-5 rounded-3 text-center text-dark card-box ${card.bgClass}`}>
              <h5>{card.sub}</h5>
              <h3 className="fw-bold">{card.title}</h3>
              <img
                src={card.img}
                alt="card-img"
                className="p-4 img-fluid my-3 cardImg"
                style={{ maxHeight: "150px" }}
              />
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {card.buttons.map((btn, i) => (
                  <button className="btn cardBtn btn-dark btn-sm px-3" key={i}>
                    {btn}
                  </button>
                ))}
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
