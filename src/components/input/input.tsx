import { useId } from 'react';
import type { ForwardedRef } from 'react';

import { withForwardRef } from 'utils';

import styles from './input-styles';

import type { InputProps } from './input-types';

function Component(props: InputProps, ref: ForwardedRef<HTMLTextAreaElement>) {
  const {
    id,
    size,
    name,
    error,
    value,
    resize,
    loading,
    required,
    className,
    labelProps,
    helperProps,
    endAdornment,
    startAdornment,
    containerProps,
    inputContainerProps,
    fixedHeightWithHelperText,
    label: labelProp,
    helper: helperProp,
    disabled: disabledProp,
    ...restOfProps
  } = props;

  const idByUseId = useId().replaceAll(/\W+/g, '');

  const htmlFor = id || name || idByUseId;
  const disabled = disabledProp || loading;
  const hasValue = value && !disabled && !error;

  const { input, helper, label, container, adornment, labelRequired, inputContainer } = styles({
    disabled,
    error,
    loading,
    resize,
    size,
  });

  const labelOverrideClasses = [
    hasValue || startAdornment || restOfProps.placeholder ? styles.slots.labelAsFieldset : '',
  ].filter(Boolean);

  return (
    <div {...containerProps} className={container({ className })}>
      {labelProp ? (
        <label
          htmlFor={htmlFor}
          {...labelProps}
          className={label({ className: [labelOverrideClasses, labelProps?.className] })}>
          {labelProp}

          {required ? <span className={labelRequired()}>*</span> : undefined}
        </label>
      ) : undefined}

      <div {...inputContainerProps} className={inputContainer({ className: inputContainerProps?.className })}>
        {startAdornment ? <div className={adornment()}>{startAdornment}</div> : undefined}

        <textarea
          name={name}
          id={htmlFor}
          value={value}
          disabled={disabled}
          required={required}
          aria-label={typeof labelProp === 'string' ? labelProp : undefined}
          className={input()}
          autoComplete="off"
          rows={1}
          {...restOfProps}
          ref={ref}
        />

        {endAdornment ? <div className={adornment()}>{endAdornment}</div> : undefined}
      </div>

      {helperProp || fixedHeightWithHelperText ? (
        <div {...helperProps} className={helper({ className: helperProps?.className })}>
          {helperProp}
        </div>
      ) : undefined}
    </div>
  );
}

Component.displayName = 'Input';

const Input = withForwardRef(Component);

export default Input;
