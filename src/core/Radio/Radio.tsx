import { Radio as AntdRadio } from 'antd';
import styled from 'styled-components';

export const Radio = styled(AntdRadio.Group)`
  color: ${props => props.theme.colors.font};
`;

export const RadioItem = styled(AntdRadio.Button)`
  color: ${props => props.theme.colors.font};
  background: ${props => props.theme.colors.bg};
`;
