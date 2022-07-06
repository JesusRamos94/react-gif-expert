import { useState } from "react";
import { AddCategory, GifGrid } from "./components";




export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <div>GifExpertApp</div>

      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Listado de Gif  */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

// const apiKey = 'W1dRkM8Evz7wUL3qLKOAY2mMjxe8ZSol'

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
