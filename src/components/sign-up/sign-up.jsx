import React, { useState } from "react";
import { CreateUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils.js";
import FormInput from "../input-form/input-form.jsx";
import Button from "../button/button.jsx";
import { SignUpContainer } from './sign-up.styles';

const defaultFormfiels = {
    displayName:"",
    email:"",
    password:"",
    confirmPassword:"",
}

const SignUp = () =>{
    const [formFields, setFormFields]= useState(defaultFormfiels);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () =>{
        setFormFields(defaultFormfiels);  
    };

    const handleSubmit = async (event)=> {
        event.preventDefault();
    
        if(password !== confirmPassword){
            alert("password do not match");
            return;
        }
        if(password.length < 6){
            alert("Password should be at least 6 characters")
        return;
        }
        try{
            const {user} = await CreateUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

        }catch(error){
            switch(error.code){
                case "auth/email-already-in-use":
                    alert("email-already-exist");
                    break;

                default:
                    console.log("user creation encountered an error",error);          
            }
           
        }
    }
        

    const handleChange = (event)=> {
        const {name , value } = event.target;
        setFormFields({ ...formFields, [name]:value});
    };

    return(
        <SignUpContainer>            
            <form onSubmit={handleSubmit}>
                <h2>I Do not have an account</h2>
                <span>Sign up with your email and password </span>

                
                <FormInput 
                    label="Display Name" 
                    type="text"
                    name= "displayName" 
                    value = {displayName} 
                    onChange={handleChange} 
                    required
                />

                <FormInput
                    label="Email" 
                    type="email"
                    name= "email" 
                    value = {email} 
                    onChange={handleChange} 
                    required
                />      

               <FormInput 
                    label = "Password"
                    type="password" 
                    name= "password"
                    value = {password} 
                    onChange={handleChange} 
                    required
                />

                <FormInput 
                    label = "Confirm Password"
                    type="password" 
                    name= "confirmPassword" 
                    value = {confirmPassword} 
                    onChange={handleChange} 
                    required
                />

                <Button  type="submit" >
                    SignUp
                </Button>
            </form>
        </SignUpContainer>
    );
}
export default SignUp;       
