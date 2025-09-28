import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Contact Me',
    description: 'Get in touch with Leonardo Becerril. I am available for freelance opportunities and collaborations.',
    alternates: {
        canonical: '/contact',
    },
};

export default function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>
        </div>
    );
}