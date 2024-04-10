type NavOption = {
    label: string;
    href: string;
};

export const navOptions: NavOption[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export enum BadgeLevel {
    Beginner = 'Beginner',
    Novice = 'Novice',
    Competent = 'Competent',
    Proficient = 'Proficient',
    Skilled = 'Skilled',
    Intermediate = 'Intermidate',
    Advanced = 'Advanced',
}
