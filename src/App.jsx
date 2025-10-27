import Header from "./components/Header";
import CourseGenerator from "./components/CourseGenerator";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <CourseGenerator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
