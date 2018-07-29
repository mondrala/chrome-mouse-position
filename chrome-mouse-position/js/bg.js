

 chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){

chrome.tabs.getSelected(null, function(tab) {
	
	
	
 
        var tabUrl = tab.url;

		        if (tabUrl == 'chrome://extensions/') {
					console.log('nothing to do at this page');
	
		}
		
		
		else{
			
			
			chrome.tabs.executeScript(null, {file: "js/position.js"});
			
				
			
			}
		
   
    });
	  });





