import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);

