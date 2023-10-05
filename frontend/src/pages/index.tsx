import { redirect } from 'next/navigation';

import SearchPage from '@/components/SearchPage/SearchPage';
import styles from '@/styles/Home.module.css';

export default function Home() {
    const authenticated = true;

    return authenticated ? (
        <main className={`${styles.main}`}>
            <SearchPage />
        </main>
    ) : (
        redirect('/login')
    );
}
