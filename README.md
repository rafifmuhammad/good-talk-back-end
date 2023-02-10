# good-talk-back-end
Soon

# Demo API

GET All Users
[http://admserver1.site:5000/users](http://admserver1.site:5000/users)

GET Single User
[http://admserver1.site:5000/users/p309WkYxOrVrNkvO](http://admserver1.site:5000/users/p309WkYxOrVrNkvO)

POST
http://admserver1.site:5000/users

data: 
{
  "username": "",
  "email": "",
  "name": "",
  "password": "",
  "dateOfBirth": "",
  "phoneNumber": ""
}

PUT
http://admserver1.site:5000/users/user_id

DELETE
http://admserver1.site:5000/users/user_id

GET All Chats
[http://admserver1.site:5000/chats](http://admserver1.site:5000/chats)

GET Single Chats
http://admserver1.site:5000/chats/chat_id

GET Single Message
http://admserver1.site:5000/chats/messages/message_id

POST a Message
http://admserver1.site:5000/chats

data:
{
  senderId: "",
  message: ""
}
