/* eslint-disable react/prop-types */
export default function CheckoutModal({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="bg-black/30 inset-0 fixed z-5 flex justify-center items-center">
            <div className="bg-white p-15 rounded-xl relative">
                <button
                    type="button"
                    onClick={onClose}
                    className="w-10 h-10 bg-black/20 rounded-full cursor-pointer absolute top-2 right-2"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    )
}
