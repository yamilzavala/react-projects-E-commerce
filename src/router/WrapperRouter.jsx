import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from '../components'
import { AboutPage, CartPage, CheckoutPage, ErrorPage, HomePage, PrivateRoute, ProductsPage, SingleProductPage } from '../pages'
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

// Router
const  WrapperRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Sidebar/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/about">
                    <AboutPage/>
                </Route>
                <Route exact path="/cart">
                    <CartPage/>
                </Route>
                <Route exact path="/products">
                    <ProductsPage/>
                </Route>
                <Route exact path="/products/:id" children={<SingleProductPage/>} />
                <PrivateRoute exact path="/checkout">
                    <CheckoutPage/>
                </PrivateRoute>
                <Route path="*">
                    <ErrorPage/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
} 

//Provider
const WrapperRouterProvider = ({children}) => {
    const {isLoading, error} = useAuth0();
    if(isLoading) {
        return (
            <Wrapper>
                <h1>Loading...</h1>
            </Wrapper>
        )
    }
    if(error) {
        return (
            <Wrapper>
                <h1>{error.message}</h1>
            </Wrapper>
        )
    }
    return (
        <WrapperRouter>
            {children}
        </WrapperRouter>
    );
};

export default WrapperRouterProvider;

//styles
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

