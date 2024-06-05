import styled from "styled-components";

export const NodeListContainer = styled.div`
  padding: 1rem;
  height: 100%;
  overflow: auto;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
`;

export const NodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #1b89e0;
  border-radius: 0.5rem;
  gap: 0.55rem;
  cursor: grab;
  background: #fff;
  .node-icon {
    width: 28px;
    height: 28px;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  .node-name {
    color: #1b89e0;
    font-size: 0.85rem;
  }
`;
