import { Provider } from "react-redux";
import store from "./states/store";

import InboxScreen from "./components/InboxScreen/InboxScreen";

import "./index.css";

export default function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
