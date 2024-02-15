import { useEffect } from "react";

export function useOnClickOutside(
    ref: React.RefObject<any>,
    handler: (event: MouseEvent | TouchEvent) => void
) {
    useEffect(
        () => {
            const listener = (event: MouseEvent | TouchEvent) => {
                // Do nothing if clicking ref's element or descendent elements
                if (
                    !ref.current ||
                    ref.current.contains(event.target)
                    // ||event.type === "keydown"
                ) {
                    return;
                }
                console.log("custom");
                handler(event);
            };

            // console.log("custom");
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because the passed-in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}
