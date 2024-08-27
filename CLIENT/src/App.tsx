import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import { _wait } from "./lib/utils/wait";

const HomePage = lazy(() => _wait(import("./pages/Home")));
const EditorPage = lazy(() => _wait(import("./pages/Editor")));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/custom-editor" element={<EditorPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
