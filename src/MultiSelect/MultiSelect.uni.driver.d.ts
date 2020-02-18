import { InputWithOptionsUniDriver } from '../InputWithOptions/InputWithOptions.private.uni.driver';
import { TextSize, TextWeight } from '../Text';
import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { TagUniDriver } from '../Tag/Tag.private.uni.driver';

export interface MultiSelectUniDriver
  extends __WSR.BaseComponents.OmitPolyfill<
    InputWithOptionsUniDriver,
    'driver'
  > {
  driver: {
    getMaxHeight: () => Promise<any>;
    clickOnInputWrapper: () => Promise<void>;
    inputWrapperHasFocus: () => Promise<any>;
    inputWrapperHasError: () => Promise<any>;
    inputWrapperIsDisabled: () => Promise<any>;
    numberOfTags: () => Promise<number>;
    getTagLabelAt: (index: number) => Promise<string>;
    getTagDriverByTagId: (
      tagId: string,
    ) => Promise<
      TagUniDriver & {
        isCloseButtonSmall: () => Promise<boolean>;
        isCloseButtonLarge: () => Promise<boolean>;
        getTextSize: () => TextSize;
        getTextWeight: () => TextWeight;
        isClickable: () => Promise<boolean>;
      }
    >;
    customSuffixExists: () => Promise<any>;
  } & Pick<InputWithOptionsUniDriver, 'driver'> &
    BaseUniDriver;
}
