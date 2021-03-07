import { memo, useState } from "react";
import ModalUpload from "../Modals/ModalUpload";
import Btn from "./Btn";
import { BiUpload } from "react-icons/bi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((c) => !c);
  }

  return (
    <>
      <nav className="nav">
        <Btn onClick={toggleOpen} style={{ width: "auto" }}>
          Subir imagen
          <BiUpload style={{ marginLeft: "5px", fontSize: "1rem" }} />
        </Btn>
      </nav>
      <ModalUpload {...{ isOpen, toggleOpen }} />
    </>
  );
}

export default memo(Navbar);
