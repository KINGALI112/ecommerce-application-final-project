import React from "react"
import Catg from "../components/shops/Catg"
import ShopCart from "../components/shops/ShopCart"
import "./style.css"

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
<<<<<<< HEAD:client/src/pages/Shop.jsx
        <h1>Shop Here</h1>
        <div>
=======
        <div className="container d_flex">
          <Catg />
          <div className="containerWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <h2>Items</h2>
              </div>
              <div className="heading-right row">
                <span>View All</span>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content grid1">
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
             </div>
          </div>
>>>>>>> main:client/src/components/shops/Shop.jsx
        </div>
      </section>
    </>
  )
}

export default Shop
