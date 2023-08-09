import './App.css'
import Header from './components/Header'
import Post from './components/Post';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div>
          {[...Array(6).keys()].map((key) => (
            <Post key={key} />
          ))}
        </div>
        
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
