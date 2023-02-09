const {
  getAllChatsHandler,
  getChatByIdHandler,
  addChatHandler,
  deleteChatByIdHandler,
} = require('../handler/chatsHandler');

const chatRoute = [
  {
    method: 'GET',
    path: '/chats',
    handler: getAllChatsHandler,
  },
  {
    method: 'GET',
    path: '/chats/{chatId}',
    handler: getChatByIdHandler,
  },
  {
    method: 'POST',
    path: '/chats',
    handler: addChatHandler,
  },
  {
    method: 'DELETE',
    path: '/chats/{chatId}',
    handler: deleteChatByIdHandler,
  },
];

module.exports = chatRoute;
