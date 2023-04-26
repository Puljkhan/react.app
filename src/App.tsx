import "./styles/styles.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exe from "./pages/exe";
import Ispit from "./pages/ispit";
import Home from "./pages/home";
import Mlinar from "./pages/mlinar";
import Fave from "./pages/fave";
import Varijable from "./pages/varijable";
import Petlje from "./pages/petlje";
import Vjezba2604 from "./pages/vjezba2604";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/mlinar",
      element: <Mlinar />,
    },
    {
      path: "/vjezba2604",
      element: <Vjezba2604 />,
    },
    {
      path: "/exe",
      element: <Exe />,
    },
    {
      path: "/ispit",
      element: <Ispit />,
    },
    {
      path: "/petlje",
      element: <Petlje />,
    },
    {
      path: "/fave",
      element: <Fave />,
    },
    {
      path: "/varijable",
      element: <Varijable />,
    },
  ]);

  return (
    <div className="App">
      <Header />

      <RouterProvider router={router} />

      <Navigation />
    </div>
  );
};

export default App;
