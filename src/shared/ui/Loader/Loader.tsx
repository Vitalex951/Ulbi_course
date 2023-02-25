import { classNames } from 'shared/lib/classNames/classnames';
import './Loader.scss';

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ring', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);