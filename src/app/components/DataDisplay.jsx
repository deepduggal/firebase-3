'use client';
import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '@/app/init';

const getAllMessages = async () => {
  try {
    const messagesRef = collection(db, 'messages');
    const querySnapshot = await getDocs(messagesRef);
    const {messages} = querySnapshot.docs[0].data();
    return messages;
  } catch (err) {
    console.error('Failed to get all messages: ', err);
  }
};

export default function DataDisplay() {
  const [messages, setMessages] = useState([]);
  // console.log(messages)

  useEffect(() => {
    getAllMessages()
    .then(data => setMessages(data))
    .catch(err => console.error('Failed to get messages: ', err));
  }, []);

  return (
    <div>
      <h2 className='text-2xl font-bold py-4'>Messages</h2>
      {messages?.length && messages.map(m => {
        return (
          <div key={crypto.randomUUID()} className='bg-white p-2 rounded-sm'>
            <h3 className='text-sm font-light'>{m.name}</h3>
            <p className='text-md'>{m.message}</p>
          </div>
        );
      })}
    </div>
  )
}
