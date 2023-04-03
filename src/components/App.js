import "../styles/core/Reset.scss";
import '../styles/App.scss';
import Header from './Header';
import LateralNav from './LateralNav';
import NewsList from "./NewsList";


function App() {
  return (
    <div className="App">
      {/* aqui va el html */}
    
        <Header/>
        
      <main className="main">  
        <LateralNav/>
        <NewsList/>
      </main>

    </div>
  );
}

export default App;
