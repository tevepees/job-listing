import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate} from 'react-router-dom';




const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Validasi username dan password di sini jika diperlukan
      // Misalnya, periksa apakah username dan password telah diisi

      // Kirim data login ke backend
      const {data : response} = await axios.post('https://fakestoreapi.com/auth/login',{
        username: "mor_2314",
        password: "83r5^_"
        });
        console.log("Apa aja");
console.log(response);

      if (response.token) {
    
        // Misalnya, menyimpan token akses ke local storage
        localStorage.setItem('isLogin', true);
          // Redirect ke halaman /home setelah login berhasil
          navigate('/home');
    } 
 
      
    } catch (error) {
      // Tangani kesalahan jika terjadi kesalahan saat melakukan request
      console.error('Error during login:', error);
      // Tampilkan pesan kesalahan umum kepada pengguna
      alert('Terjadi kesalahan saat melakukan login. Silakan coba lagi.');
    }
  };

  return (
    <form onSubmit={handleClick}>
    <h3>Login Here</h3>
      <label className="username">Username</label>
      <input
        type="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <Navigate */}
      <button type='submit'>Login</button>
       {/* <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div> */}
      </form>
  );
};

export default Login;
