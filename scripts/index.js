// Dom elements

const containerElement = document.querySelector(".container");

// Event Listeners

containerElement.addEventListener("change", rangeChangeHandler);

// Utilities

function changeProgress(progressNode, progressLabelNode, value) {
  const translateValue = value - 100;
  progressNode.style.transform = `translateX(${translateValue}%)`;
  if (progressLabelNode) {
    progressLabelNode.textContent = value + "%";
  }
}

// Functions

function rangeChangeHandler(e) {
  if (e?.target?.nodeName === "INPUT") {
    const cardElement = e.target.closest(".card");
    const progressBar = cardElement.querySelector(".progress__bar");
    const progressLabel = cardElement.querySelector(".progress__label");
    changeProgress(progressBar, progressLabel, e.target.value);
  }
}
