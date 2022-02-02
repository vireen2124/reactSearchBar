
import './showSuits.css';
import products from "./suitList";
import react, { useState } from 'react';
import saree from "./saree.jpg";

const ShowProduct=()=>{
    let [searchTerm,setSearchTerm]=useState(" ");
    const seeVal=(e)=>{
        setSearchTerm(e.target.value); 
    }
    const array1=products.filter(item=>{
        if(searchTerm===""){
            return item
        }else if(item.productName.toLowerCase().includes(searchTerm.toLowerCase())||item.productDescription.toLowerCase().includes(searchTerm.toLowerCase())||item.productPrice.toString().includes(searchTerm)){
             return item; 
        }
    }).map((item,i)=>{
        if(item.length<0){
            console.log("nothing")
        }else{
            return(
                <div className="productContainer" key={i}>
                    <img src={saree} alt="saree"className='productImage'></img>
                    <div className="namePrice"><span>{item.productName}</span><span>{item.productPrice}</span></div>
                    <div><span>{item.productDescription}</span></div>
                </div>
            )
        }    
    })

    return(
        <div className="pageContainer">
            <div className="searchBox">
                <input type="text" 
                className="search" 
                placeholder="searchBox"
                onChange={seeVal} >
                </input>
            </div>
            <div className="show-suit">
                    {array1}
            </div>
        </div>
    )

}
export default ShowProduct
  


