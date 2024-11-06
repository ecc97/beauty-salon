import React from 'react'
import Button from '../../atoms/button/Button'
import './modal.scss'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    title?: string;
}

function Modal({ isOpen, onClose, children, className, title }: ModalProps) {
    return (
        isOpen && (
            <div className={`modal-overlay ${className} `}>
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{title}</h2>
                            <Button type="button" onClick={onClose}>X</Button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>  
                </div>
            </div>
        )
    )
}

export default Modal
