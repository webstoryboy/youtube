import React from 'react'

import { categories } from "../utils/constants";

const Category = ({ category, setCategory }) => {
  return (
    <div className="menu">
      {categories.map((cate, key) => (
        <button href="/" 
          key={key}
          style={{backgroundColor: cate.name === category ? '#1e1e1e' : 'transparent'}}
          onClick={() => setCategory(cate.name)}
        >
          <span>{cate.icon}</span>
          <em>{cate.name}</em>
        </button>
      ))}
    </div>
  )
}

export default Category