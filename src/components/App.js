import "../styles/core/Reset.scss";
import '../styles/App.scss';
import Header from './Header';
import LateralNav from './LateralNav';


function App() {
  return (
    <div className="App">
      {/* aqui va el html */}
    
        <Header/>
        
      <body className="body">  
        <LateralNav/>
      </body>

    </div>
  );
}

export default App;
