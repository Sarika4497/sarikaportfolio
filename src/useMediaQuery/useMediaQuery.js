import { useEffect, useState } from "react";

function useMediaQuery(query, defaultsMatches = window.matchMedia(query)) {
    const [matches, setMatches] = useState (defaultsMatches)

    useEffect(
        () => {
            const media = window.matchMedia(query)

            const listener = () => setMatches(media.matches)
            if(media.matches !== matches) setMatches(media.matches)
            media.addListener(listener)

            return () => media.removeListener(listener)
        }, [query, matches])
    
        return matches;
}
export default useMediaQuery;