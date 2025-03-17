import { useState } from "react";
import { flushSync } from "react-dom";

export default function App() {
    const [status, setStatus] = useState("Ожидание...");

    const handleClick = () => {
        flushSync(() => setStatus("Загрузка...")); // UI обновится сразу
        expensiveOperation(); // Имитация долгого процесса
    };

    const expensiveOperation = () => {
        let sum = 0;
        for (let i = 0; i < 1e9; i++) {
            sum += i;
        }
        setStatus("Готово!"); // После завершения операции
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button onClick={handleClick} style={{ fontSize: "20px", padding: "10px 20px" }}>
                {status}
            </button>
        </div>
    );
}


//🔹 Без flushSync статус "Загрузка..." может не появиться сразу, так как браузер будет занят.
// 🔹 С flushSync React обновит UI перед началом тяжелого вычисления.