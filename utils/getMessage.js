const { indexRouter, messages } = require("../routes/indexRouter")

function getMessageByid(id) {
    return messages.find(message => message.id == id)
}

module.exports = getMessageByid