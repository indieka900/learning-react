/* eslint-disable no-unused-vars */
import { useEffect } from "react";

export function useResizeWindow() {
    
    useEffect(() => {

        const resizeEventHandler = (e) => {
                console.log('Resizing windoe');
            }

        window.addEventListener('resize',resizeEventHandler)

        //cleanUp function
        return () => {
            window.removeEventListener("resize",resizeEventHandler)
        }
    },[])
}