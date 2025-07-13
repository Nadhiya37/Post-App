import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
import ViewAllPost from './components/ViewAllPost';
import DeletePost from './components/DeletePost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<AddPost/>}/>
    <Route path="/search" element={<SearchPost/>}/>
    <Route path="/delete" element={<DeletePost/>}/>
    <Route path="/view" element={<ViewAllPost/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
