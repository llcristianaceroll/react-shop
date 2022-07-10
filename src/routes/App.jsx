import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Login from "../containers/Login"
import RecoveryPassword from "../containers/RecoveryPassword";
import SendEmail from '../pages/SendEmail';
import NotFound from "../pages/NotFound";
import NewPassword from "../pages/NewPassword";
import '../styles/global.css'

const App = () => {
    return (
        <BrowserRouter>
        <Layout>
         <Routes>            
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
                <Route exact path="/send-email" element={<SendEmail/>} />
				<Route exact path="/new-password" element={<NewPassword/>} />
				{/* <Route exact path="/account" element={<MyAccount/>} />
				<Route exact path="/signup" element={<CreateAccount/>} />
				<Route exact path="/checkout" element={<Checkout/>} />
				<Route exact path="/orders" element={<Orders/>} />					 */}
                <Route path="*" element={<NotFound/>}/>            
         </Routes>
         </Layout>
        </BrowserRouter>
    );
}      

export default App