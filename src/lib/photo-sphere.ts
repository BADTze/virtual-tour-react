import { IMarker, IMarkerCustom, MarkerType } from '@/types';

export const decideMarkerType = (markerConfig: MarkerType): string => {
  if (markerConfig.markerType === 'pin') return '/images/pin-blue.png';

  if (markerConfig.markerType === 'enter') return '/images/log-in.png';

  if (markerConfig.markerType === 'exit') return '/images/log-out.png';

  if (markerConfig.markerType === 'walk') {
    if (markerConfig.arrowType === 'up') return '/images/arrow-up.png';

    if (markerConfig.arrowType === 'down') return '/images/arrow-down.png';

    if (markerConfig.arrowType === 'left') return '/images/arrow-up-left.png';

    if (markerConfig.arrowType === 'right') return '/images/arrow-up-right.png';
  }

  return '/images/pin-blue.png';
};

export const transformMarkerConfig = (markerConfig: IMarkerCustom): IMarker => {
  const marker: IMarker = {
    anchor: 'bottom center',
    id: markerConfig.id,
    image: decideMarkerType(markerConfig),
    opacity: 1,
    position: markerConfig.position,
    rotation: 0,
    size: {
      height: 32,
      width: 32,
    },
    tooltip: {
      content: markerConfig.tooltip.content,
      trigger: markerConfig.tooltip.trigger,
    },
    visible: true,
    zIndex: 1,
    hoverScale: 1,
  };

  return marker;
};
