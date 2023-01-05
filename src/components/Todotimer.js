import { useState, useEffect } from "react";

const Todotimer = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return counter + '초전'
};

export default Todotimer;