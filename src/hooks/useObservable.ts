import type {Observable} from 'rxjs';
import {useState} from 'react';
import {useEffect} from 'react';

export function useObservable<T>(observable: Observable<T>) {
    const [value, setValue] = useState<T>();
    useEffect(() => {
        const sub = observable.subscribe(setValue);
        return () => {
            sub.unsubscribe();
        };
    });
    return value;
}