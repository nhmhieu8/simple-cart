import CartList from "./CartList";
import { AppProvider } from "./context";
import NavBar from "./NavBar";
import "./style.scss";
function App() {
  return (
    <>
      <AppProvider>
        <NavBar />
        <CartList />
      </AppProvider>
    </>
  );
}

export default App;
