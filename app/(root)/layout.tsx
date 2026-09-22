import { ReactNode } from 'react'
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/navigation/public/Navbar';

const Rootlayout = ({ children }: { children: ReactNode }) => {
    const user = null;
    return (
        <main>
            <Navbar user={user} />
            {children}
            <Footer />
        </main>
    )
}

export default Rootlayout