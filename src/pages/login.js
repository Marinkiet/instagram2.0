import { useState, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Login(){

    const history = useNavigate();
    const {firebase} = useContext(FirebaseContext);


    const [emailAddress,setEmailAddress] = useState();
    const [password,setPassword] = useState();

    const [error,setError] = useState('');
    const isValid=password==='' || emailAddress === '';

    const handleLogin = () =>{};

    useEffect(()=>{
        document.title = 'Login - Instagram';
    },[]);

    return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
        <h1>Hello there lof nmgin 4d55dg</h1>
    </div>
        );
}