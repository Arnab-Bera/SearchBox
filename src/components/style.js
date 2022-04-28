import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
`;

export const InputWrap = styled.div`
  width: 90%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem 0 1rem;
  border-radius: 0.8rem;
  background: tomato;
  box-sizing: border-box;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  border-bottom-left-radius: ${props => props.theme.borderRadiusBottmLeft};
  border-bottom-right-radius: ${props => props.theme.borderRadiusBottmRight};
  ${props =>
    props.selected &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `};
`;

const theme = {
  borderRadiusBottmLeft: "0.8rem",
  borderRadiusBottmRight: "0.8rem"
};

export const Input = styled.input`
  font-size: 1.8rem;
  color: white;
  width: 100%;
  height: 100%;
  padding: 0;
  background: tomato;
  border: none;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }
`;

export const Result = styled.div`
  width: 90%;
  min-height: 11rem;
  height: auto;
  max-height: 100%;
  margin-top: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const ListData = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 0px solid #f00;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  overflow-y: auto;
  height: auto;
  max-height: 100%;
  margin-top: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid #eee;
  :first-of-type {
    border-top: none;
  }
`;

export const Title = styled.span`
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
`;
