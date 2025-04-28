import { useCallback, useEffect, useRef, useState } from 'react'

const Expensivecalc = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const prevfunction = useRef(null);

    const Expensivecalculation = useCallback(() => {
        console.log("Inside expensive task function");
        let result = 0;
        for (let i = 0; i <= 1000000000; i++) {   // Delay occure due to this loop
            result += i;
        }
        return result;
    }, [count])


    useEffect(() => {
        if (prevfunction.current) {
            if (prevfunction.current === Expensivecalculation) {
                console.log("Function not re-created");
            } else {
                console.log("Function got created");
            }

        }
        else {
            prevfunction.current = Expensivecalculation;
        }
    }, [Expensivecalculation])

    return (
        <>
            <div className="card">
                <input
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='type something'
                />
                <p>Expensive count result: {Expensivecalculation()}</p>
                <button onClick={() => setCount(count + 1)}>Increament Count</button>
            </div>
        </>
    )
}

export default Expensivecalc


// using useCallback, we can freeze any function's re-rendering/re-creation as per its dependencies