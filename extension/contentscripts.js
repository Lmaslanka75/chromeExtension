
chrome.reuntime.onload.addListener(function (request, sender, sendResponse) {

  //PART 1
  //send a message to event page
  if(request.action ==="categoryCounts"){
    writeUserAffinity();
    alert('hi');
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "courseCounts" });
    });

  }


  //PART 2
  if (request.action == "makeSortable" && window.location.href.match()) {

  }

});

chrome.runtime.sendMessage({action:"show"});