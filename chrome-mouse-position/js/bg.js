


// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tabs) {
// code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab


 // for (var i = 0; i < tabs.length; i++) {
	 
// var tabUrl = tabs[i].url;
        // if (tabUrl == 'chrome://extensions/') {
		// console.log('nothing');
	
		// }
		
		
		// else{
			
			
			// chrome.tabs.executeScript(tabId, {file: "js/position.js"});

			
			// }

 // }

// });


 chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
      //... whatever other stuff you were doing anyway
chrome.tabs.getSelected(null, function(tab) {
	
	
	
        // tab = tab.id;
        var tabUrl = tab.url;

		        if (tabUrl == 'chrome://extensions/') {
					console.log('nothing');
	
		}
		
		
		else{
			
			
			chrome.tabs.executeScript(null, {file: "js/position.js"});
			
						// chrome.tabs.executeScript(tabId, {file: "js/position.js"});


			
			}
		
        // alert(tab.url);
    });
	  });






// document.addEventListener("DOMContentLoaded", function () {
    // document.getElementById('tmp-clipboard').onclick = function () {
        // chrome.tabs.executeScript(null, {
            // file: "js/position.js"
        // });
//}
// });