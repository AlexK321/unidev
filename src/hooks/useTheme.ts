import { useStore } from '../store';

export const useTheme = () => {
  const { appStateStore } = useStore();

  return appStateStore.theme;
};
