import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

export default function Loading() {
    const toast = useToast();

    useEffect(() => {
        const toastId = toast({
            title: 'Processing...',
            description: 'Please wait...',
            status: 'loading', 
            duration: 500, 
            isClosable: false, 
        });

        return () => toast.close(toastId);
    }, [toast]);

    return null; 
}
