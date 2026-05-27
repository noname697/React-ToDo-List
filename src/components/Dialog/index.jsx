import { useEffect, useRef } from "react";
import "./dialog.style.css";

export const Dialog = ({ isOpen, onClose }) => {
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
      <dialog ref={dialogRef} className="">
        <button onClick={onClose} autoFocus>
          Close
        </button>
        <p>papapapa</p>
      </dialog>
    </>
  );
};
