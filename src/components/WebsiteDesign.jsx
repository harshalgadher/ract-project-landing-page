import React from 'react'

const webImg = [
    { 
        headign: "110 Prebuilt Websites",
        img: "/img/web1.jpg" ,
        dis : "Prebuilt websites are designed to save you time. Import with a few clicks & customize it to suit your requirements."
    },
    { 
        headign: "120+ design elements",
        img: "https://avada.com/wp-content/uploads/2021/06/design-elements-400x259.png" ,
        dis : "Packed with options, they are highly flexible for any design & for any purpose. The only limit is your imagination."
    },
    { 
        headign: "Built For Performance",
        img: "/img/web3.jpg" ,
        dis : "Experience total control of your website’s features that will empower you to make superior performance-related decisions."
    },
    { 
        headign: "Mobile Friendly",
        img: "https://avada.com/wp-content/uploads/2021/06/mobile-friendly-400x259.png" ,
        dis : "Avada is 100% fluid & responsive across all device types, from mobile to desktop & tablets, with no compromise."
    },
    { 
        headign: "Dynamic content",
        img: "https://avada.com/wp-content/uploads/2021/06/dynamic-content-400x260.png" ,
        dis : "Build unique pages & post layouts for your website by harnessing the power of Avada’s dynamic content functionality."
    },
    { 
        headign: "Online Store Builder",
        img: "/img/web6.jpg",
        dis : "Avada is integrated with WooCommerce, allowing you to build successful online stores to sell anything online."
    }
]

export const WebsiteDesign = () => {
    return (
        <div className="container my-4 mb-5">
            <div className="row gy-3">
                {webImg.map((image, index) => (
                    <div className="col-sm-6 col-lg-4 mb-5 px-4" key={index}>
                        <div>
                            <img src={image.img} alt={`img-${index}`} className="w-100 webImg img-fluid rounded" />
                        </div>
                        <h3 className="text-center">{image.headign}</h3>
                        <p className="text-center h6 text-secondary">{image.dis}</p>
                    </div>
                ))}
                <div className="d-flex justify-content-center text-center">
                     <button className='startBtn mb-5'>Discover more →</button>
                </div>
            </div>
        </div>
    )
}
