import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const ReactElement = {
//   type : 'a',
//   props: {
//     href :"http://google.com",
//     target: '_blank',
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="http://google.com" target="_blank">
    Click me to visit google
  </a>
)


const anotherUser = "chai aur react"

const ReactElement = React.createElement(  
  'a',
  {href: 'http://google.com', target : "_blank"},
  'Click me to visit google',
  anotherUser,
  anotherElement,
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
 ReactElement
)
