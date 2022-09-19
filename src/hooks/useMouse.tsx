import {useEventListener} from './useEventListener';

type Point = { x: number, y: number };

export function useMouse(listener: (point: Point) => void, rootElement: EventTarget = window) {
    useEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        listener({
            x: mouseEvent.clientX,
            y: mouseEvent.clientY,
        });
    }, rootElement);
}