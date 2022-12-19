import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

function Home() {

    const[produst,setprodust]=useState([]);
    const[find,setfind]=useState("https://dummyjson.com/products");
    const[category,setcategory]=useState([]);


    useEffect (()=>{
       search("");
    },[]);


    useEffect (()=>{
        axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setcategory(response.data);
        
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

    })


    function search(search_product){
      if(search_product!='')
      {
        setfind("https://dummyjson.com/products/search?q=" + search_product)
      }

      axios.get(find)
      .then(function (response) {
        // handle success
        console.log(response.data.products);
        setprodust(response.data.products);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     
    } 
    function click_category(w)
    {
      axios.get('https://dummyjson.com/products/category/' + w)
      .then(function (response) {
        // handle success
        console.log(response.data.pro);
        setprodust(response.data.products);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
    return (
      <>
    <div className="container">
        <div className="row">
          <input type="text" onChange={(e)=>{search(e.target.value)}} />
        {
          category.map((a)=>{
            return(
              <div className="col-xl-2">
              <a href="#/" onClick={()=>click_category(a)} >{a}</a>
              </div>
            )
          })
        }
      
            
      {
        produst.map((x,q)=>{
            return(
               <div key={q}  className='col-xl-3'>
                <img src={x.thumbnail} alt="" className="imag" />
              <Link to={`/${x.id}`}> view </Link> 
               </div>
            );
        })
      }
    
        </div>
    </div>
     
      
      </>
    );
  }
  
  export default Home;