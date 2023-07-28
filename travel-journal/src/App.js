import './index.css';
import Header from './component/Header';
import Main from './component/Main';
import data from './data'

function App() {
    const main = data.map((places) => {
        return (
            <Main
            key = {places.id}
            {...places}           
            />
        )
    })
  return (
    <div className="App">
          <Header />
          {main}
    </div>
  );
}

export default App;
