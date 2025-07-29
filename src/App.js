import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Team from './components/Team/Team';
import TeamDetails from './components/TeamDetails/TeamDetails';
import About from './Pages/About'; // if it exists
import HomePage from './Pages/Home';
import NotFound from './Pages/NotFound';
import LikedUser from './components/LikedUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />         
          <Route path="/team" element={<Team />} />
          <Route path="/profile" element={<TeamDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/liked-user" element={<LikedUser />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;