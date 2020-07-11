import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  min-width:500px;
  background: #995ff04f;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(158, 102, 241, 0.69);
  text-align: center;
  p {
    font-size: 1rem;
    color: #995ff0;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 80%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? '#a2de96'
        : !correct && userClicked
        ? '#e8505b'
        : '#995ff0'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;