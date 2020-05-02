import { useState, useEffect } from "react";

export const useIntersection = ({ root = null, rootMargin = "0px", node, threshold }) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const options = {
        root,
        rootMargin,
        threshold
    }
    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) { setIntersecting(true) };
        })
    }
    useEffect(() => {
        if (!node.current) {
            return false;
        }
        const observer = new IntersectionObserver(callback, options);
        observer.observe(node.current)
        return () => {
            observer.disconnect();
        }
    })

    return isIntersecting;
}