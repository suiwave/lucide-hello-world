import SNSMenu from "./components/SNSMenu";
import AlcoholMenu from "./components/AlcoholMenu";
import NazoForm from "./components/NazoForm";

const App = () => (
  <div className="bg-gray-100 min-h-screen p-6 flex flex-col gap-1">
    <SNSMenu />
    <AlcoholMenu />
    <NazoForm />
  </div>
);

export default App;
