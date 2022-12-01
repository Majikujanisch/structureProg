
import './App.css';
const username = "test"
const pw = "test"
const data = {username, pw}
const bodybuilt = JSON.stringify(data)
function App() {
  const handleclick = async ()=>{
    console.log("handleCLick")
    await fetch('http://localhost:5000/api/registration', {
      method: 'POST',
      headers:{
      'Content-type': 'application/json'},
      body: bodybuilt,
    }).then((data)=>{
    console.log(data)
  })
  .catch((err)=>
  console.log(err.message)
  )}
  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={handleclick}>api write</button>
          Learn React
        
      </header>
    </div>
  );
}

export default App;
