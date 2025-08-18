import axios from 'axios';
import React, { useEffect } from 'react'
import {useState} from 'react'
import Spiner from './Spiner';



const Tag = () => {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const [gif,setGIf] = useState('');

    
    async function fetchData() {
      
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const {data}= await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGIf(imageSource);
      setLoading(false);
      


    }

    useEffect( () =>{
      fetchData();
    },[])

    function clickHandler(){
      fetchData();
    }

   const[loading,setLoading] = useState(false);
   const[tag,setTag] = useState("");

   function changeHandler(event){
    setTag(event.target.value);
   }

  return (
    <div className="w-[40%]  bg-blue-400 flex flex-col items-center gap-y-5 mt-2 rounded-lg border border-black">
      <h1 className='text-2xl font-bold '>Random Gif</h1>
      {loading ? (<Spiner/>) :(<img src = {gif}  width = "450"/>)}

     <input
     className='w-10/12 py-2 bg-white rounded-lg text-center '
     onChange={changeHandler}
     
     />
      <button onClick={clickHandler} className='w-10/12 bg-white  py-2 rounded-lg font-semibold mb-2'>
        Generate
      </button>
    </div>
  )
}

export default Tag
