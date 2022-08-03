import { useState } from "react";
import { AddCategory, GifGrid } from "./componets";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) => {
        // categories.push(newCategory);
        //agreagr valorant
        // console.log(newCategory);
        if(categories.includes(newCategory))return;
        // setCategories((caterory)=>categories.push('Valorant'));
        setCategories([newCategory,...categories]);

    }

  return (
    <>
    <h1>GifExpertApp 2</h1>
    <AddCategory 
        // setCategories={setCategories} 
        onNewCategory={(value)=>onAddCategory(value)}
    />
    
   
      {categories.map((category)=>
       (
            <GifGrid 
                category={category} 
                key={category}/>
        )
      )}
   
    </>
  );
}
