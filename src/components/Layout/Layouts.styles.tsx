import { Footer as AntdFooter, Header as AntdHeader, Content } from "antd/es/layout/layout";
import styled from "styled-components";
import { device } from "../../constants";

export const ContextWrapper = styled(Content)`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.bg};
  padding: 16px;
  max-width: 100vw;
  overflow-x: hidden;

  @media ${device.tablet} { 
    overflow-x: auto;
  }
`;

export const Footer = styled(AntdFooter)`
  background: ${props => props.theme.colors.bg};
`;

export const Header = styled(AntdHeader)`
  background: ${props => props.theme.colors.bg};
  border-bottom: 1px solid lightgrey;
  height: auto;
  padding: 16px;
`;

export const RadioContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;