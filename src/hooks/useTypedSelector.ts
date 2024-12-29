import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { BaseStoreState } from '../models/base-store-state.model';

export const useTypedSelector: TypedUseSelectorHook<BaseStoreState> = useSelector;
