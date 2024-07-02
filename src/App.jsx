import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootswatch/dist/superhero/bootstrap.min.css';
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";


function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
