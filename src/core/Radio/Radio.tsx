import { Radio as AntdRadio } from 'antd';
import styled from 'styled-components';

/**
 * This is Radio component
 */
export const Radio = styled(AntdRadio.Group)`
  // color: ${props => props?.theme?.colors?.font || 'green'};
`;

export const RadioItem = styled(AntdRadio.Button)`
  color: ${props => props.theme.colors.font};
  background: ${props => props.theme.colors.bg};
`;
