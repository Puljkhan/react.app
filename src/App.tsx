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
import Vjezba2804 from "./pages/vjezba2804";
import Vjezba0305 from "./pages/vjezba0305";
import Breweries from "./pages/breweries";
import Pokemons from "./pages/pokemons";
import Europe from "./pages/europe";
import EuropeCountry from "./pages/europe-country";
import Countries from "./pages/countries";
import Chat from "./pages/chat";
import Vjezba1505 from "./pages/vjezba1505";
import Todo from "./pages/todo";
import Vjezba1905 from "./pages/vjezba1905";
import Running from "./pages/running";
import Bootstrap from "./pages/bootstrap";

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
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/running",
      element: <Running />,
    },
    {
      path: "/bootstrap",
      element: <Bootstrap />,
    },
    {
      path: "/pokemons",
      element: <Pokemons />,
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
      path: "/vjezba1905",
      element: <Vjezba1905 />,
    },
    {
      path: "/europecountry",
      element: <EuropeCountry />,
    },
    {
      path: "/countries",
      element: <Countries />,
    },
    {
      path: "/vjezba0305",
      element: <Vjezba0305 />,
    },
    {
      path: "/europe",
      element: <Europe />,
    },
    {
      path: "/breweries",
      element: <Breweries />,
    },
    {
      path: "/vjezba2804",
      element: <Vjezba2804 />,
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
