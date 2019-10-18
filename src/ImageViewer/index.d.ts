import * as React from 'react';

export interface ImageViewerProps {
  imageUrl?: string,
  error?: boolean,
  errorMessage?: string,
  tooltipPlacement?: string,
  tooltipProps?: {},
  showUpdateButton?: boolean,
  showRemoveButton?: boolean,
  onAddImage?: Function
  onUpdateImage?: Function
  onRemoveImage?: Function
  onImageLoad?: Function
  addImageInfo?: string,
  updateImageInfo?: string,
  removeImageInfo?: string,
  removeRoundedBorders?: boolean,
  width?: number | string,
  height?: number | string,
  disabled?: boolean,
}

export default class ImageViewer extends React.PureComponent<ImageViewerProps> {
}
