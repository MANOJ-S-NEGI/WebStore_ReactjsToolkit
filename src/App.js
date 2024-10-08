import React from "react";
import Home from "./routes/home/home.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.jsx";
import SignInAuthentication from "./routes/sign-in-authentication/sign-in-authentication.jsx";
import Shop from "./routes/shop/shop.route.jsx";
import CheckOut from "./routes/checkout/checkout.components.jsx";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux-store/user/user.reducer.js'
import {
  OnAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';



const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = OnAuthStateChangedListener(async (userAuth) => {
      if (userAuth) {
        // Call createUserDocumentFromAuth with the user object
        await createUserDocumentFromAuth(userAuth,);
        
        // Dispatch only serializable fields to Redux
        const sanitizedUser = {
          uid: userAuth.uid,
          email: userAuth.email,
          displayName: userAuth.displayName,
          emailVerified: userAuth.emailVerified,
        };
  
        dispatch(setCurrentUser(sanitizedUser));
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  
    return unsubscribe;
  }, [dispatch]);
  
  return (
    <div className="app-container">
      <Routes>
        <Route path= "/" element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path= "shop/*" element={<Shop />}/>
          <Route path= "sign-in" element={<SignInAuthentication />}/> 
          <Route path= "checkout" element={<CheckOut />}/> 
        </Route>
      </Routes>      
    </div>
  );
};

export default App;
