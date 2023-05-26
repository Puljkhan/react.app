import { Form } from "react-router-dom";
import IconArrow from "../assets/icon-arrow";
import Button from "../components/button";
import Card from "../components/card";
import Card2 from "../components/card-exe";
import Checkbox from "../components/checkbox";
import FlexformExe from "../components/flexform-exe";
import Input from "../components/input";
import ModalComponents from "../components/modalcomponent";
import Pagination from "../components/pagination";
import Tags from "../components/tags";
import TransformExe from "../components/transform-exe";

const Exe = () => {
  return (
    <>
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
          <ModalComponents />
        </div>
        <div className="container--component">
          <h2>Pagination</h2>
          <Pagination />
        </div>
        <div className="container--component">
          <h2>Flex</h2>
          <FlexformExe />
        </div>
        <div className="container--component">
          <div className="card__grid">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="container--component">
          <div className="card__grid">
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
        </div>
        <div className="container">
          <div className="container--component">
            <h2>Input</h2>
            <Input label="First name" />
            <Input label="Last name" rounded={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Exe;
