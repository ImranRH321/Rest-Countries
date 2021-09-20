import './App.css';
import Countries from './componets/Countries/Countries';
import Footer from './componets/Footer/Footer';


function App() {
  return (
    <div className="App">
   
   <Countries></Countries>
   <Footer></Footer>
    </div>
  );
}









/* 
function Countries(){
  const [countries, setCountries] = useState([])
  useEffect(() =>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <div>
      <h2>Treveling the World !!!</h2>
      <h4>Countries Avilable: {countries.length}</h4>

      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props){
  return (
    <div>
    
      <h2>Name: {props.name}</h2>
      <p>Capital: {props.capital}</p>
    </div>
  )
}
 */

export default App;
