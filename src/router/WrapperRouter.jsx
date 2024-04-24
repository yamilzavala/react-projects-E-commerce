import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from '../components'
import { AboutPage, AuthWrapper, CartPage, CheckoutPage, ErrorPage, HomePage, PrivateRoute, ProductsPage, SingleProductPage } from '../pages'

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
                <Route exact path="/checkout">
                    <CheckoutPage/>
                </Route>
                <Route path="*">
                    <ErrorPage/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
} 

const WrapperRouterProvider = ({children}) => {
    return (
        <WrapperRouter>
            {children}
        </WrapperRouter>
    );
};

export default WrapperRouterProvider;