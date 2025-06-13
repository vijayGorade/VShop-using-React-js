import Product from "./Porduct";
import { useContext } from "react";
import Data from "../store/Data";
function ProductContainer({myfunction,Status,deleteItem})
{
    const data=useContext(Data);
    return <>

     <div className="mainContentDiv" >
   {
      data.length!=0? data.map(e=><Product eachData={e} addToCartFunction={myfunction} status={Status} DeleteItem={deleteItem}></Product>):<>
     <seaction className="not">
         <img className="notFoundImage" src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-illustration-download-in-svg-png-gif-file-formats--available-product-tokostore-pack-e-commerce-shopping-illustrations-2809510.png?f=webp"/>
     <h3>Not found...</h3>
     </seaction>
      </>
   }
    </div>
    </>
}

export default ProductContainer;