import * as React from 'react';

export interface ImageViewerProps {
  imageUrl?: string;
  error?: boolean;
  errorMessage?: string;
  /** Error tooltp placement
   * @deprecated
   * @see tooltipProps
   */
  tooltipPlacement?: any; // TODO: replace with TooltipProps["placement"];
  tooltipProps?: any; // TODO: replace with OmitPolyfill<TooltipProps, "content">;
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
