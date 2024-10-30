import React, { useEffect, useRef, useMemo } from 'react';

interface RatingRingProps {
  percent: number;
}

export const RatingRing: React.FC<RatingRingProps> = ({ percent }) => {
  const colors = {
    small: { main: '#e01919', sub: '#300b0b' },
    medium: { main: '#d2d531', sub: '#423d0f' },
    high: { main: '#21d07a', sub: '#204529' },
  };

  const colorSet = useMemo(() => {
    return percent <= 30
      ? colors.small
      : percent <= 70
        ? colors.medium
        : colors.high;
  }, [percent]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const radius = 16;
    const lineWidth = 2;
    const center = 20;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(center, center, radius, 0, 2 * Math.PI);
    context.strokeStyle = colorSet.sub;
    context.lineWidth = lineWidth;
    context.stroke();

    const endAngle = (2 * Math.PI * percent) / 100;
    context.beginPath();
    context.arc(
      center,
      center,
      radius,
      -0.5 * Math.PI,
      endAngle - 0.5 * Math.PI
    );

    context.strokeStyle = colorSet.main;
    context.lineWidth = lineWidth;
    context.lineCap = 'round';
    context.stroke();
  }, [percent]);

  return (
    <div className="relative w-[40px] h-[40px] rounded-full bg-zinc-800 ">
      <canvas ref={canvasRef} width="38" height="38"></canvas>
      <div className="absolute text-[14px] font-bold top-0 left-0 w-[42px] h-[42px] flex justify-center items-center text-white after:content-['%'] after:text-[5px] after:mt-[-5px] after:font-medium">
        {percent}
      </div>
    </div>
  );
};
