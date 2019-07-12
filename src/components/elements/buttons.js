import styled from '@emotion/styled';
export const Button = styled.button`
  width: 100%;
  min-width: 24rem;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  padding: 1.6rem 2.4rem;
  text-align: center;

  margin-left: ${props => props.onRight && '2.4rem'};
  margin-right: ${props => props.onLeft && '2.4rem'};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;

    &:first-child {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 2.4rem;
    }

    &:last-child {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 2.4rem;
    }
  }
`;

export const GhostButton = styled(Button)`
  border: 2px solid;
  font-weight: 400;
  border-color: ${props => props.primaryColor || '#e5f8ff'};
  background-color: rgba(196, 196, 196, 0);
  color: ${props => props.primaryColor || '#e5f8ff'};
  transition: all ease 0.3s;

  &:hover {
    border: 3px solid;
    font-weight: bolder;
    border-color: ${props => props.hoverColor || '#002432'};
    color: ${props => props.hoverColor || '#002432'};
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  ${props =>
    props.animated &&
    'transition: all 0.5s ease-in-out; :hover {box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px; transform: translate3D(0, -1px, 0) scale(1.04)}'}
`;

export const GhostButtonSolid = styled(Button)`
  color: #002432;
  background: #e5f8ff;
  transition: all ease 0.5s;

  &:hover {
    background: #002432;
    color: #e5f8ff;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const SolidButton = styled(Button)`
  color: #0091c9;
  background: #e5f8ff;
  border: 2px solid #0091c9;
  transition: all ease 0.5s;
  text-transform: none;

  &:hover {
    background: #0091c9;
    color: #e5f8ff;
    border: 2px solid #0091c9;
    border-radius: 20px;
  }
`;
