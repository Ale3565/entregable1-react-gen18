import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import Quote from "./json/quotes.json"

function App() {

  const colors = ["#3AD62F", "#0DBFA6", "#3E5F8A", "#1B5583", "#75151E", "#BEBD7F", "#FFA420"]
  const getRandom = arr => {
    const randomNumber = Math.ceil((Math.random() * (arr.length) + 1))
    return arr[randomNumber]
  }

  const randomQuote = getRandom(Quote)
  const randomColor = getRandom(colors)

  const [isColor, setIsColor] = useState(randomColor)
  const [isQuote, setIsQuote] = useState(randomQuote)

  const getAllRandom = () => {
    const randomQuote = getRandom(Quote)
    const randomColor = getRandom(colors)
    setIsColor(randomColor)
    setIsQuote(randomQuote)

  }
  const objectBgStyle = {
    backgroundColor: isColor
  }


  return (
    <div className="App" style={objectBgStyle} >
      <QuoteBox
        isColor={isColor}
        isQuote={isQuote}
        getAllRandom={getAllRandom}
      />
    </div>
  )
}

export default App
