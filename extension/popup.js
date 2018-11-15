// Vanilla
document.addEventListener('DOMContentLoaded', function() {

    $(function () {
    $('#categoryCounts').click(function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "categoryCounts" });
      });
    });

    $('#makeSortable').click(function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "makeSortable" });
      });
    });
  });

  
});