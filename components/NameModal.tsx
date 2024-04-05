"use client";

import React from 'react';
import Modal from './Modal';
import useNameModal from "@/hooks/useNameModal";

const NameModal = () => {
    const { onClose, isOpen } = useNameModal();

    const onChange = (open: boolean) => {
        if (!open) {
          onClose();
        }
    }

    return (
        <Modal 
        title="Welcome back" 
        description="Login to your account." 
        isOpen={true} 
        onChange={onChange} 
        >
        Hello
        </Modal>
    );
}

export default NameModal;
