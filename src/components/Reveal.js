import { useInView } from "framer-motion";
import { useRef } from "react";

export const Reveal = ({ children }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "10px" });
    return <div ref={ref}>
        <div style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }} >
            {children}
        </div>
    </div>
}