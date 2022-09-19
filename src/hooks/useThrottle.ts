import {useRef} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

export function useThrottle<T>(value: T, throttleMs = 100): T {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastExecuted = useRef(Date.now());
    useEffect(() => {
        if (Date.now() > lastExecuted.current + throttleMs) {
            lastExecuted.current = Date.now();
            setThrottledValue(value);
        } else {
            const timeout = setTimeout(() => {
                lastExecuted.current = Date.now();
                setThrottledValue(value);
            }, throttleMs);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [throttleMs, value]);

    return throttledValue;
}