import ReactDOM from 'react-dom/client'
import Theme from './components/Theme.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Theme />
  </BrowserRouter>
)
