import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Bootstrap from "./pages/bootstrap/bootstrap";
import Breweries from "./pages/breweries";
import Europe from "./pages/europe";
import EuropeCountry from "./pages/europe-country";
import Exe from "./pages/exe";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Mlinar from "./pages/mlinar";
import Petlje from "./pages/petlje";
import Pokemons from "./pages/pokemons";
import Todo from "./pages/todo";
import Varijable from "./pages/varijable";
import Vjezba0305 from "./pages/vjezba0305";
import Vjezba1505 from "./pages/vjezba1505";
import Vjezba2604 from "./pages/vjezba2604";
import Vjezba2804 from "./pages/vjezba2804";

import "./styles/styles.scss";
import Instagram from "./pages/instagram/instagram";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ispit",
      element: <Ispit />,
    },
    {
      path: "/exe",
      element: <Exe />,
    },
    {
      path: "/instagram",
      element: <Instagram />,
    },
    {
      path: "/mlinar",
      element: <Mlinar />,
    },
    {
      path: "/varijable",
      element: <Varijable />,
    },
    {
      path: "/petlje",
      element: <Petlje />,
    },
    {
      path: "/vjezba2604",
      element: <Vjezba2604 />,
    },
    {
      path: "/vjezba2804",
      element: <Vjezba2804 />,
    },
    {
      path: "/vjezba0305",
      element: <Vjezba0305 />,
    },
    {
      path: "/breweries",
      element: <Breweries />,
    },
    {
      path: "/pokemons",
      element: <Pokemons />,
    },
    {
      path: "/europe",
      element: <Europe />,
    },
    {
      path: "/europe/:capitalId",
      element: <EuropeCountry />,
    },
    {
      path: "/vjezba1505",
      element: <Vjezba1505 />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path: "/bootstrap",
      element: <Bootstrap />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
