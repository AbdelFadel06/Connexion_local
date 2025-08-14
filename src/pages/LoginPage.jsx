import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = ()=>{
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();


    const handleLogin = (e)=>{
        
        e.preventDefault();

        const storedEmail = "abdelfadelsaliou@gmail.com";
        const storedPassword = "abdel";


        if (email===storedEmail && password === storedPassword){
            const Email = localStorage.setItem("email",storedEmail);
            const Password = localStorage.setItem("password", storedPassword );
            navigate('/home')
        } else {
            alert("Email ou Mot de Passe incorrecte")
        }
    }

    
    return (
        <div className="bg-[#A7D7C5] min-h-screen flex items-center justify-center">
            <form className="bg-[#F6FBF9] w-[400px] p-8 rounded-2xl text-center shadow">
                <h1 className="text-2xl font-bold mb-2">Login</h1>
                <p className="text-sm mb-6 text-gray-600">
                Login to your account to enjoy all the services without any ads for free
                </p>

                <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className="w-[90%] mb-4 px-3 py-2 rounded border border-[#0000001A] outline-none"
                />

                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-[90%] mb-4 px-3 py-2 rounded border border-[#0000001A] outline-none"
                />

                
                <button className="w-1/2 py-4 bg-[#84C7AE] text-white text-lg font-medium rounded cursor-pointer hover:bg-[#6bbfa1] transition" onSubmit={handleLogin}>
                    Log In
                </button>

                <p className="mt-6 text-sm text-gray-700">
                Already Have An Account? 
                <a href="#" className="text-blue-600 hover:underline">Sign In</a>
                </p>
            </form>
        </div>
    )
}

export default LoginPage