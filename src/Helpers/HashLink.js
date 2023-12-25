import {useEffect, useMemo} from "react";
import {useLocation} from "react-router-dom";

const ScrollToHashElement = () => {
    let location = useLocation();

    let hashElement = useMemo(() => {
        let hash = location.hash;
        const removeHashCharacter = (str) => {
            return str.slice(1);
        };

        if (hash) {
            return document.getElementById(removeHashCharacter(hash));
        } else {
            return null;
        }
    }, [location]);

    useEffect(() => {
        if (hashElement) {
            hashElement.scrollIntoView({
                behavior: "smooth",
                // block: "end",
                inline: "nearest",
            });
        }
    }, [hashElement]);

    return null;
};

export default ScrollToHashElement;