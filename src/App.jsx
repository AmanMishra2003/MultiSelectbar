import { useState, useRef } from 'react'
import './App.css'

const frameworkNames = [
  "React",
  "Angular",
  "Vue",
  "Express",
  "Django",
  "Spring",
  "Ruby on Rails",
  "Laravel",
  "Flask",
  "ASP.NET",
  "Ember.js",
  "Svelte",
  "Backbone.js",
  "Meteor",
  "Symfony",
  "CodeIgniter",
  "Koa",
  "Phoenix",
  "CakePHP",
  "Nuxt.js",
  "Next.js",
  "Gatsby",
  "Bootstrap",
  "Foundation",
  "Tailwind CSS"
];

function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  function addOptionToData(item){
    if(data.includes(item)) return;
    setData(currData=>(
      [
        ...currData,
        item
      ]
    ))
  }

  function removeSelectedOption(item){
    if(!data.includes(item)) return;
    setData(currData=>(
      currData.filter(ele=> ele.toLowerCase()!==item.toLowerCase())
    ))
  }

  return (
    <>
      <div className='selectComponent'>
        <div className='selectedOptionContainer'>
          <div className="selectedOption">
          {
            data.map((ele,i)=>(
              <p key={i} className='selectOptionChoices'>{ele} <button onClick={()=>removeSelectedOption(ele)}>❌</button></p>
            ))
            
          }
          </div>
          <button className='dropdownBtn' onClick={()=>setShow(curr=>!curr)} >
            <span style={{transform: show ? 'rotate(-90deg)' : 'rotate(0deg)'}}>⬇</span>
          </button>
        </div>
        {
          show
          &&
          <div className='optionContainer'>
                    {
                      frameworkNames.map((ele,i)=>(
                        <div key={i} className='selectOption' style={data.includes(ele)?{textDecoration:'line-through',backgroundColor: 'rgb(46, 45, 45)'}:{}} onClick={()=>{addOptionToData(ele)}}>
                          {ele}
                        </div>
                      ))
                    }
          </div>
        }
        
        
      </div>
    </>
  )
}

export default App
