

import React from 'react';
import { Button } from '@/components/ui/button';

export const WhatsAppFAB = () => {
    return (
        <a
            href="https://wa.me/917034248006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50"
        >
            <Button
                size="icon"
                className="w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 transform hover:scale-110 hover:bg-[#128C7E] flex items-center justify-center"
            >
                <img
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    className="w-10 h-10 object-contain"
                    draggable="false"
                />
            </Button>
        </a>
    );
}
