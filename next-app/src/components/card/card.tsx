import styled from '@emotion/styled';
import xw from 'xwind';

const CardContainer = styled.div(xw`bg-white rounded text-green-800`);

export interface CardProps {
  headerText: string;
}

export const Card: React.FC<CardProps> = ({ headerText }) => (
  <CardContainer>{headerText}</CardContainer>
);
