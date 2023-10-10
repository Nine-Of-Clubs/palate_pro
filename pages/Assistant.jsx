import React, { useState } from 'react'
import { send, bot, profile } from '../assets'
import { Chat } from '../components'


        
 
const Assistant = () => {
const [prompt, setprompt] = useState('');
const [response, setResponse] = useState(true);
const [messages, setmessages] = useState([
  {
    message: `${setprompt}`,
    bot: true
  },{
  
    message: `${response}`,
    bot: false
  }
])
const [bot, setbot] = useState(true)
const handleSend = async () =>{
  const response = await sendMessageToBot(setprompt);
  // setmessages{
  //   [...messages, 
  //   { },
  // {}]
  // }

}
 


  return (
    
 <div className="Assistant">
  <div className="Assistant_header">
    <h1>Meet Nine_Of_Clubs Ai.</h1>
    <h1>Interact with GPT-3 powered Ai Model</h1>
    <p>Nine of clubs gets propmpts on your health and preferences on diet
    and advices what is best for you and your health.
    </p>
    <button>
      scroll down and get started
    </button>
  </div>

<h1 className='chat_header'>chat center</h1>
  <div className="chat_center">

        <div className="chat">
         
      
      <div className="chat_content">
        {
          messages.map(
            (message, id) =>{
<>
             <img src={bot ? bot: profile} />
             <p>{setprompt}</p>

             </>
             

             
            }
          )
        }
      </div>
               




          <div className="input">
            <textarea name="" id="textarea" placeholder='Enter your enquiry or prompt...' onChange={(e) => setprompt(e.target.value)}></textarea>
            <img src={send} alt="" onClick={(e) => handleSend}/>
          </div>

        </div>

        </div>
        <p>All rights reserved @2023 openai GPT-3</p>
        </div>
      
   
  )
}

export default Assistant