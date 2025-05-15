import React, { useState } from 'react';

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" shadow-sm">
      <div className="container py-3 d-flex justify-content-between align-items-center">

        <div className=" col- d-flex align-items-center gap-2">
          <img
            src="https://avada.com/wp-content/uploads/2021/07/avada-logo-svg.svg"
            alt="logo-img"
            className="img-fluid"
            height={40} />
          <h3 className="mb-0">{props.name1}</h3>
        </div>

        <button
          className="btn d-md-none fs-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <nav className={`d-${menuOpen ? 'flex' : 'none'} flex-column align-items-end gap-2 d-md-flex flex-md-row`}>
          <a href="#resources" className="text-decoration-none fw-bold text-dark mx-2">{props.name2}</a>
          <a href="#hosting" className="text-decoration-none fw-bold text-dark mx-2">{props.name3}</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
