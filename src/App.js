import "./App.css";
import StarRating from "./StartRating";
import StopWatch from "./StopWatch";

function App() {
  return (
    <>
      <StopWatch />
      <StarRating totalStars={5} />
    </>
  );
}

export default App;
