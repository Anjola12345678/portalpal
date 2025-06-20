// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { GoogleGenerativeAI } = require('@google/generative-ai');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// app.post('/chat', async (req, res) => {
//   const { message } = req.body;

//   if (!message) return res.status(400).json({ error: 'Message is required' });

//   try {
//     const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

//     const result = await model.generateContent(message);
//     const response = result.response;
//     const text = response.text();

//     res.json({ reply: text });
//   } catch (error) {
//     console.error('Gemini API error:', error);
//     res.status(500).json({ error: error.message || 'Internal server error' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });
