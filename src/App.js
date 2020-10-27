import logo from './logo.svg';
import './App.css';
import {TextField} from '@material-ui/core'
function App() {
  return (
    <div className="App">
      <TextField label={'Enter Location, Project or Landmark'} variant = "outlined"/>
      <TextField label={'Flat'} variant = "outlined"/>
      <TextField label={'Budget'} variant = "outlined"/>
    </div>
  );
}

export default App;
