import { Switch } from 'antd';
import styled from 'styled-components';

export const UISwitch = styled(Switch)`
  color: ${props => props.theme.colors.main};
  border: 2px solid lightGrey;
  box-sizing: content-box;
`;
