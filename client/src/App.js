import './App.css';
// import {Footer } from '../src/components/Footer'
// import {Header } from '../src/components/Header'
import MyProvider from './context/MyProvider';
import {MainPage } from '../src/components/MainPage'
import '../src/components/styles.css';


function App() {
  return (
    <MyProvider>
      <div className="App">
      <MainPage />

    </div></MyProvider>
    
  );
}

export default App;
