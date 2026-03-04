var url;
var kunciurl = 'true';

if (localStorage.getItem('url')) {
    url = localStorage.getItem('url');
} else {
    url = 'https://cbt.sman1srengat.test.co.id/';
}

if (url) {
    document.getElementById('url').value = url;
} else {
    document.getElementById('url').value = '';
}

function run() {
    if (kunciurl === "true") {
        url = "https://cbt.sman1srengat.test.co.id/";
    } else {
        url = document.getElementById('url').value;
    }
    
    localStorage.setItem('url',url);

    document.getElementById("content").innerHTML = '<iframe id="iframe" src="'+url+'?examkey=#" frameborder="0"></iframe>';

}

setTimeout(function() {
    if (kunciurl === "true") {
        run()
    }
    document.getElementById('bg').style.display = 'none';
}, 3000);
