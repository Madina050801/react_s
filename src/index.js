import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Container from './Container.jsx'
import Firstline from './Firstline.jsx'

ReactDOM.render(
  <React.StrictMode>
<Firstline>
    <Container>
    <App/>
    </Container><Container>
    <App/>
    </Container><Container>
    <App/>
    </Container>
    </Firstline>
  </React.StrictMode>,
  document.getElementById('root')
);