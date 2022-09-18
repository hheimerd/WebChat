import {useEventListener} from './useEventListener';

type Point = { x: number, y: number };

export function useMouse(listener: (position: Point) => void, rootEl: EventTarget | undefined = window) {
    useEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        listener({
            x: mouseEvent.clientX,
            y: mouseEvent.clientY,
        });
    }, rootEl);
}