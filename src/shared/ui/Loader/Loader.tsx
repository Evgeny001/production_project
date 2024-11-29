import './Loader.scss';
import { classNames } from '../../lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds - ring', {}, [className])}>
        <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
