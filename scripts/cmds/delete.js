module.exports = {
  config: {
    name: "de",
    aliases: ["del"],
    author: "𝗦𝗵𝗔𝗻",
role: 2,
    category: "𝗕𝗢𝗧 𝗠𝗔𝗡𝗔𝗚𝗘𝗠𝗘𝗡𝗧"
  },

  onStart: async function ({ api, event, args }) {
    const fs = require('fs');
    const path = require('path');

    const fileName = args[0];

    if (!fileName) {
      api.sendMessage("Please provide a file name to delete.", event.threadID);
      return;
    }

    const filePath = path.join(__dirname, fileName);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);
        api.sendMessage(`🤷‍♂️ 𝙵𝚄𝙲𝙺 𝚈𝙾𝚄  𝚈𝙾𝚄 𝙰𝚁𝙴 𝚃𝚈𝙿𝙴 𝚆𝚁𝙾𝙽𝙶${fileName}.𝙵𝙸𝙻𝙴 𝙽𝙰𝙼𝙴`, event.threadID);
        return;
      }
      api.sendMessage(`✅ 𝙰𝚁𝚈𝙰𝙽 𝚈𝙾𝚄𝚁 𝚃𝙷𝙴 𝙲𝙼𝙳 𝙷𝙰𝚂 𝙱𝙴𝙴𝙽 𝙳𝙴𝙻𝙴𝚃𝙴𝚂 ➪ ( ${fileName} ) 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈`, event.threadID);
    });
  }
};
