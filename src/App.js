import Router from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        limit={1}
        theme="dark"
        pauseOnFocusLoss={false}
        autoClose={3000}
      />
    </>
  );
}

export default App;
