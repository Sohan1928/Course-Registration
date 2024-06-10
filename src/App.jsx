import "./App.css";
import Cart from "./Components/Cart";
import Courses from "./Components/Courses";
import Header from "./Components/Header";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <div className="grid grid-cols-12 ">
        <div className="border col-span-10">
          <Courses></Courses>
        </div>
        <div className="col-span-2">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
