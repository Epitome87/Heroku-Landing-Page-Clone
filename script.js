const swappableHeaders = [
  {
    title: 'Unleash your inner startup',
    text: 'Choose Heroku for the same reasons disruptive startups do: it’s the best platform for building with modern architectures, innovating quickly, and scaling precisely to meet demand.',
  },
  {
    title: 'Focus on your apps',
    text: 'Invest in apps, not ops. Heroku handles the hard stuff — patching and upgrading, 24/7 ops and security, build systems, failovers, and more — so your developers can stay focused on building great apps.',
  },

  {
    title: 'Turn your company into an apps company',
    text: 'Today every company needs apps to engage their customers and run their businesses. Step up your ability to build, manage, and deploy great apps at scale with Heroku.',
  },
];

// How long will we show each showcase message?
const SHOW_DURATION = 5000;

// And which showcase message are we currently showing?
let currentSwappableIndex = 0;

const swappableHeader = document.querySelector('.showcase-text');
const titleElement = document.querySelector('.showcase-text h1');
const textElement = document.querySelector('.showcase-text p');

setInterval(() => {
  currentSwappableIndex += 1;
  currentSwappableIndex %= swappableHeaders.length;

  titleElement.textContent = `${swappableHeaders[currentSwappableIndex].title}`;
  textElement.textContent = `${swappableHeaders[currentSwappableIndex].text}`;
}, SHOW_DURATION);
