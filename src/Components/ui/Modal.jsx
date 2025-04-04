import { createContext, useContext, useRef, useState } from "react";

export const ModalContext = createContext();

function Modal({ children }) {
  const [opendId, setOpenId] = useState("");
  const open = setOpenId;
  const close = () => setOpenId("");

  return (
    <ModalContext.Provider value={{ open, close, opendId, setOpenId }}>
      {children}
    </ModalContext.Provider>
  );
}

function Toggle({ children, opens }) {
  const { setOpenId } = useContext(ModalContext);

  return <div onClick={() => setOpenId(opens)}>{children}</div>;
}

function Window({ children, name }) {
  const { opendId } = useContext(ModalContext);

  if (opendId !== name) return;

  return <div>{children}</div>;
}

Modal.Toggle = Toggle;
Modal.Window = Window;
export default Modal;
