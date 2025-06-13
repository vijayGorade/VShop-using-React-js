

function Navbar({Name,searchFunction,disaplayAddedData,counter})
{
    return <>
    <nav class="navDiv bg-body-tertiary ">
      <div className="mainNAvDiv">

     
  <div class="suvDivNav container-fluid ">
      <h1>VShop</h1>
  
    <form class="d-flex navDiv" role="search">
      <input class="form-control me-2"type="text" ref={Name} placeholder="Search Items..." />
      <button class="btn btn-outline-success" type="Button" onClick={()=>{searchFunction()}}>Search</button>
    </form>
    <div className="cartDiv">   
      < i class='bxr  bx-cart' onClick={()=>{disaplayAddedData("add")}} ></i> 
      <p>{counter.length}</p>
  </div>

  </div>
  <ul className="suvNav">
  <li  onClick={()=>{disaplayAddedData("home")}} >Home</li>
  <li>About US</li>
  <li>Contact</li>
</ul>
 </div>
</nav>
    </>
}

export default Navbar;