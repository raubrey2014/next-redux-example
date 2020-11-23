import { FC } from "react";
import { Provider } from "react-redux";
import { useStore } from "@/store";
import { AnalyticsWrapper } from "@/analytics";
import { ChatWrapper } from "@/chat";

interface Props {
  Component: any;
  pageProps: any;
}

const App: FC<Props> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <AnalyticsWrapper>
      <ChatWrapper>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChatWrapper>
    </AnalyticsWrapper>
  );
};

export default App;
