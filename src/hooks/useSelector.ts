import type {RootState} from '../state';
import type {TypedUseSelectorHook} from 'react-redux';
import {useSelector as originalUseSelector} from 'react-redux';

export const useSelector: TypedUseSelectorHook<RootState> = originalUseSelector;