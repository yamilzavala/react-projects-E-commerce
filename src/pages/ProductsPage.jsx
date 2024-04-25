import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'
import { useProductsContext } from '../context/products_context'

const ProductsPage = () => {
  const {products, products_loading, products_error} = useProductsContext();

  // if(products_loading) return <h1>Loading...</h1>
  // if(products_error) return <h1>There was an error....</h1>

  return <Wrapper>  
    products
    {/* {products.map(product => {
        const {id, name, price, image, company, category, description, shipping} = product;
        return (
          <article key={id} className="products">
            <img src={image} alt={name} />
            <span>{name}</span>
            <span>${price}</span>
          </article>
        )
    })} */}
  </Wrapper>
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
