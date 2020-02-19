import * as React from 'react';

export interface RichTextInputAreaProps {
  dataHook?: string;
  initialValue?: string;
  placeholder?: string;
  disabled?: boolean;
  status?: 'error';
  statusMessage?: string;
  onChange?: Function;
  maxHeight?: string;
  texts?: texts;
}

export type texts = {
  toolbarButtons?: {
    boldButtonLabel?: string;
    italicButtonLabel?: string;
    underlineButtonLabel?: string;
    linkButtonLabel?: string;
    bulletedListButtonLabel?: string;
    numberedListButtonLabel?: string;
  };
  insertionForm?: {
    confirmButtonLabel?: string;
    cancelButtonLabel?: string;
    link?: {
      textInputPlaceholder?: string;
      urlInputPlaceholder?: string;
    };
  };
};

export default class RichTextInputArea extends React.PureComponent<
  RichTextInputAreaProps
> {
  setValue: (value: string) => void;
}
