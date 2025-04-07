import { useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

/* eslint-disable react/prop-types */
export default function Modal({ style, isOpen, onClose, children, modalName }) {
    const modalRef = useRef(null);

    useOnClickOutside(modalRef, onClose);

    if (!isOpen) {
        return null;
    }
    return (
        createPortal(
            <div className={`bg-black/30 inset-0 fixed z-5`}>
                <div ref={modalRef} className={`bg-white p-5 rounded-xl absolute z-10 overflow-y-auto ${style}`}>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-10 h-10 bg-black/20 rounded-full cursor-pointer absolute top-2 right-2"
                    >
                        <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                    {children}
                </div>
            </div>
        , document.body, modalName)
    )
}
