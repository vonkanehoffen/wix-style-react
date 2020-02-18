import * as React from 'react';
import { OmitPolyfill } from '../common';
import { TooltipNewProps } from '../Tooltip';

export interface ImageViewerProps {
  imageUrl?: string;
  error?: boolean;
  errorMessage?: string;
  /** Error tooltp placement
   * @deprecated
   * @see tooltipProps
   */
  tooltipPlacement?: TooltipNewProps['placement'];
  tooltipProps?: OmitPolyfill<TooltipNewProps, 'content' | 'upgrade'>;
  showUpdateButton?: boolean;
  showRemoveButton?: boolean;
  onAddImage?: React.MouseEventHandler<HTMLElement>;
  onUpdateImage?: React.MouseEventHandler<HTMLElement>;
  onRemoveImage?: React.MouseEventHandler<HTMLElement>;
  onImageLoad?: React.ReactEventHandler<HTMLImageElement>;
  addImageInfo?: string;
  updateImageInfo?: string;
  removeImageInfo?: string;
  removeRoundedBorders?: boolean;
  width?: number | string;
  height?: number | string;
  disabled?: boolean;
}

export default class ImageViewer extends React.Component<ImageViewerProps> {}
