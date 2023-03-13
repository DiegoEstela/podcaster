import styled from 'styled-components';
import * as styleGlobal from '../../../app/global/styles'

export const Table = styled.table`
  margin-top: 16px;
  text-transform: normal;
  font-weight: normal;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  padding: 8px;
  border-bottom: 1px solid ${styleGlobal.muted};
`
export const Th = styled.th`
  font-weight: normal;
  max-width: 200px;
  padding: 4px;
  text-align: start;
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ThLink = styled.p`
padding: 4px;
font-weight: normal;
text-align: start;
.link{
  text-decoration: none;
  font-weight: bold;
  color: ${styleGlobal.primary};

}
`;

export const Tr = styled.tr`
  :hover {
    cursor: pointer;
  }
  :nth-child(even) {
    background: #f1f1f1;
  }
`;

export const Td = styled(Th)`
  padding: 4px;
  transition: all 100ms;
`;

