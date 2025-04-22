import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";
import { RouterProvider } from "react-router-dom";
import Login from "./components/Login";

const appRotes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRotes}>
        <Body />
      </RouterProvider>
    </div>
  );
}

export default App;
