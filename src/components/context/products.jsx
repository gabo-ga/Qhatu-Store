import React, { useState, useEffect, useMemo} from "react";
import { onGetProducts } from '../../components/FirebaseConfig';

const ProductsCollection = React.createContext();

export function ProductsProvider (props) {
    const [productsData,setProductsData]= useState([]);

    useEffect(()=>{
        onGetProducts((querySnapshot) => {
            setProductsData(querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            cant: 0
          })))
        });
      },[]);

      const value = useMemo(() => {
          return({
              productsData,
            })
      },[productsData])

      return <ProductsCollection.Provider value={value} {...props} />
} 

export function useProduct() {
    const context = React.useContext(ProductsCollection)
    if (!context){
        throw new Error('Error useProduct')
    }
    return context
} 