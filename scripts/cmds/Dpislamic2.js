module.exports = {
	config: {
		name: "dpi",
		aliases: ["dpi",],
		version: "1.0",
		author: "ShAn",
		countDown: 5,
		role: 0,
		shortDescription: "send you a girl photos",
		longDescription: "Sand you a Islamic girl photos",
		category: "𝗜𝗠𝗔𝗚𝗘",
		guide: "{pn}"
	},

	onStart: async function ({ api, event, message }) {
	api.setMessageReaction("⏳", event.messageID, (err) => {}, true);
	 var link = [
"https://i.postimg.cc/cH0DhkxW/FB-IMG-1738609391173.jpg",
"https://i.postimg.cc/2jHHdxPp/FB-IMG-1738609395704.jpg",
"https://i.postimg.cc/zGh0rY35/FB-IMG-1738609400080.jpg",
"https://i.postimg.cc/zX606Gz0/FB-IMG-1738609404040.jpg",
"https://i.postimg.cc/5yPk65MV/FB-IMG-1738609407701.jpg",
"https://i.postimg.cc/8P50xYhP/FB-IMG-1738609411781.jpg",
"https://i.postimg.cc/zXccNkjw/FB-IMG-1738609417949.jpg",
"https://i.postimg.cc/rygHnTRP/FB-IMG-1738609422547.jpg",
"https://i.postimg.cc/wBhfhYdF/FB-IMG-1738609427181.jpg",
"https://i.postimg.cc/q7fDhMWz/FB-IMG-1738609434272.jpg",
"https://i.postimg.cc/QdKndW42/FB-IMG-1738609573012.jpg",
"https://i.postimg.cc/KjY0SK3s/FB-IMG-1738609578124.jpg",
"https://i.postimg.cc/9MbLnP07/FB-IMG-1738609581497.jpg",
"https://i.postimg.cc/VLdKKC8J/FB-IMG-1738609584789.jpg",
"https://i.postimg.cc/d3S4qq8Q/FB-IMG-1738609588194.jpg",
"https://i.postimg.cc/Kz2WVv5d/FB-IMG-1738609688977.jpg",
"https://i.postimg.cc/NFGzsJSD/FB-IMG-1738609693439.jpg",
"https://i.postimg.cc/gJH7PFSr/FB-IMG-1738609697770.jpg",
"https://i.postimg.cc/P5qT3Kqm/FB-IMG-1738609704167.jpg",
"https://i.postimg.cc/MHx8ym4f/FB-IMG-1738609707514.jpg",
"https://i.postimg.cc/52k1ZvHD/FB-IMG-1738609713380.jpg",
"https://i.postimg.cc/BQmGKDCt/FB-IMG-1738609717816.jpg",
"https://i.postimg.cc/3rCh3z4X/FB-IMG-1738609723617.jpg",
"https://i.postimg.cc/MTJkSYz3/FB-IMG-1738609730936.jpg",
"https://i.postimg.cc/g25FMWQW/FB-IMG-1738609734617.jpg",
"https://i.postimg.cc/BbNR29HR/FB-IMG-1738609738156.jpg",
"https://i.postimg.cc/vTGp1HgW/FB-IMG-1738609742040.jpg",
"https://i.postimg.cc/zDkssW6p/FB-IMG-1738609745797.jpg",
"https://i.postimg.cc/zfsNfrFj/FB-IMG-1738609900187.jpg",
"https://i.postimg.cc/B620LVhG/FB-IMG-1738609903517.jpg",
"https://i.postimg.cc/0NMxxQDj/FB-IMG-1738609906507.jpg",
"https://i.postimg.cc/4NfgywVr/FB-IMG-1738609911938.jpg",
"https://i.postimg.cc/D0g35bkj/FB-IMG-1738609915616.jpg",
"https://i.postimg.cc/DzXVHN3b/FB-IMG-1738609921320.jpg",
"https://i.postimg.cc/0yr1dQtn/FB-IMG-1738609927941.jpg",
"https://i.postimg.cc/4d6DNhdf/FB-IMG-1738609936732.jpg",
"https://i.postimg.cc/SxH36GYQ/FB-IMG-1738609940024.jpg",
"https://i.postimg.cc/Z5WXvQRD/FB-IMG-1738609943250.jpg",
"https://i.postimg.cc/XvFhQy9f/FB-IMG-1738609946712.jpg",
"https://i.postimg.cc/02WLQv8w/FB-IMG-1738610105166.jpg",
"https://i.postimg.cc/W1Stthd7/FB-IMG-1738610107335.jpg",
"https://i.postimg.cc/Yqq5M0w7/FB-IMG-1738610109450.jpg",
"https://i.postimg.cc/7L6hzw7r/FB-IMG-1738610129891.jpg",
"https://i.postimg.cc/pT5d0Cq0/FB-IMG-1738610131970.jpg",
"https://i.postimg.cc/pd6TY4Yh/FB-IMG-1738610134152.jpg",
"https://i.postimg.cc/mkQg4DxC/FB-IMG-1738610136333.jpg",
"https://i.postimg.cc/0jgyhS49/FB-IMG-1738610138797.jpg",
"https://i.postimg.cc/ZRNTPR52/FB-IMG-1738610140903.jpg",
"https://i.postimg.cc/qB8JzzYC/FB-IMG-1738610152449.jpg",
"https://i.postimg.cc/ZnhJwS9R/FB-IMG-1738610156547.jpg",
"https://i.postimg.cc/tT8sywsQ/FB-IMG-1738610159141.jpg",
"https://i.postimg.cc/j5DDptd4/FB-IMG-1738610161582.jpg",
"https://i.postimg.cc/kG8B5sSV/FB-IMG-1738610164288.jpg",
"https://i.postimg.cc/9f84grVf/FB-IMG-1738610166899.jpg",
"https://i.postimg.cc/9FdD5xVK/FB-IMG-1738610191106.jpg",
"https://i.postimg.cc/Qx3Mbp5b/FB-IMG-1738610305129.jpg",
"https://i.postimg.cc/v89BfP1T/FB-IMG-1738610307597.jpg",
"https://i.postimg.cc/MpsKqNLP/FB-IMG-1738610310474.jpg",
"https://i.postimg.cc/Jz7zwMpH/FB-IMG-1738610312889.jpg",
"https://i.postimg.cc/bvWy2bp1/FB-IMG-1738610315248.jpg",
"https://i.postimg.cc/bvsYJLcz/FB-IMG-1738610317323.jpg",
"https://i.postimg.cc/Xqc4hzFg/FB-IMG-1738610320086.jpg",
"https://i.postimg.cc/7Y85RvvS/FB-IMG-1738610322524.jpg",
"https://i.postimg.cc/J7ByKrF1/FB-IMG-1738610325475.jpg",
"https://i.postimg.cc/HkTVpQkx/FB-IMG-1738610327679.jpg",
"https://i.postimg.cc/BQBnwXBG/FB-IMG-1738610734607.jpg",
"https://i.postimg.cc/3xhDdsn3/FB-IMG-1738610739278.jpg"]

let img = link[Math.floor(Math.random()*link.length)]
api.setMessageReaction("✅", event.messageID, (err) => {}, true);
message.send({
	body: '「 EI NAW TMR DPZ😎  」',attachment: await global.utils.getStreamFromURL(img)
})
}
		 }
