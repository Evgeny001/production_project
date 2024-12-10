import {classNames} from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss'
import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className,
        children,
        isOpen,
        onClose
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = () => {
        if(onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                console.log('hi')
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }

    const onKeydown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    }

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeydown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeydown);
        }
    }, [isOpen, onKeydown]);

    const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
    }

return (
    <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
            <div className={cls.content} onClick={onContentClick}>
                {children}
            </div>
        </div>
    </div>
)
}
