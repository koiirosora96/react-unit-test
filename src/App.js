import './App.css';
import { Greeting } from './components/Greeting';
import { PostList } from './components/Post';

function App() {
  return (
    <div className="App">
      <Greeting></Greeting>
      <PostList></PostList>
    </div>
  );
}

export default App;
