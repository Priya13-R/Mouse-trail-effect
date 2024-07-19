document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    document.getElementById('trail-container').appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 1000); // 1 second timeout matches the animation duration
});
