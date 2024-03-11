import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

export default function Error() {
    const toast = useToast();

    useEffect(() => {
        const toastId = toast({
            title: 'An error occurred !',
            description: 'Please try again later',
            status: 'error', 
            duration: 3000, 
            isClosable: false, 
        });

        return () => toast.close(toastId);
    }, [toast]);

    return null; 
}
