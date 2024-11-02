// import { css } from '../styled-system/css';
import { ThemeProvider } from "next-themes";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <ThemeProvider attribute='class' disableTransitionOnChange>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
