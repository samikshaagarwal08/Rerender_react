import { memo, useState } from 'react'

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

// function App() {

//   return (
//     <>
//       <HeaderWithButton></HeaderWithButton>
//       <Header title="xyz"></Header>
//     </>
//   )
// }


// function HeaderWithButton(){
//   const [firstTitle,setFirstTitle]=useState("my name is abc");

//   function changeTitle(){
//     setFirstTitle("my name is "+Math.random())
//   }

//   return <>
//       <button onClick={changeTitle}>Click me to change the title</button>
//       <Header title={firstTitle}></Header>
//   </>
// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

const Header=memo(function({title}){
  return <div>
    {title}
  </div>
})

export default App
