import "./App.css";
import Button from "./components/Button";
import Comment from "./components/Comment";

function App() {
  return (
    <main className="main-container">
      <div className="btn-container">
        <Button label="Click Me!" onClick={() => alert("Button Clicked!")} />
        <Button
          label="I am another Button!"
          onClick={() => alert("Button 2 Clicked!")}
        />
      </div>
      <div className="comment-container">
        <Comment name="Obet Dela Cruz" />
        <Comment email="delacruz_oasis@yahoo.com" />
        <Comment body="The greatest glory in living lies not in never falling, but in rising every time we fall" />
      </div>
    </main>
  );
}

export default App;
