
import './App.css'
import router from './Router/router'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
    </>
  )
}

export default App
