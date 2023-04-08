import { Route, Routes } from 'react-router-dom';
import ROUTES from './constants';

const App = () => {
  return (
    <Routes>
      {
        ROUTES.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))
      }
    </Routes>
  )
}

export default App
