import Modal from "../components/modal";

const Running = () => {
  return (
    <div className="container">
      <section className="hidden">
        <Modal></Modal>
      </section>
      <div className="overlay"></div>
      <button className="btn">100 Meters</button>
    </div>
  );
};
export default Running;
