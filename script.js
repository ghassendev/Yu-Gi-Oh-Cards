
  (async  () => {
    let response =
    await   fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    let json = await response.json()
    for (let i = 0; i < json.data.length; i++) {
            await delay();
            let image_small =json.data[i].card_images[0].image_url_small 
        let image_url = json.data[i].card_images[0].image_url
        let name = json.data[i].name
     
        document.getElementById("cards").innerHTML += ` <img class="card" src="${image_small}" alt="ok">  `
    }
})();

function delay() {
    return new Promise((resolve, reject) => {
            setTimeout(resolve, 250);
    });
}









 



