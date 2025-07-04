import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import ViewNote from "./components/ViewNote";
import './App.css'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Navbar />
          <Home />
        </div>

    },
    {
      path: "/notes",
      element:
        <div>
          <Navbar />
          <Notes />
        </div>
    },
    {
      path: "/notes/:id",
      element:
        <div>
          <Navbar />
          <ViewNote />
        </div>
    },
  ]
);

function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App




























