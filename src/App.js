import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return(
    <>
      <Navbar title="Textutils" aboutText="more about"/>
      <div className='container my-3'>
      <TextForm heading='Enter the text to Analyze below' />

      </div>
    </>
    );
}

export default App;
