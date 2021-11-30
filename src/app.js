import { useState } from "react";

import "./app.scss";

import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = (formParams) => {
    console.log(formParams);
    const data = {
      count: 2,
      results: [
        { name: "fake thing 1", url: "http://fakethings.com/1" },
        { name: "fake thing 2", url: "http://fakethings.com/2" }
      ]
    };
    setData(data);
    setRequestParams({ ...requestParams, ...formParams });
  };

  return (
    <>
      <Header />
      <Form
        setRequestParams={setRequestParams}
        requestParams={requestParams}
        handleApiCall={callApi}
      />
      <Results method={requestParams.method} url={requestParams.url} />
      <Footer />
    </>
  );
}

export default App;
