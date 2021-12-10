import logo from "./logo.svg";
import "./App.css";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./pages/auth/LoginForm";
import RegistrationForm from "./pages/auth/RegistrationForm";
import CourseEnrolmentForm from "./pages/auth/CourseEnrolmentForm";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  };
  const theme = extendTheme({ colors });
  return (
    <ChakraProvider theme={theme}>
      <div className='App'>
        <FormikContainer />
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}
        {/* <CourseEnrolmentForm /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
