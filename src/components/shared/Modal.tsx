import React, { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className="flex justify-center items-center absolute top-0 h-[100vh] w-full " onClick={props.toggle}>
          <div  className="block w-[70%] h-[70%] p-4 rounded-md bg-slate-300 shadow-2xl">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}