import { Abel, Montserrat, Sen, Playfair_Display } from 'next/font/google';
import './globals.css';

const abel = Abel({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-abel',
});

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-montserrat',
});

const sen = Sen({
    weight: ['400', '500', '600', '700', '800'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-sen',
});

const playfairDisplay = Playfair_Display({
    weight: ['400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-playfair',
});

export const metadata = {
    title: 'Chloe Laurent - Framer template for fashion, photograhy agency',
    description:
        "This template offers a seamless blend of aesthetics and functionality. Impress your clients/customers with a sleek and professional website that showcases your agency's expertise and creativity.",
    icons: {
        icon: '/chloe-laurent-icon.png', 
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={`
          ${abel.variable} 
          ${montserrat.variable} 
          ${sen.variable} 
          ${playfairDisplay.variable} 
          antialiased
        `}
            >
                {children}
            </body>
        </html>
    );
}
