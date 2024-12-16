import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
    >
        <LoginForm />
    </Modal>
);
