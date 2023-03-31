import React from 'react'
import { useState } from 'react'
import { AddCategory,GifGrid, ResetPage } from './components'


export const GiftExpertApp = () => {
  
    const [categories, setCategories] = useState([  ])
    const onAddCategory = (newCateogry) =>{

        if(categories.includes(newCateogry) ) return;

        setCategories([newCateogry,...categories])
    }

    return (
    <>
        <h1>The Ultimate Gif</h1>
        <AddCategory 
        //setCategories={setCategories}
            onNewCategory={ onAddCategory }
        />
        <ResetPage />
        
        {categories.map(category =>
                <GifGrid 
                key={ category } 
                category={ category }
                />
        )}
        
    </>
  )
}
