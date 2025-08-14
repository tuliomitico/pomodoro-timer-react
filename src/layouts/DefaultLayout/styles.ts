import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const LayoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LayoutBody = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
`;

export const LayoutMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LayoutAside = styled.aside``;

export const LayoutFooter = styled.footer``;
