// components/AuthChecker.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/auth';

const AuthChecker = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated)
    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    return isAuthenticated ? children : null;
};

export default AuthChecker;
