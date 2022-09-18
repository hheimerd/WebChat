import {useEffect} from 'react';

export function useEventListener(event: string, listener: EventListenerOrEventListenerObject, target: EventTarget | undefined = window) {
    useEffect(() => {
        if (!target)
            return;

        target.addEventListener(event, listener);
        return () => {
            target.removeEventListener(event, listener);
        };
    });
}