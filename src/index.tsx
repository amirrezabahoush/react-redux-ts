//react
import React from "react";
import ReactDOM from "react-dom";
//redux
import { Provider } from "react-redux";
import store from "./redux/store";
//antd
import { ConfigProvider } from "antd";
import faIR from "antd/es/locale/fa_IR";
//styled-components
import { ThemeProvider } from "styled-components";
import theme from "theme/index";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConfigProvider locale={faIR} direction="rtl">
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</ConfigProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
