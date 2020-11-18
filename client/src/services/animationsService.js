const calculateRem = (c, unit) => {
  return `${c * unit}rem`;
};

const calculateAnimation = (travel, unit, speed) => {
  const relativePositions = travel.path.map((slice) => {
    return {
      top: calculateRem(slice.coordinate.y, unit),
      left: calculateRem(slice.coordinate.x, unit),
    };
  });

  const frodoAnimation = [
    { opacity: 0, ...relativePositions[0] },
    { opacity: 1, ...relativePositions[0] },
    ...relativePositions,
    { opacity: 1, ...relativePositions[relativePositions.length - 1] },
  ];

  const frodoTiming = {
    duration: 100 * speed * frodoAnimation.length,
    iterations: 1,
    fill: 'forwards',
    endDelay: 100 * speed,
  };

  return [frodoAnimation, frodoTiming];
};

export default calculateAnimation;
