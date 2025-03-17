import { useState } from "react";
import { flushSync } from "react-dom";

export default function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleClick = () => {
        flushSync(() => setCount((c) => c + 1));
        // Этот setState выполнится отдельно
        setText("Обновлено");
    };

    console.log("Рендер"); // Здесь будет два рендера

    return <button onClick={handleClick}>Нажми</button>;
}


//flushSync в React
// flushSync — это метод из react-dom, который принудительно выполняет
// обновление состояния немедленно, не дожидаясь завершения batch-обновлений.
//
// 📌 Когда использовать?
//
// Если нужно, чтобы одно обновление произошло до другого.
// Когда необходимо обновить состояние и сразу увидеть изменения в UI.