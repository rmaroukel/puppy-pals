import './App.css'
import {puppyList} from './data.js'
import {useState} from 'react'
// Exports the app
function App() {
  // Define any variables
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
 //console.log("puppyList: ", puppies)

  
  // Functionality

const featurePup = puppies.find((pup) => pup.id === featPupId)
console.log(featurePup)


  
  
  // Render everything on the browser
  return (
    <>
      <div className="card">
        <h2>Puppy Roster</h2>
        {
          puppies.map((puppy) => {
            return <p id="puppy-buttons" onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
        <br></br>
      </div>

        {featPupId && (
          <div className="puppy-info">
            <h2>{featurePup.name}</h2>
              <ul>
                <li>Age: {featurePup.age}</li>
                <li>Email: {featurePup.email}</li>
              </ul>
          </div>
        )}
    </>
  )
}

export default App
