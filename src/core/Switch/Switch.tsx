import { FC } from 'react';

import { UISwitch } from './Switch.styles';

interface ISwitch {
  checkedChildren?: string;
  unCheckedChildren?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: 'default' | 'small';
}

/**
 * This is Switch component (title in storybook)
 */
export const Switch: FC<ISwitch> = props => {
  console.log('Switch');

  return <UISwitch {...props} />;
};
