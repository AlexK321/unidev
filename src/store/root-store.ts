import { appStateStore } from './subStores/appStateStore';
import { chartStore } from './subStores/chartStore';
import { tableStore } from './subStores/tableStore';
import { userStore } from './subStores/userStore';

class RootStore {
  tableStore = tableStore;
  userStore = userStore;
  chartStore = chartStore;
  appStateStore = appStateStore;
}

export default RootStore;
