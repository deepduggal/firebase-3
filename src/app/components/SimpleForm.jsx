'use client';
import React, { useEffect, useState } from 'react';
import {collection, doc, getDocs, limit, query, updateDoc} from 'firebase/firestore'; 
import { db } from '@/app/init';

/**
 * Send a message to the Firestore database
 * @param {*} name 
 * @param {*} message 
 */
const sendMessage = async (name, message) => {
    try {
      const messagesCollectionRef = collection(db, 'messages');
      
      const querySnapshot = await getDocs(query(messagesCollectionRef, limit(1)));
      // Get the first document in the collection
      const {id} = querySnapshot.docs[0];
      const {messages} = querySnapshot.docs[0].data();
      const docRef = doc(messagesCollectionRef, id);

      // Update the document with the new message
      await updateDoc(docRef, {
        messages: [
          ...messages,
          {
            name,
            message,
          },
        ],
      });
    } catch (err) {
      console.error('Failed to send message: ', err);
    }
};


export default function SimpleForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(name, message);
    } catch (error) {
      console.error('Failed to submit form: ', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Send Message</h2>
      <form id="chat" className="flex flex-col space-y-4" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border p-1"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="border p-1"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  )
}
