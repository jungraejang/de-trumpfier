let images = document.getElementsByTagName("img");
let pictures = document.getElementsByTagName("picture");


console.log("images", images);
console.log("pictures", pictures);
// console.log("pictures after", pictures);

for (let i = 0; i < images.length; i++) {
  chrome.runtime.sendMessage({ msg: "image", index: i }, ({ data, index }) => {
    let uncapBaseURI = images[index].baseURI.toLowerCase();
    let uncapAlt = images[index].alt ? images[index].alt.toLowerCase() : "";
    let uncapOuterHTML = images[index].outerHTML
      ? images[index].outerHTML.toLowerCase()
      : "";
    let uncapCurrentSrc = images[index].currentSrc
      ? images[index].currentSrc.toLowerCase()
      : "";
    // console.log("uncapBaseURI", uncapBaseURI)
    // console.log("uncapOuterHTML", uncapOuterHTML)

    // let uncapCurrentSrc = images[index].uncapCurrentSrc.toLowerCase()
    if (
      uncapBaseURI.includes("trump") ||
      uncapAlt.includes("trump") ||
      uncapOuterHTML.includes("trump") ||
      uncapCurrentSrc.includes("trump")
    ) {
      console.log("triggered content script");
      images[index].currentSrc = data.link;
      images[index].src = data.link;
      images[index].srcset = data.link;
    }
  });
}
