import styled from 'styled-components/native';

export const MenuWrapper = styled.View`
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

export const TopContainer = styled.View`
  background-color: #fff;
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
`;

export const TopBarWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.multiple(2)} 0;
`;

export const LogoContainer = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(12)};
`;

export const LogoImage = styled.Image`
  margin-top: ${({ theme }) => theme.spacing.multiple(2)};
  width: ${({ theme }) => theme.spacing.multiple(12)};
  height: ${({ theme }) => theme.spacing.multiple(6)};
  resize-mode: contain;
`;

export const SearchBarWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const SwiperWrapper = styled.View`
  background-color: #ffffff;
  align-items: center;
`;

export const SwiperWrapper2 = styled.View`
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const xxx = styled.View`
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
  position: absolute;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const BasketButtonWrapper = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: flex-end;
  padding-bottom: ${({ theme }) => theme.spacing.multiple(2)};
  padding-left: ${({ theme }) => theme.spacing.multiple(3)};
  padding-right: ${({ theme }) => theme.spacing.multiple(3)};
`;
