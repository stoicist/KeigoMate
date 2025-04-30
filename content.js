console.log("Content script loaded");

// Function to create the SVG element based on svg.html
function createSparkleSVG() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "16");
  svg.setAttribute("height", "16");
  svg.setAttribute("viewBox", "0 0 16 16");
  svg.setAttribute("fill", "none");

  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute(
    "d",
    "M12.8281 1C12.8281 2.10747 11.7632 3.17235 10.6558 3.17235C11.7632 3.17235 12.8281 4.23724 12.8281 5.34471C12.8281 4.23724 13.893 3.17235 15.0005 3.17235C13.893 3.17235 12.8281 2.10747 12.8281 1Z"
  );
  path1.setAttribute("stroke", "currentColor");
  path1.setAttribute("stroke-width", "1.5");
  path1.setAttribute("stroke-linecap", "round");
  path1.setAttribute("stroke-linejoin", "round");
  svg.appendChild(path1);

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute(
    "d",
    "M13 12C13 12.5098 12.5098 13 12 13C12.5098 13 13 13.4902 13 14C13 13.4902 13.4902 13 14 13C13.4902 13 13 12.5098 13 12Z"
  );
  path2.setAttribute("stroke", "currentColor");
  path2.setAttribute("stroke-width", "1.5");
  path2.setAttribute("stroke-linecap", "round");
  path2.setAttribute("stroke-linejoin", "round");
  svg.appendChild(path2);

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute(
    "d",
    "M5.10285 3.89648C5.10285 5.98837 3.0914 7.99982 0.999512 7.99982C3.0914 7.99982 5.10285 10.0113 5.10285 12.1032C5.10285 10.0113 7.1143 7.99982 9.20619 7.99982C7.1143 7.99982 5.10285 5.98837 5.10285 3.89648Z"
  );
  path3.setAttribute("stroke", "currentColor");
  path3.setAttribute("stroke-width", "1.5");
  path3.setAttribute("stroke-linecap", "round");
  path3.setAttribute("stroke-linejoin", "round");
  svg.appendChild(path3);

  return svg;
}

// Function to create a clickable button containing the SVG
function createSparkleButton() {
  const button = document.createElement("button");
  button.classList.add("keigomate-button");
  const svg = createSparkleSVG();
  button.appendChild(svg);

  // Inline styles to make the button minimal and position it next to the input
  button.style.background = "none";
  button.style.border = "none";
  button.style.padding = "0";
  button.style.cursor = "pointer";
  button.style.marginLeft = "5px";
  button.style.verticalAlign = "middle"; // Aligns with input text

  // Placeholder click event (to be extended for text transformation)
  button.addEventListener("click", () => {
    console.log("Sparkle button clicked");
    // Future implementation: Transform text in the associated input
  });

  return button;
}

// Handle focus event to add the button
function handleFocusIn(event) {
  const target = event.target;
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
    const nextSibling = target.nextSibling;
    // Check if the button doesn't already exist
    if (!nextSibling || !nextSibling.classList.contains("keigomate-button")) {
      const button = createSparkleButton();
      target.parentNode.insertBefore(button, target.nextSibling);
    }
  }
}

// Handle blur event to remove the button
function handleFocusOut(event) {
  const target = event.target;
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
    const nextSibling = target.nextSibling;
    if (nextSibling && nextSibling.classList.contains("keigomate-button")) {
      nextSibling.remove();
    }
  }
}

// Add event listeners using event delegation
document.addEventListener("focusin", handleFocusIn);
document.addEventListener("focusout", handleFocusOut);