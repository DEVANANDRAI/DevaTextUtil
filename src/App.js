 
import Navbar from './components/Navbar';
import './App.css';
import {useState} from 'react'; 
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Footer from './components/Footer';

function App(props) {
  const [alert,setAlert]=useState(null)
  const changeAlert=(message,type,bgcolor)=>{
    setAlert({
      message:message,
      type:type,
      bgcolor:bgcolor
    });
    setTimeout(() => {
    setAlert(null);
    }, 3000);
  }
  const [bgmode,setBgmode]=useState({
    backgroundColor:"#edeef2",
    color:"black",
    textAlign:"justify",
  })
  const changeBackground=()=>{
    if(bgmode.backgroundColor==="#edeef2"){
      setBgmode({
        backgroundColor:"#27203d",
        color:"white",
        textAlign:"justify",
        
      });
    }
    else{
      setBgmode({
        backgroundColor:"#edeef2",
        color:"black",
        textAlign:"justify",
      });

    }
  }
  const [mode,setMode]=useState({
    backgroundColor:"#454647",
    color:'white',
  });
  const changeMode=()=>{
    changeBackground();
    changeInputbg();
    if(mode.backgroundColor==="#454647"){
      setMode({
        backgroundColor:"#0d122e",
        color:"white"

      });
    }
    else{
      setMode({
        backgroundColor:"#454647",
        color:"white"

      })
    }
  } 
  const [inputMode,setInputMode]=useState({
    backgroundColor:"#a1a0a3",
    color:"black",
  });
  const changeInputbg=()=>{
    if(inputMode.backgroundColor==="#a1a0a3"){
      setInputMode({
        backgroundColor:"#3a295e",
        color:"white",
      })
    }
    else{
      setInputMode({
        backgroundColor:"#a1a0a3",
        color:"black",
      })
    }
  }

  return (
   <>
  
<Navbar mode={mode} changeMode={changeMode} title="Text Util"/>
<Alert alert={alert}/>
<div className="container-xxl" style={bgmode}>
<TextForm inputMode={inputMode} changeAlert={changeAlert}/>
</div>
<Footer bgmode={bgmode}/>
   </>
  );
}

export default App;
