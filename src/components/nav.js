import Link from 'next/link';

const links = [
    { href: '/skills', label: 'skills' },
    { href: '/projects', label: 'projects' },
    { href: '/talks', label: 'talks' },
    { href: '/work', label: 'work' },
    { href: '/exp', label: 'exp' }
];

export default function Nav() {
    return (
        <nav>
            <ul className="flex items-center justify-between p-8">
                <li>
                    <Link href="/">
                        <a className="text-black no-underline text-accent-1 text-lg font-bold dark:text-black ">
                            <p className="px-4 py-2 text-black font-bold">dwvicy</p>
                        </a>
                    </Link>
                </li>
                <div className="text-black border border-black shadow-lg">
                    <ul className="px-4 py-2 flex flex-col items-center justify-between md:space-x-4 md:flex-row">
                        {links.map(({ href, label }) => (
                            <li className="text-center" key={`${href}${label}`}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </ul>
        </nav>
    );
}
