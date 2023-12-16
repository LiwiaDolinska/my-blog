import './App.css';
import MainPage from './pages/MainPage';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from "./components/Post"
import NewPostForm from './components/NewPostForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='post/:postId' element={<Post />} />
        <Route path='new-post' element={<NewPostForm />} />
      </Routes>
    </Router>
  );
}

export default App;


// 1. wyświetlanie daty po polsku

