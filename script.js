// Nav border on scroll
const nav = document.querySelector('.nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10), { passive: true });

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}, { threshold: 0.12 });
document.querySelectorAll('.section > *, .video-card, .tile, .services article').forEach((el) => {
  el.classList.add('reveal');
  io.observe(el);
});

// Only one video playing at a time
document.querySelectorAll('video').forEach((v) => {
  v.addEventListener('play', () => {
    document.querySelectorAll('video').forEach((o) => { if (o !== v) o.pause(); });
  });
});

// Lightbox for the 3D gallery
const box = document.getElementById('lightbox');
const boxImg = box.querySelector('img');
document.querySelectorAll('.tile').forEach((t) => {
  t.addEventListener('click', () => {
    boxImg.src = t.dataset.full;
    boxImg.alt = t.querySelector('img').alt;
    box.showModal();
  });
});
box.addEventListener('click', (e) => { if (e.target !== boxImg) box.close(); });

// Copy Discord username
const discord = document.getElementById('discord');
const discordAction = document.getElementById('discord-action');
discord.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(discord.dataset.copy);
    discordAction.textContent = 'Copied ✓';
  } catch {
    discordAction.textContent = 'Add: ' + discord.dataset.copy;
  }
  setTimeout(() => (discordAction.textContent = 'Copy'), 2000);
});

document.getElementById('year').textContent = new Date().getFullYear();
