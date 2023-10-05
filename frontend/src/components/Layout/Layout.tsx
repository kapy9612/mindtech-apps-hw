import React from 'react';

import { useRouter } from 'next/router';

import { Logout } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { useAuth } from '@/hooks/useAuth';
import styles from '@/styles/Home.module.css';
import { postRequest } from '@/utils/requests';

const Layout = ({ children }: any) => {
    const { token, setToken } = useAuth();
    const { replace } = useRouter();
    const handleLogout = async () => {
        const response: any = await postRequest(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`,
            null,
            null,
            `Authorization: Bearer ${token}`,
        );
        if (response) {
            setToken(null);
            void replace('/');
        }
    };

    return (
        <main className={`${styles.main}`}>
            <IconButton aria-label="logout" onClick={() => handleLogout()}>
                <Logout />
            </IconButton>
            {children}
        </main>
    );
};

export default Layout;
