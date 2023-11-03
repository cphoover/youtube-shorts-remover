function removeUIElements() {
  // Remove the Shorts button from the sidebar
  const shortsButton = document.querySelector(
    'ytd-mini-guide-entry-renderer[aria-label="Shorts"]'
  );
  if (shortsButton) {
    shortsButton.remove();
  }

  // Remove the Shorts carousel drawer
  const carousels = document.querySelectorAll("ytd-rich-section-renderer");
  carousels.forEach((carousel) => {
    // Add specific condition to target Shorts carousel if needed
    carousel.remove();
  });
}

// Remove the UI elements on initial page load
removeUIElements();

// Use a MutationObserver to handle dynamic content/AJAX
const observer = new MutationObserver((mutations) => {
  let shouldRemoveElements = false;
  for (const mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      shouldRemoveElements = true;
      break;
    }
  }

  if (shouldRemoveElements) {
    removeUIElements();
  }
});

// Start observing the target node for configured mutations
observer.observe(document.body, { childList: true, subtree: true });
