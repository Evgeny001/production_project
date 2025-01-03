import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">
                {`value = ${counterValue}`}
            </h1>
            <Button onClick={increment} data-testid="increment-btn">
                {t('increment')}
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                {t('decrement')}
            </Button>
        </div>
    );
};
