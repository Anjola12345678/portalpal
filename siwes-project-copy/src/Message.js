import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMessages, setFilteredMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, 'messages'));
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() });
      });
      setMessages(msgs);
      setFilteredMessages(msgs);
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    const filtered = messages.filter((msg) =>
      [msg.name, msg.email, msg.matric].some((field) =>
        field?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredMessages(filtered);
  }, [searchTerm, messages]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Submitted Messages</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by name, email, or matric number..."
        className="w-full max-w-lg mb-6 p-3 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredMessages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {filteredMessages.map((msg) => (
            <li key={msg.id} className="border p-4 rounded shadow">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Matric No:</strong> {msg.matric}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p><strong>Time:</strong> {msg.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Message;
