import styled from 'styled-components';

interface NavProps {
  position: string;
}

export const NavHeader = styled.div<NavProps>`
display:flex;
position: ${NavProps => NavProps.position};
justify-content:space-between;
align-items:center;
background:${NavProps => (NavProps.position == 'fixed' ? '#5f3c17' : 'none')};
transition:1.5s;

padding-left:30px;

    width: -webkit-fill-available;
    z-index: 1;
    color:white;
    font-size:20px;
    font-weight:700;

     button {
        width: 100px;
        margin-left: 10px;
      }
        div
        {
            padding-top:7px;
        }
        @media screen and (max-width: 1024px) {
            img{
                visibility:hidden;
           
            }
           
          
             }
       
}
`;
export const NavMenu = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    padding-right: 32px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 64px;
  flex-grow: 3;

  a {
    padding: 50px;
    height: 113px;
  }

  a:hover {
    background: darkgoldenrod;
    border-bottom-left-radius: 45px;
    border-top-left-radius: 125px;
    border-top-right-radius: 100px;
    border-end-end-radius: 100px;
    transition: 1s;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const LoginBtn = styled.a`
  background: darkgoldenrod;
  border-bottom-left-radius: 45px;
  border-top-left-radius: 125px;
  border-top-right-radius: 100px;
  border-end-end-radius: 100px;
  height: 113px;
`;
