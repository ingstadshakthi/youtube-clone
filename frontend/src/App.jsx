import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    async function fetchData() {
      fetch('/api/sample').then(res => console.log(res));
    }
    fetchData()
  }, [])

  return (
    <>
      <h1 className='text-3xl'>Youtube clone</h1>
    </>
  )
}

export default App
