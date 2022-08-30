
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import RowPosts from './components/RowPosts/RowPosts';
import { actionurl, horrorurl, netflixoriginals } from '../src/constants/constants'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPosts title='Netflix Originals' url={netflixoriginals} />
      <RowPosts title="Action" isSmall={true} url={actionurl} />
      <RowPosts title="Horror " isSmall={true} url={horrorurl} />
    </div>
  );
}

export default App;
