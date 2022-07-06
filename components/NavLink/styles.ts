import styled from "styled-components";

import * as TextStyles from "../Text/styles";

const NavLink = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  & > ${TextStyles.Text} {
    font-weight: var(--fw-bold);
    text-align: left;
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: var(--spacing-2x);
  }

  &::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 3px;
    border-radius: 1.5px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export { NavLink };
