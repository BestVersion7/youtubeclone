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

export function useMarginLeft(showDrawer: boolean, showDesktopDrawer: boolean) {
    const handleResize = () => {
        let widthMargin;
        const desktopAsideMini: any =
            document.getElementById("desktop-aside-mini");
        const asideSmall = document.getElementById("aside-small");
        const desktopAside: any = document.getElementById("desktop-aside");
        const mainHome: any = document.querySelector("#main-home");

        if (asideSmall) {
            const style = window.getComputedStyle(asideSmall, null);
            if (style.display === "block") {
                if (desktopAsideMini) {
                    const style = window.getComputedStyle(
                        desktopAsideMini,
                        null
                    );
                    if (style.display === "none") {
                        widthMargin = "0px";
                    } else {
                        widthMargin = "55px";
                    }
                }
            } else {
                if (desktopAside) {
                    widthMargin = "245px";
                } else {
                    widthMargin = "55px";
                }
            }
        }

        mainHome.style.marginLeft = widthMargin;
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [showDrawer, showDesktopDrawer]);
}
