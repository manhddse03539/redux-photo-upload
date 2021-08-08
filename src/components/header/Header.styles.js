import styled from 'styled-components';

export default styled.div`
  font-size: 24px;
  a {
    text-decoration: none;
    color: #000;
  }

  .brand {
    font-weight: bold;
  }
  .auth {
    a {
      margin-left: 5px;
    }
  }
  .auth:hover {
    opacity: 0.5;
  }
`;
