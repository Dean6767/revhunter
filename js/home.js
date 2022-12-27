const header = document.querySelector("header");
const footer_text = document.querySelector(".footer_links .item p");


let stopped = 0;
window.onscroll = () => {
    if(window.pageYOffset < stopped){
        header.style.top = "0";
        stopped = window.pageYOffset;
        return;
    }
    if(window.pageYOffset >= 895){
        header.style.top = "-100%";
    }else {
        header.style.top = "0";
    }
    stopped = window.pageYOffset;
}


function showLinks(text) {
    var urlRegex = /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w\-]*)?(\?[^\s]*)?/gi;
    return text.toString().replace(urlRegex, function(url) {
        if(url.length > 40){
            var link = url.substring(0, 20) + "...";
        } else {
            link = url;
        }
        if(url.substring(0, 4) == "http"){
            return '<a href="' + url + '" target="_blank">' + link + ' <i class="fas fa-external-link-alt"></i></a>';
        }
        return '<a href="//' + url + '" target="_blank">' + link + ' <i class="fas fa-external-link-alt"></i></a>';
    });
  };

footer_text.innerHTML = showLinks(footer_text.innerHTML);