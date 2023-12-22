import { RootStoreContext } from './store/root-store-context';
import RootStore from './store/root-store';
import { AppRoutes } from './pages';
import { AppErrorBoundary } from './components/ErrorBoundary';
import { GlobalStyles } from './theme';

const App = () => (
  <AppErrorBoundary>
    <RootStoreContext.Provider value={new RootStore()}>
      <AppRoutes/>
      <GlobalStyles />
    </RootStoreContext.Provider>
  </AppErrorBoundary>
);

export default App;
