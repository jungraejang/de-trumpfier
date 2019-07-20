// chrome.runtime.onMessage.addListener((message, sender, senderResponse) => {
//   if(message.msg === "image") {
//     fetch('https://some-random-api.ml/pikachuimg')
//     .then(response => response.text())
//     .then(data => {
//       let dataObj = JSON.parse(data)
//       console.log("dataObj", dataObj)
//       senderResponse({data: dataObj, index: message.index})
//     })
//     .catch(error => {
//       console.log("error!!", error)
//     })
//     return true
//   }
// })

chrome.runtime.onMessage.addListener((message, sender, senderResponse) => {
  console.log("message.msg", message.msg)
  if(message.msg === "image") {
    let imgObj = {
      link: "https://media.giphy.com/media/K1wjOn6HImv7y/giphy.gif"
    }
    console.log("imgObj", imgObj)
    senderResponse({data: imgObj, index: message.index})
    return true
  }
})
