const targetWords = [ "kötü kelimeler"];

function makeTargetWordsTransparent() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  while ((node = walker.nextNode())) {
    const textContent = node.textContent.toLowerCase();
    for (const targetWord of targetWords) {
      const lowerTargetWord = targetWord.toLowerCase();
      if (textContent.includes(lowerTargetWord)) {
        const parentElement = node.parentElement;
        parentElement.style.opacity = 0; // Make the parent element (containing the text) semi-transparent
        break;
      }
    }
  }
}

window.addEventListener("load", makeTargetWordsTransparent);
