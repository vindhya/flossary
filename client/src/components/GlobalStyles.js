import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	/* @import url('https://fonts.googleapis.com/css?family=Montserrat|Nunito:700&display=swap'); */
	@import url('https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap');
	* {
		font-family: 'Nunito', sans-serif;
		font-weight: 400;
	}
	html {
		position: relative;
  	min-height: 100%;
	}
`;
