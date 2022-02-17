import styled, { keyframes } from 'styled-components';

const AnimationShow = keyframes`
from{
  opacity:0;
  transform:translateY(50px)
}
to{
  opacity:1;
  transform:translateY(0)
}
`;

const AnimationTopDown = keyframes`
from{
  opacity:0;
  transform:translateY(-20px)
}
to{
  opacity:1;
  transform:translateY(0%)
}
`;

const AnimationOpacity = keyframes`
from{
  opacity:0;
}
to{
  opacity:1;
}
`;

const AnimationScale = keyframes`
from{
  opacity:0;
  transform: scale(.95);
}
to{
  opacity:1;
  transform: scale(1);
}
`;

type AnimationProps = {
  time: number;
  delay?: number;
  easing?: string;
};

export const BottomToUp = styled.div`
  opacity: 0;
  animation: ${AnimationShow} ${({ time }: AnimationProps) => time}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
  ${({ easing }) => (easing ? `animation-timing-function: ${easing};` : '')};
`;

export const TopToDown = styled.div`
  opacity: 0;
  animation: ${AnimationTopDown} ${({ time }: AnimationProps) => time}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
  ${({ easing }) => (easing ? `animation-timing-function: ${easing};` : '')};
`;

export const FadeIn = styled.div`
  opacity: 0;
  animation: ${AnimationOpacity} ${({ time }: AnimationProps) => time}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
  ${({ easing }) => (easing ? `animation-timing-function: ${easing};` : '')};
`;

export const Scaling = styled.div`
  opacity: 0;
  animation: ${AnimationScale} ${({ time }: AnimationProps) => time}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
  ${({ easing }) => (easing ? `animation-timing-function: ${easing};` : '')};
`;

export const createAnimationComponent = (keyframesAnimation: any) => styled.div`
  opacity: 0;
  animation: ${keyframesAnimation} ${({ time }: AnimationProps) => time}s;
  animation-delay: ${({ delay }: AnimationProps) => delay || 0}s;
  animation-fill-mode: forwards;
  ${({ easing }: AnimationProps) =>
    easing ? `animation-timing-function: ${easing};` : ''};
`;
