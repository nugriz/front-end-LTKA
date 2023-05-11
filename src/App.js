import React, { useState, useEffect } from 'react';
export default function App() {
  const [data, setData] = useState([])
  const [respond, setRespond] = useState({})
  const [openPrice, setOpenPrice] = useState('')
  const [highPrice, setHighPrice] = useState('')
  const [lowPrice, setLowPrice] = useState('')

  const body = {
    open: parseInt(openPrice), // Use your own property name / key
    high: parseInt(highPrice),
    low: parseInt(lowPrice),
  }

  useEffect(() => {
    //fetchGames() // Fetch games when component is mounted
    document.title = `LTKA`;
  }, [])

  const fetchGames = () => {
    fetch('http://34.125.248.91/songs', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log('error'))
  }

  const saveGames = () => {
    fetch('https://flask-ml-381907.et.r.appspot.com/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((result) => setRespond(result))
      .catch((err) => console.log(JSON.stringify(body)))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    saveGames() // Save games when form is submitted
  }

  const handleChange = (event) => {
    setOpenPrice(event.target.value)
  }

  const handleChange2 = (event) => {
    setHighPrice(event.target.value)
  }

  const handleChange3 = (event) => {
    setLowPrice(event.target.value)
  }

  // CSS

  const app = {
    backgroundImage: "linear-gradient(45deg, #FC466B, #3F5EFB)",
    fontFamily: 'Montserrat',
    height: '100vh',
  }

  const form = {
    background: 'rgba(255,255,255,0.3)',
    padding: '3em',
    height: '320px',
    borderRadius: '20px',
    borderLeft: '1px solid rgba(255,255,255,0.3)',
    borderTop: '1px solid rgba(255,255,255,0.3)',
    backdropFilter: 'blur(10px)',
    boxShadow: '20px 20px 40px -6px rgba(0,0,0,0.2)',
    textAlign: 'center',
    position: 'relative',
    transition: 'all 0.2s ease-in-out',
    color: 'black',
  }

  const p = {
    fontWeight: '600',
    color: '#fff',
    opacity: '0.7',
    fontSize: '1.4rem',
    marginTop: '0',
    marginBottom: '60px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  }

  const p2 = {
    fontWeight: '600',
    color: '#fff',
    opacity: '0.7',
    fontSize: '1.4rem',
    marginTop: '0px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  }

  const input = {
    background: 'transparent',
    width: '300px',
    padding: '1em',
    marginBottom: '2em',
    border: 'none',
    borderLeft: '1px solid rgba(255,255,255,0.3)',
    borderTop: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '5000px',
    backdropFilter: 'blur(5px)',
    boxShadow: '4px 4px 60px rgba(0,0,0,0.2)',
    color: '#fff',
    fontColor: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '500',
    transition: 'all 0.2s ease-in-out',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  }

  const close = {
    background: 'transparent',
    width: '200px',
    height: '200px',
    marginBottom: '2em',
    marginLeft: '0.7em',
    marginRight: '0.7em',
    border: 'none',
    borderLeft: '1px solid rgba(255,255,255,0.3)',
    borderTop: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '50%',
    backdropFilter: 'blur(5px)',
    boxShadow: '4px 4px 60px rgba(0,0,0,0.2)',
    color: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '500',
    fontSize: '100px',
    transition: 'all 0.2s ease-in-out',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  }

  const button = {
    background: 'transparent',
    width: '200px',
    padding: '1em',
    marginBottom: '2em',
    border: 'none',
    borderLeft: '1px solid rgba(255,255,255,0.3)',
    borderTop: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '5000px',
    backdropFilter: 'blur(5px)',
    boxShadow: '4px 4px 60px rgba(0,0,0,0.2)',
    color: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '500',
    transition: 'all 0.2s ease-in-out',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  }

  const container = {
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    top: '50%',
    left: '30%',
  }

  const result = {
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    top: '50%',
    left: '70%',
  }

  return (
    <div className="App" style={app}>
      <div style={container}>
        {/* method="post" not needed here because `fetch` is doing the POST not the `form` */}
        {/* Also, note I changed the function name, handleSubmit */}
        <form onSubmit={handleSubmit} style={form}>
          <p style={p}>Welcome</p>
          <div><input style={input} type="text" placeholder='Open Price' name="name" value={openPrice} onChange={handleChange} /></div>
          <div><input style={input} type="text" placeholder='High Price'name="names" value={highPrice} onChange={handleChange2} /></div>
          <div><input style={input} type="text" placeholder='Low Price' name="namez" value={lowPrice} onChange={handleChange3} /></div>
          <button style={button} type="submit">Click</button>
        </form>
      </div>
      <div style={result}>
        <div style={form}>
        <p style={p2}>Your Result Will Show In Here</p>
        <p style={p2}>Close price :</p>
          <div style={close}>
            <div style={{fontSize: '20px', paddingTop: '4.5em'}}>
            {respond['predicted_price']}
            </div>
          </div>
        </div>
      </div>

        {data &&
          data.map((element, index) => (
            <div>{element.title} {element.body} </div>
          ))}
    </div>
  )
}