import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate,Navigate   } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Error from './components/error/Error';
import Form from './components/form/Form';


function App() {

  const [characters,setCharacters] = useState([]);
  const [idr,setIdr] = useState(0);
  const [access,setAccess] = useState(true);
  const navigate = useNavigate()
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'unaPassword12';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
    // else{
    //   return ""
    // }
 }
 
 useEffect(() => {
  !access && navigate('/');
}, [access]);
  // const onClose=(id)=>{
  //   setCharacters([...characters, characters.filter(char => char.id !== id) ]);
  // }
  const onClose = id => {
    setCharacters(characters.filter(caracter =>
    caracter.id !== Number(id)))
  }


  const onSearch=(charId)=>{
    console.log(charId)

    axios(`https://rickandmortyapi.com/api/character/${charId.id}`).then(({ data }) => {
      
      if (data.name && !(characters.find((char)=> char.id === Number(charId.id))   )) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
    // setCharacters([...characters, example]);
  }

  const onRandom=  ()=>{
    const randomId = Math.floor(Math.random() * 826); 
    // setIdr(randomId)
    // console.log(idr)
    axios.get(`https://rickandmortyapi.com/api/character/${randomId}`).then(({ data }) => {
      
      if (data.name && !(characters.find((char)=> char.id === Number(randomId))) ) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  }
  let location = useLocation();

  return (
    <>
      {location.pathname!=="/fav" || location.pathname!=="/" ? <Nav  onSearch={onSearch} onRandom={onRandom} /> : null  }
      { location.pathname =="/" && access ? <Navigate replace to="/home" /> : null  }

        <Routes>
          <Route path='/about' element={ <About /> } /> 
          <Route path='/' element={ <Form login={login} /> } /> 
          <Route path='/fav' element={ <Cards characters={characters} onClose={onClose} /> } /> 
          <Route path='/detail/:id' element={ <Detail /> } /> 
          <Route path='/home' element={ <Cards characters={characters} onClose={onClose} /> } /> 
          <Route path="*" element={<Error />} />
        </Routes>
    </>
  )
}

export default App
