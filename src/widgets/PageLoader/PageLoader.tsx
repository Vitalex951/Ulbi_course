import { classNames } from 'shared/lib/classNames/classnames';
import { Loader } from 'shared/ui/Loader/Loader';
import s from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(s.pageLoader, {}, [className])}>
        <Loader />
    </div>
);