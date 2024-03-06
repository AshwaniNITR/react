// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './Alert';
import React,{useState} from 'react';

function App() {
  const[mode,setMode]=useState('light');
  const[tcolor,setTcolor]=useState('dark');
  const[alert,setAlert]=useState(null);
  // const[green,setgreen]=useState('light');
  // const[red,setred]=useState('');
  // const[textbg,setTextbg]=useState('white');
  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(function(){setAlert(null)},1500);
  }
  
  
  function toggleMode(){
    if(mode==='light'){
      setMode('dark');
      setTcolor('light');
     
      // document.body.style.backgroundColor="#042743";
      document.querySelector("body").style.backgroundColor="#042743";
      document.querySelector("textarea").style.backgroundColor="grey";
      document.querySelector(".main").style.color="white";
      showAlert("dark mode has been set","success");
    }
    else{
      setMode('light');
      setTcolor('dark');
      document.querySelector("body").style.backgroundColor="white";
      document.querySelector("textarea").style.backgroundColor="white";
      document.querySelector(".main").style.color="black";
      showAlert("light mode has been set ","success");
    }
  }
  return (
    
    <>
     <Navbar  mode={mode} tcolor={tcolor} toggleMode={toggleMode}/> {/*returns navbar from Navbar.js */}
     <Alert alert={alert}/>
     <div className="container my-3" mode={mode}>
     <About />
     <Textform al={showAlert} tcolor={tcolor}/>

     </div>
    </>
  );
}

export default App;
