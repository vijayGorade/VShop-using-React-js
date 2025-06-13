function Product({eachData,addToCartFunction,status,DeleteItem})
{
    return <>
       {status==="Home"? 
        <div>
         <div className="producttype">
      <p className="discount">{eachData.rating}⭐</p>
      <p className="type">{eachData.category}</p>
    </div>  
    <img src={eachData.images[0]} alt="" />
<p className="NameOfProduct">{eachData.brand}</p>
<div className="isAvilableAndCostDiv">
  <p className="isAvilable">{eachData.availabilityStatus}</p>
<p className="price">{eachData.price}₹</p>
</div>
<p className="rating">⭐⭐⭐⭐⭐</p>
<button onClick={()=>{
    addToCartFunction(eachData)
}}>Add To Cart</button>
   </div>:
       <div>
         <div className="producttype">
      <p className="discount">{eachData.rating}⭐</p>
      <p className="type">{eachData.category}</p>
    </div>  
    <img src={eachData.images[0]} alt="" />
<p className="NameOfProduct">{eachData.brand}</p>
<div className="isAvilableAndCostDiv">
  <p className="isAvilable">{eachData.availabilityStatus}</p>
<p className="price">{eachData.price}₹</p>
</div>
<p className="rating">⭐⭐⭐⭐⭐</p>
<button style={{"background-color":"red","color":"white"}}    onClick={()=>{
    DeleteItem(eachData);
}}>Delete From Cart</button>
   </div>
   
   }




    </>
}

export default Product;