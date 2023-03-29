import "./styles/styles.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Form from "./components/form";
import Pagination from "./components/pagination";
import Tags from "./components/tags";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Button />
      <Checkbox label="Label" />
      <Form />
      <Pagination />
      <Tags />
      <div className="container">Hello World</div>
    </div>
  );
};

export default App;
