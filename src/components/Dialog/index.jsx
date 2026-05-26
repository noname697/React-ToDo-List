import { useRef } from "react";
import "./dialog.style.css";

export const Dialog = () => {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className="">
        <button onClick={closeDialog} autoFocus>
          Close
        </button>
        <p>papapapa</p>
      </dialog>
      <button onClick={openDialog}>Show the dialog</button>
    </>
  );
};
