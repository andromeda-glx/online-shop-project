import React, { useEffect } from "react";

// TODO: fix event's type (currently any)

const useOnClickOutside = (ref: React.RefObject<HTMLInputElement>, handleOnClickOutside: (e: MouseEvent | TouchEvent) => void) => {
    
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)){
                return;
            }
            handleOnClickOutside(event);
        }

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        }
    }, [ref, handleOnClickOutside]);
};

export default useOnClickOutside;