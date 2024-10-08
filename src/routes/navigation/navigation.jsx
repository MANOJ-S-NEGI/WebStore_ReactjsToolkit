import React, { Fragment }from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { SignOutUser } from "../../utils/firebase/firebase.utils.js";

import ShoppingCart from "../../components/cart-icon/cart-icon.components.jsx";
import CartDropDown from "../../components/cart-dropdwon/cart-dropdown.components.jsx";

import {NavigationContainer, NavLinkContainer, NavLink, NavLinkSpan, LogoContainerLink} from "./navigation.styles.jsx";

import { selectCurrentUser } from '../../redux-store/user/user.selector.js';
import { selectIsCartOpen } from '../../redux-store/cart/cart.selector.js';


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutHandler = async ()=> {
        await SignOutUser();
    }

    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainerLink to='/'>
                    <Logo className='logo' />
                </LogoContainerLink>

                <NavLinkContainer>
                    <NavLink to='/shop'> SHOP </NavLink>
                        {
                            currentUser ?(
                                <NavLinkSpan onClick = {signOutHandler}> SIGN OUT </NavLinkSpan>
                            ) : (
                            <NavLink to="/sign-in">SIGN IN</NavLink>
                        )}
                    <ShoppingCart />
                </NavLinkContainer>                
                    { isCartOpen && <CartDropDown /> }
            </NavigationContainer>   
            <Outlet/>            
        </Fragment>
    );
  };

export default Navigation;