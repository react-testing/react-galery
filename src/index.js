import React from "react";
import ReactDOM from "react-dom";
import Routers from "./Client/Components/Routers";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Routers />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
