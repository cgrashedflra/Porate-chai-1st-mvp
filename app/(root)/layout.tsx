import { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const Rootlayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}

export default Rootlayout