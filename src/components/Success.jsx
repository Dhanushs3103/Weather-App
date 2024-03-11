import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

export default function Success() {
    const toast = useToast();

    useEffect(() => {
        const toastId = toast({
            title: 'Successfully logged in...',
            description: 'Redirecting to weather page...',
            status: 'success', 
            duration: 3000, 
            isClosable: false, 
        });

        return () => toast.close(toastId);
    }, [toast]);

    return null; 
}
