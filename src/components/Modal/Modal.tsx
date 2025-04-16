import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "motion/react";

type ModalProps = {
    style: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    modalName?: string;
}

const Modal = ({ style, isOpen, onClose, children, modalName }: ModalProps) => {
    const modalRef = useRef(null);

    useOnClickOutside(modalRef, onClose);

    return (
        createPortal(
            <AnimatePresence>
                {isOpen && (
                    <div
                        className={`bg-black/30 inset-0 fixed z-5`}
                    >
                        <motion.div
                            ref={modalRef}
                            className={`bg-white p-5 rounded-xl absolute z-10 overflow-y-auto ${style}`}
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 200, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-10 h-10 bg-black/20 rounded-full cursor-pointer absolute top-2 right-2"
                            >
                                <FontAwesomeIcon icon={faXmark} size="lg" />
                            </button>
                            {children}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            , document.body, modalName)
    )
}

export default Modal;