import type {TypedUseSelectorHook} from 'react-redux';
import {useSelector as originalUseSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import type {AppDispatch} from '../state';
import type {RootState} from '../state';

export const useAppSelector: TypedUseSelectorHook<RootState> = originalUseSelector;
export const useAppDispatch = useDispatch<AppDispatch>;

