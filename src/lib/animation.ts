


export const animationFadeInStaggerVariants = (staggerChildrenDelay?: number, delayChildren?: number) => {
    return {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerChildrenDelay || 0.25,
                delayChildren,
            }
        }
    }
}