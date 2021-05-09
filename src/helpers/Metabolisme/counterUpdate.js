export const updateCounter = (ref, target) => {
    ref.current.innerText = 0;
    const increment = parseInt((target / 100).toFixed(0));

    const update = () => {
        let current = parseInt(ref.current.innerText);
        ref.current.innerText = current + increment;
        if (current < parseInt(target))
            setTimeout(update, 1);
        if (current + increment > parseInt(target))
            ref.current.innerText = target.toFixed(0);
    }
    update();
}