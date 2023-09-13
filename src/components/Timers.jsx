import Button from './Button';
import { useState, useEffect } from 'react';
import Label from './Label';

function Timers() {
    const [count, setCount] = useState(0);
    const [calculate, setCalculate] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []); // -> running setiap di render, jika ditambahkan array kosong akan running hanya saat pertama kali render

    useEffect(() => {
        setCalculate(() => count * 2);
    }, [count]); // -> akan running setiap dependency berubah

    return (
        <>
            <Label> Count: {count}</Label>
            <Button onClick={() => setCount(count + 1)}>Tambah</Button>
            <Label> Calculation: {calculate} </Label>
        </>
    );
}

export default Timers;
