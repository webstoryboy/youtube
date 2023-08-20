import React from 'react'

const HeaderSection = () => {
  return (
    <header id="header">
      <h1 className="header__logo">
        <a href="/">webs Youtube <span>react.js</span></a>
      </h1>
      <div className="header__search">
        <label htmlFor="searchInput" className="blind">검색</label>
        <input type="search" id="searchInput" placeholder="유튜버 검색" autoComplete="off" className="search__input" />
      </div>
    </header>
  )
}

export default HeaderSection