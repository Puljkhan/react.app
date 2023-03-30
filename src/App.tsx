import "./styles/styles.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Form from "./components/form";
import Pagination from "./components/pagination";
import Tags from "./components/tags";
import Modal from "./components/modal";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="container">
        <Button />
        <Checkbox label="Label" />
        <Form />
        <Tags />
        <Modal />
        <Pagination />
      </div>
    </div>
  );
};

export default App;
