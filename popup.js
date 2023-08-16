// Get the melikCount from chrome.storage.
chrome.storage.sync.get("melikCount", function (data) {
  // Get the melikCount value.
  const melikCount = data.melikCount || 0;
  // Update the content of melik-count element to display the count.
  document.getElementById("melik-count").textContent += melikCount;
});
