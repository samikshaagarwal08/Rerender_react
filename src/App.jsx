import { useState } from 'react'

function App() {
  const [firstTitle,setFirstTitle]=useState("my name is abc");

  function changeTitle(){
    setFirstTitle("my name is "+Math.random())
  }

  return (
    <>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle}></Header>
      <Header title="xyz"></Header>
    </>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
