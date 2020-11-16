import { FC } from "react";
import { Provider } from "react-redux";
import { useStore } from "@/store";
import { AnalyticsWrapper } from "@/analytics";
import Layout from "@/components/Layout";

interface Props {
  Component: any;
  pageProps: any;
}

const App: FC<Props> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <AnalyticsWrapper>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AnalyticsWrapper>
  );
};

export default App;
