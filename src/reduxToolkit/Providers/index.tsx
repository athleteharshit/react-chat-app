import { FC, useMemo } from "react";
import { Provider } from "react-redux";
import { getAppStore } from "../store/appStore";

const Providers: FC = ({ children }) => {
  const store = useMemo(() => getAppStore(), []);
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
