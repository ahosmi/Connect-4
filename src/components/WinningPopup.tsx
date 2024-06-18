import React from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

interface WinningPopupProps {
  winner: string;
  onClose: () => void;
}

const PopupWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-align: center;
`;

const WinnerMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;

const CloseButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const WinningPopup: React.FC<WinningPopupProps> = ({ winner, onClose }) => {
  const [width, height] = useWindowSize();

  return (
    <div>
      <Confetti width={width} height={height} />
      <PopupWrapper>
        <WinnerMessage>{winner} is the winner!</WinnerMessage>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </PopupWrapper>
    </div>
  );
};

export default WinningPopup;
