import "./Popular.css"

import all_products from "../Assets/all_products.js"

import Item from "../Item/Item"

const Popular = () => {
  return (
    <div className="popular">
        <h1>POPULAR IN STORE</h1>
        <hr/>
        <div className="popular-item">
            {all_products?.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>

            })}


        </div>
    </div>
  )
}

export default Popular