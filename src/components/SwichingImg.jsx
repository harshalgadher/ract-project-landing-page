import React, { useState } from 'react'

const option = [
    { icon:"bi bi-calendar4-event", name:"Live Visual Builder",img: "/img/img1.jpg"},
    {icon:"bi bi-calendar4-event", name:"Layout Builder",img: "/img/img2.jpg"},
    {icon:"bi bi-calendar4-event", name:"Header Builder",img: "/img/img3.jpg"},
    {icon:"bi bi-calendar4-event", name:"Mega Menu",img: "/img/img4.jpg"},
    {icon:"bi bi-calendar4-event",name:"footer Builder",img: "/img/img5.jpg"},
    {icon:"bi bi-calendar4-event", name:"Form Builder",img: "/img/img6.jpg"},
    {icon:"bi bi-calendar4-event", name:"Off Canvas",img: "/img/img7.jpg"},
    {icon:"bi bi-calendar4-event", name:"Setup Wizard",img: "/img/img8.jpg"},
    {icon:"bi bi-calendar4-event", name:"Performance Wizard",img: "/img/img9.jpg"}
]
export const SwichingImg = () => {
    
    const [selectIndex , setSelectIndex] = useState(0);

    return (
    <div className="container my-4">
        <div className="row">
            <div className="col-lg-3 col-12">
                <div className="d-flex flex-column">
                    {option.map((option , index) => {
                        return <button key={index} onClick={() => setSelectIndex(index)} className="btn switchBtn my-1 py-2">{option.name}</button>
                    })}
                </div>
            </div>
            <div className="col-lg-9 col-12">
                <div className="p-2">
                        <img src={option[selectIndex].img}
                            alt="banner-img" className="img-fluid" />
                    </div>
            </div>
        </div>
    </div>
  )
}
