
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Router';

function App() {
  return (
    <div className="App " data-theme="cupcake">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
