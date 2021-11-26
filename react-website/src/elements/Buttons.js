import styled from "styled-components";

const SwitchContainer = styled.div`
  margin: 10px;
  position: relative;
  background-color: ${(props) => props.theme.accent};
  width: 60px;
  height: 30px;
  color: white;
  border-radius: 25px;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 5px;
  transition: all 0.3s ease;
`;

const Switch = styled.div`
  position: absolute;
  left: ${(props) => props.theme.left};
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 25px;
  line-height: 30px;
  transition: all 0.3s ease;
`;

export const Toggle = (props) => {
  return (
    <SwitchContainer className="switchcontainer" onClick={props.onClick}>
      <Switch />
    </SwitchContainer>
  );
};
