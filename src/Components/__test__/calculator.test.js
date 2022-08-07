import ReactDOM from 'react-dom/client';
import Calculator from '../Calculator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);

  root.render(<Calculator />, div);
});
