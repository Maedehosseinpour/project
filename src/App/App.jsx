
import { useEffect, useState } from "react";
import Router from "../routes/Router";
import { MantineProvider } from "@mantine/core";
import handleTheme from "../core/services/handleTheme";
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@mantine/core/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import '@mantine/charts/styles.css'


function App() {
  const client = new QueryClient()
  // const client = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: true,  cacheTime:6000, }, mutations:{}}})


  useEffect(() => {
    handleTheme();
    Aos.init();
  }, []);
  return (
    <>

    <Provider store={store}>
        <QueryClientProvider client={client}>
          <MantineProvider>
            <Router />
          </MantineProvider>           
        </QueryClientProvider>
    </Provider>


    </>
  );
}

export default App;
