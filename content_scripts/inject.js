var loaded = false;
var loadingIntervalFrequency = 50;
var loadedIntervalFrequency = 1000;
let wl = [""];
let bl = [""];
let blt = false;
let wlt = false;


function main() {
    
    replace();
    if (!loaded && document.readyState === "complete") {
        loaded = true;
        clearInterval(loadingInterval);
        setInterval(replace, loadedIntervalFrequency);
    }
}

function replace(){
    
    document.title = document.title.replace(/u/g, "v").replace(/U/g, "V");

    var elements = document.body.getElementsByTagName("*");
    for (i = 0; i < elements.length; i++){
        element = elements[i];
		children = element.childNodes;
        for (n = 0; n < children.length; n++){
            child = children[n];
            if (child.nodeType === 3){
                const text = child.nodeValue;
                const newText = text.replace(/u/g, "v").replace(/U/g, "V");
	
				if (newText !== text) {
					element.replaceChild(document.createTextNode(newText), child);
				}
            }
        }
    }
    loadingInterval = setInterval(replace, loadingIntervalFrequency);
}

function onError(e) {
    document.body.style.border = "5px solid red";

    console.error(e);
}

function onGot(lists){
/*     const url = new URL(requestInfo.url);
    let clearToRun = false;
    document.body.style.border = "5px solid red";

    if (lists.whitelisttoggle){
        document.body.style.border = "5px solid red";
        clearToRun = Boolean(lists.whitelist.indexOf(url.hostname) + 1);
    } 
    else{
        
        clearToRun = !Boolean(lists.blacklist.indexOf(url.hostname) + 1);
    }
    if(clearToRun) main(); */
    if (data.whitelist) {
        document.body.style.border = "5px solid red";

        wl = data.whitelist;
    }
    if (data.blacklist) {
        bl = data.blacklist;
    }
    //if (data.whitelisttoggle) {
        wlt = data.whitelisttoggle;
    //}
    if (data.blacklisttoggle) {
        blt = data.blacklisttoggle;
    }
}

(function() {

    browser.storage.local.get().then(onGot, onError);
/*     browser.storage.local.get((data) => {
        if (data.whitelist) {
            document.body.style.border = "5px solid red";

            wl = data.whitelist;
        }
        if (data.blacklist) {
            bl = data.blacklist;
        }
        //if (data.whitelisttoggle) {
            wlt = data.whitelisttoggle;
        //}
        if (data.blacklisttoggle) {
            blt = data.blacklisttoggle;
        }
    }); */

/*      document.body.textContent = "";

    var header = document.createElement('h1');
    header.textContent = "This page has been eaten " + wl[0];
    document.body.appendChild(header); */
    //if (blt == true) document.body.style.border = "5px solid red";

    

/*     const url = new URL(requestInfo.url);
    let clearToRun = false;

    document.body.style.border = "5px solid red";


    if (wlt == true){
        document.body.style.border = "5px solid red";
        clearToRun = Boolean(whl.indexOf(url.hostname) + 1);
    } 
    else{
        document.body.style.border = "5px solid red";
        clearToRun = !Boolean(bl.indexOf(url.hostname) + 1);
    }
    document.body.style.border = "5px solid red";

    if(clearToRun) main(); */

    main();
    //let lists = browser.storage.local.get();
    //lists.then(onGot, onError);

})();