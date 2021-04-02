import React, { memo, useRef, useEffect, useLayoutEffect } from "react";

function usePrevious(value) {
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export function SingleOTPInputComponent(props) {
    const { focus, autoFocus, ...rest } = props;
    const inputRef = useRef(null);
    const prevFocus = usePrevious(!!focus);
    useLayoutEffect(() => {
      if (inputRef.current) {
        if (focus && autoFocus) {
          inputRef.current.focus();
        }
        if (focus && autoFocus && focus !== prevFocus) {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }
    }, [autoFocus, focus, prevFocus]);
  
    return <input ref={inputRef} {...rest} />;
  }
  
  const SingleOTPInput = memo(SingleOTPInputComponent);
  export default SingleOTPInput;