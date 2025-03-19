import logo from './logo.svg';
import './App.css';
import { getYear } from './Date';
import { createElement } from 'react';
function App() {
	const appDiv = createElement('div', { className: 'App' },
		createElement('header', { className: 'App-header' },
		  createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
		  createElement('p', null, // null means no attributes
			'Edit src/App.js and save to reload.',
			createElement('code', null, 'src/App.js')
		  ),
		  createElement('a', {
			className: 'App-link',
			href: 'https://reactjs.org',
			target: '_blank',
			rel: 'noopener noreferrer'
		  }, 'Learn React'),
		  createElement('div', { className: 'year-now' }, getYear())
		)
	  );

	  return appDiv;
}

export default App;
