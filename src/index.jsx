import React from 'react';
import { render } from 'react-dom';

import App from './App';
import {SnackbarProvider} from "notistack";

const div = document.createElement('div');
const portalDiv = document.createElement('div');
portalDiv.id = 'portalDiv';

document.body.appendChild(div);
document.body.appendChild(portalDiv);

render(<App />, div);
