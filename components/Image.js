import React, {useState, useEffect} from 'react'
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';

function Image({ name }) {

    const [imageURL, setImageURL] = useState(""); 
    const pathReference = ref(storage, name);
  
    useEffect(() => {
      getDownloadURL(pathReference).then((url) => {
        setImageURL(url); 
      })
    }, []); 

    return (
        <div className='-mx-2 -mt-5 rounded-lg'>
            <img 
                src={imageURL}
                className='md:w-80 w-64 ml-8 item-center mt-5 h-40 rounded-lg'
            />
        </div>
  )
}

export default Image