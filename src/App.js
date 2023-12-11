import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import ToastDemo from './components/ToastDemo';
function App() {

  const router = createBrowserRouter([
    {path: "/home", element: <Home/>},
    {path: "/toastify-demo", element: <ToastDemo/>}
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
