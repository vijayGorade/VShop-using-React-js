import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import Data from "./store/Data";
import Footer from "./components/Footer";
import Contact from "./components/ContactUS";
function App(){
const [data1,setData]=useState([]);
let name=useRef("");
useEffect(()=>{
  const data=  fetch("https://dummyjson.com/products");
data.then((data)=>{
 return data.json();
}).then((data)=>{
setData(data.products);
})
},[]);


function searchData()
{
 const data=  fetch(`https://dummyjson.com/products/search?q=${name.current.value}`);
data.then((data)=>{
 return data.json();
}).then((data)=>{
console.log(data)
setData(data.products)
})
}

 function displayAddToCartData(name)
 {
if(name==="home")
{
    setStatus("Home")
    const data=  fetch("https://dummyjson.com/products");
data.then((data)=>{
 return data.json();
}).then((data)=>{
setData(data.products);
})
}
else if(name==="add")
{
  setStatus("add")
setData(AddToCartData);
}
console.log(name)
 }
const [AddToCartData,setAddToCartData]=useState([]);

function addToCart(currentData)
{
const tempArr=[...AddToCartData,currentData];
setAddToCartData(tempArr);
}
const [statu,setStatus]=useState("Home");

const deleteItem=(element)=>{
  const arr=[...AddToCartData].filter(e=>e!=element);

setAddToCartData(arr);
setData(arr)
}
  return <>
  <Data.Provider value={data1}>
 <Navbar Name={name} searchFunction={searchData} disaplayAddedData={displayAddToCartData} counter={AddToCartData}></Navbar>
 <ProductContainer myfunction={addToCart} Status={statu} deleteItem={deleteItem}></ProductContainer>
 <Footer></Footer>
   </Data.Provider>
  </>
}
export default App;


