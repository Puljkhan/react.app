import "./styles/styles.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Form from "./components/form";
import Pagination from "./components/pagination";
import Tags from "./components/tags";
import Modal from "./components/modal";
import TransformExe from "./components/transform-exe";
import FlexformExe from "./components/flexform-exe";
import IconArrow from "./assets/icon-arrow";
import Input from "./components/input";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />

      <div className="container">
        <div className="container--component">
          <h2>Input</h2>
          <Input label="First name" />
          <Input label="Last name" rounded={true} />
        </div>

        <div className="container">
          <div className="container--component">
            <h2>Transform property exercise</h2>
            <TransformExe />
          </div>
          <div className="container--component">
            <h2>Button</h2>
            <Button value="Animate me" animate={true} icon={<IconArrow />} />
          </div>
          <div className="container--component">
            <h2>Checkbox</h2>
            <Checkbox label="Label" />
          </div>
          <div className="container--component">
            <h2>Form</h2>
            <Form />
          </div>
          <div className="container--component">
            <h2>Tags</h2>
            <Tags />
          </div>
          <div className="container--component">
            <h2>Modal</h2>
            <Modal />
          </div>
          <div className="container--component">
            <h2>Pagination</h2>
            <Pagination />
          </div>
          <div className="container--component">
            <h2>Flex</h2>
            <FlexformExe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
