import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button1 from './evenHangle1.jsx';
import Button3 from './eventHandle2.jsx';
import CustomButton from './CustomButton.jsx';
import UserButton from './UserButton.jsx';
import { LinkButton, ShareButton } from './pssEvenHdleAssProps.jsx';
import Batsman from './batsman.jsx';
import Users from './Users.jsx';



  
 

//🔴 PRACTICE–3 (Challenge 🔥)
// 🎯 Goal

// Text + event handler দুটোই parent থেকে পাঠানো

function ActionButton({label, onTab}){
  return(
    <button onClick={onTab}>{label}</button>
  )
}

function MovieButton({movieName}){
  function handleWatchClick(){
    alert(`Watching ${movieName} now!`);
  }
  return(
    <ActionButton
    label={`Watch "${movieName}"`}
    onTab={handleWatchClick}
    />
  );
}




  


function PlayButton({movieName}){
  function handlePlayClick(){
    alert(`Playing${movieName}!`);

  }
  return(
    <button 
    onClick={handlePlayClick}>Play"{movieName}"
    </button>
  );
}

function UploadButton(){
  return(
    <button onClick={() => alert("Uploading Image...")}>
      Upload Image
    </button>
  )
}

function App() {

  function handleClick(){
    alert("Button clicked from App.jsx");
  }



  return (
    <>
    <Users />
    <div>
      <Batsman />
      <MovieButton movieName="Avatar" />

      <PlayButton movieName="Inception" />
      <UploadButton />
    </div>
    

    <div>
      <ShareButton />
      <LinkButton />
      {/* <button onClick={handleClick}>click</Button> */}
    {/* <Button /> */}
    </div>
      <div className='mt-4 mb-4 space-x-4'>

        <Button1 />
        <Button3 />
      </div>
      <br />

      <div className='mt-4 mb-4 space-x-4'>
        <CustomButton message="Download Started">Download</CustomButton>
        <CustomButton message="Profile saved">Save Profile</CustomButton>

      </div>

      <br />
      <div className='mt-4 mb-4 space-x-4'>
        <UserButton  />
        {/* <br /> */}
        <UserButton />
      </div>



    </>
  )
}

export default App
