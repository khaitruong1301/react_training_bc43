import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoClass from './Components/DemoClass';
import Home from './Components/HomeComponent/Home';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoLogin from './State/DemoLogin';
import DemoState from './State/DemoState';
import StyleDemo from './StyleDemo/StyleDemo';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoPageLogin from './State/DemoPageLogin';

import './assets/scss/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <Home /> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent /> */}
    {/* <DemoLogin /> */}
    {/* <DemoState /> */}
    {/* <StyleDemo /> */}
    {/* <RenderWithMap /> */}
    <DemoPageLogin />
    <p className='color-red'>abc 123</p>
  </div>
);
