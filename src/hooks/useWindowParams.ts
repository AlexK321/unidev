import { useEffect, useState } from 'react';
import { maxSize } from '../constants';

export enum Devices {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

interface IWindowParams {
  width: number;
  height: number;
  device: Devices | null;
}

export const useWindowParams = (): IWindowParams => {
  const [windowParams, setWindowParams] = useState<IWindowParams>({
    width: 0,
    height: 0,
    device: null,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let device = Devices.DESKTOP;

      if (width < Number(maxSize.mobile)) {
        device = Devices.MOBILE;
      } else if (width < +maxSize.tablet) {
        device = Devices.TABLET;
      } else {
        device = Devices.DESKTOP;
      }

      setWindowParams({
        width,
        height: window.innerHeight,
        device,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowParams;
};
