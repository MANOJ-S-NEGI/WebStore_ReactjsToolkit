import styled from 'styled-components';

import Button from '../button/button';

export const PaymentFormContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 150px;
  min-width: 500px;
  margin-bottom:10px;
`;

export const PaymentButton = styled(Button)`
  margin-top: 32px;
  border:none;
  background:none;
`;
