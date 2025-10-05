export default function Footer() {
    return (
        <footer className={'flex flex-wrap items-center justify-center py-8'}>
            <span>©{new Date().getFullYear()} <a className={'font-bold'} href={'https://github.com/G0rz'}>G0rz</a>. Todos los derechos reservados.</span>
        </footer>
    );
}