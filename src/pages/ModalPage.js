import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>This is an important agreement you need to accept.</p>
    </Modal>
  );
  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        {" "}
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu enim
        tempus, sodales lorem in, placerat est. Suspendisse potenti. Vivamus in
        lectus eleifend lectus ultricies ornare a at risus. Aenean volutpat sem
        tellus, sed ullamcorper risus mattis sed. Suspendisse congue libero
        nisi, at viverra lorem mollis sit amet. Etiam porta egestas cursus.
        Mauris tempor efficitur tempor. Nulla placerat et lectus sit amet
        congue.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu enim
        tempus, sodales lorem in, placerat est. Suspendisse potenti. Vivamus in
        lectus eleifend lectus ultricies ornare a at risus. Aenean volutpat sem
        tellus, sed ullamcorper risus mattis sed. Suspendisse congue libero
        nisi, at viverra lorem mollis sit amet. Etiam porta egestas cursus.
        Mauris tempor efficitur tempor. Nulla placerat et lectus sit amet
        congue.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu enim
        tempus, sodales lorem in, placerat est. Suspendisse potenti. Vivamus in
        lectus eleifend lectus ultricies ornare a at risus. Aenean volutpat sem
        tellus, sed ullamcorper risus mattis sed. Suspendisse congue libero
        nisi, at viverra lorem mollis sit amet. Etiam porta egestas cursus.
        Mauris tempor efficitur tempor. Nulla placerat et lectus sit amet
        congue.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu enim
        tempus, sodales lorem in, placerat est. Suspendisse potenti. Vivamus in
        lectus eleifend lectus ultricies ornare a at risus. Aenean volutpat sem
        tellus, sed ullamcorper risus mattis sed. Suspendisse congue libero
        nisi, at viverra lorem mollis sit amet. Etiam porta egestas cursus.
        Mauris tempor efficitur tempor. Nulla placerat et lectus sit amet
        congue.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu enim
        tempus, sodales lorem in, placerat est. Suspendisse potenti. Vivamus in
        lectus eleifend lectus ultricies ornare a at risus. Aenean volutpat sem
        tellus, sed ullamcorper risus mattis sed. Suspendisse congue libero
        nisi, at viverra lorem mollis sit amet. Etiam porta egestas cursus.
        Mauris tempor efficitur tempor. Nulla placerat et lectus sit amet
        congue.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu enim
        tempus, sodales lorem in, placerat est. Suspendisse potenti. Vivamus in
        lectus eleifend lectus ultricies ornare a at risus. Aenean volutpat sem
        tellus, sed ullamcorper risus mattis sed. Suspendisse congue libero
        nisi, at viverra lorem mollis sit amet. Etiam porta egestas cursus.
        Mauris tempor efficitur tempor. Nulla placerat et lectus sit amet
        congue.{" "}
      </p>
    </div>
  );
}
export default ModalPage;
