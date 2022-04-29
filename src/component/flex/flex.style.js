import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : "1rem")};
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justify }) => (justify ? justify : "start ")};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  flex-direction: ${({ dir }) => (dir ? dir : "row")};
`
