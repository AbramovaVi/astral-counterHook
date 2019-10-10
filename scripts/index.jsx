import React from 'react';
import { render } from 'react-dom';

import '../styles/index';

import App from './components/App';
import Counter from './components/Counter';

render(<Counter />, document.getElementById('root'));
