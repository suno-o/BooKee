import styled from "styled-components"
import Image from "next/image"
import closeIcon from "@/assets/icons/close.png"

interface ModalTypes {
  isShowing: boolean;
  close: () => void;
  maxWidth: number;
  children: React.ReactNode;
}

const Modal = ({
  isShowing,
  close,
  maxWidth,
  children
}: ModalTypes) => isShowing ? (
  <ModalContainer onClick={() => close()}>
    <ModalContent onClick={(e) => e.stopPropagation()} maxWidth={maxWidth}>
      <CloseButton onClick={() => close()}>
        <Image src={closeIcon} width={18} height={18} alt='Close modal' />
      </CloseButton>
      {children}
    </ModalContent>
  </ModalContainer>
) : null;

export default Modal;


const ModalContainer = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
  animation: load-modal 200ms;

  ${props => props.theme.mediaQueries.md} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes load-modal {
    from { background-color: rgba(0,0,0,0); }
  }
`

const CloseButton = styled.button`
  z-index: 1;
  position: absolute;
  top: 16px;
  right: 16px;
  border: 0;
  background-color: transparent;
  margin: 0;
  padding: 0;
  width: 16px;
  cursor: pointer;
`

const ModalContent = styled.div<{maxWidth: number}>`
  position: relative;
  box-shadow: 1px 1px 5px 2px rgba(100,100,100,0.1);
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  ${({maxWidth}) => maxWidth ? `${maxWidth}px` : 'width: 100%'};
  height: 100%;
  overflow-y: auto;
  animation: load-content-side 200ms ease-out;

  ${props => props.theme.mediaQueries.md} {
    border-radius: 16px;
    ${({maxWidth}) => maxWidth && `max-width: ${maxWidth}px;`}
    height: auto;
    animation: load-content 200ms ease-out;
  }

  /* load animation */
  @keyframes load-content {
    from { transform: scale(1.02) translate(0, -36px) }
    to { transform: scale(1) }
  }
  @keyframes load-content-side {
    from { transform: translate(100%) }
  }
`