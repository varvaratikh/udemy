import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleClick = () => {
        setCount((c) => c + 1);
        setText("Обновлено");
        // React выполнит ОДИН рендер после обоих setState
    };

    console.log("Рендер"); // Выведется только один раз

    return <button onClick={handleClick}>Нажми</button>;
}
