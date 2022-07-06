import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {

    const [images, setImage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImage(newImages);
        setIsLoading(false)
      };
    
      useEffect(() => {
        getImages();
      }, []);


    return {
    images,
    isLoading
    }
}