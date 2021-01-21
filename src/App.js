import Accordion from "./components/Accordion/Accordion";
import ColorInput from "./components/ColorInput";
import Search from "./components/search/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend JavaScript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite JavaScript library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

function App() {
  return (
    <div className="App">
      {/* <Accordion items={items} /> */}
      <Search />
      <ColorInput />
    </div>
  );
}

export default App;
