import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
  avatar: 'https://cdn.vox-cdn.com/thumbor/mXo5ObKpTbHYi9YslBy6YhfedT4=/95x601:1280x1460/1200x800/filters:focal(538x858:742x1062)/cdn.vox-cdn.com/uploads/chorus_image/image/66699060/mgidarccontentnick.comc008fa9d_d.0.png',
  name: 'Some Name',
  message: 'some textsome textsome textsome text',
  time: '22:00',
}


const altMessageData = {
  avatar: 'https://cdn.vox-cdn.com/thumbor/mXo5ObKpTbHYi9YslBy6YhfedT4=/95x601:1280x1460/1200x800/filters:focal(538x858:742x1062)/cdn.vox-cdn.com/uploads/chorus_image/image/66699060/mgidarccontentnick.comc008fa9d_d.0.png',
  name: 'Alexandr',
  message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  time: new Date().toLocaleTimeString(),
}

function HW1() {
  return (
    <div>
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <AlternativeMessage
        avatar={altMessageData.avatar}
        name={altMessageData.name}
        message={altMessageData.message}
        time={altMessageData.time}
      />
    </div>
  )
}

export default HW1
