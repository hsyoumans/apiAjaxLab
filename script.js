

fetch("https://www.reddit.com/r/aww/.json", {'Access-Control-Allow-Origin': '*', })
.then(response => response.json())
.then(info => {
    let count = 1;
    
    for(let value of info.data.children){
        let awwImage = value.data.thumbnail;
        let awwLink = value.data.url;
        let awwTitle = value.data.name;
        
        let anchor = document.createElement('a');
        document.getElementById("aww").appendChild(anchor);
        anchor.id = ("aLink" + count);
        anchor.href = awwLink;

        let image = document.createElement('img');
        document.getElementById("aLink" + count).appendChild(image);
        image.src = awwImage;
        image.alt = awwTitle;

        let label = document.createElement('label');
        document.getElementById("aLink" + count).appendChild(label);
        label.innerText = awwTitle;
        
        if (count == 10) {
            break;
        }
        count++;
    }
});
