import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <AppRoutes />
    </ThemeProvider>
    
  )
}

export default App;
