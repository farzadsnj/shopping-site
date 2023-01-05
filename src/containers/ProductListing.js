import React, {useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProduct } from '../redux/actions/productActions'

const ProductListing =() => {
    // const products = useSelector(state => state)
    const dispatch = useDispatch()
    
    const fetchProducts = async () =>{
        const res = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log('error in fetching', err)
        })
        dispatch(setProduct(res.data))
    }

    useEffect(()=> {
        fetchProducts()
    },[])

    // console.log('productslisting:', products)

  return (
    <div className='ui grid container'>
        <ProductComponent />
    </div>
  )
}

export default ProductListing