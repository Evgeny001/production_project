import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            {t('PROFILE PAGE')}
        </div>
    );
});

export default ProfilePage;
