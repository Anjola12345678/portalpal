import { ChatOpenAI } from 'langchain/openai';
import { ChatPromptTemplate, HumanMessage, SystemMessage } from 'langchain/core/messages';
import { StringOutputParser } from 'langchain/core/output_parsers';

const model = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const promptTemplate = ChatPromptTemplate.fromMessages([
  new SystemMessage('You are a helpful assistant for XYZ University.'),
  new HumanMessage('{input}'),
]);

const chain = promptTemplate.pipe(model).pipe(new StringOutputParser());

export const getChatbotResponse = async (input) => {
  const response = await chain.invoke({ input });
  return response;
};

// "start": "react-scripts start"
