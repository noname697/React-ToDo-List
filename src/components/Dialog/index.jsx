import { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";

export const Dialog = ({ children, isOpen, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    isOpen ? openDialog() : closeDialog();
  }, [isOpen]);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <div className="btn-close-wrapper">
          <button onClick={onClose} autoFocus className="btn-close">
            <IconClose />
          </button>
        </div>
        {children}
      </dialog>
    </>
  );
};
