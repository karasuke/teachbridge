import { AppRoutes } from "./Routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";


export const UsersApp = () => {


  return (
    <Provider store={store}>

      <AppRoutes />

    </Provider>

  )

};
