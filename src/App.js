import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { List } from "./components/list";
import { DetalesBond } from './components/detalesBond';
const router = createBrowserRouter([
  {
    path: '/',
    element: <List/>,

  },
  {
    path: "/detales",
    element: <DetalesBond/>
  }
])
function App() {
  return (
    <div>
      <RouterProvider router = {router} />
     {/* Project
     <List/> */}
    </div>
  );
}

export default App;
