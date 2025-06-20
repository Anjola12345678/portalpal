import Question1 from './Question1';
import Question2 from './Question2';
const Question = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-[11%] w-full">
        <Question1 />
      </div>
      <div className="h-[89%] w-full overflow-y-auto">
        <Question2 />
      </div>
    </div>
  );
};

export default Question;
