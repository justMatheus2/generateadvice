async function getAdvice() {
    const adviceEl = document.getElementById("advice");

    adviceEl.textContent = "Wait, Loading...";
    adviceEl.classList.add("loading");

    try {
        const response = await  fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
        throw new Error("Error to find an advice:");
    }

    const data = await response.json();
    const advice = data.slip.advice;

    adviceEl.textContent = advice;
    } catch (error) {
        console.error("Error to find an advice:", error);
        adviceEl.textContent = "Something wrong!";
    } finally {
        adviceEl.classList.remove("loading");
    }
}