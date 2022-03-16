const hamburger = document.querySelector('#hamburger');
const cancel = document.querySelector('#close');
const navigation = document.querySelector('.nav-ul');
const textPortfolio = document.querySelector('.nav-text-1');
const about = document.querySelector('.nav-text-2');
const contact = document.querySelector('.nav-text-3');

// hamburger menu
hamburger.addEventListener('click', (e) => {
  e.preventDefault();

  navigation.classList.toggle('show');
  hamburger.classList.add('hide');
  cancel.classList.remove('hide');
  textPortfolio.classList.add('menu-text');
  about.classList.add('menu-text');
  contact.classList.add('menu-text');
});

cancel.addEventListener('click', () => {
  hamburger.classList.remove('hide');
  navigation.classList.remove('show');
  cancel.classList.add('hide');
});

// speaker list
const speakerList = [
  {
    id: 'speaker-1',
    name: 'Angela Yu',
    expertise: 'Developer and Lead Instructor',
    description:
      "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer.",
    image: '/assets/capstone/angela-yu.png',
    style: '',
  },
  {
    id: 'speaker-2',
    name: 'Shaun Pelling',
    expertise: 'Online Coding Tutor & Net Ninja',
    description:
      "Hey gang, my name's Shaun and since a young age I've had an obsession for nearly anything tech-related. I've been coding since about the age of fifteen (half of my life, now...phew!) and work as a full-stack web developer and online instructor.",
    image: '/assets/capstone/shaun-pelling.png',
    style: '',
  },
  {
    id: 'speaker-3',
    name: 'Andrew Mead',
    expertise: 'A Full-stack Developer & Teacher',
    description:
      "I'm Andrew, a full-stack developer! I launched my first course in years ago and had a blast teaching and helping others. I currently teach JavaScript, React, and Node.",
    image: '/assets/capstone/andrew.png',
    style: 'toggle',
  },
  {
    id: 'speaker-4',
    name: 'Maximilian Schwarzmüller',
    expertise: 'Online Educator',
    description:
      "Bundling the courses and know how of successful instructors, Academind strives to deliver high quality online education. Online Education, Real-Life Success - that's what Academind stands for. Learn topics like web development, data analyses and more in a fun and engaging way.",
    image: '/assets/capstone/maximillian.png',
    style: 'toggle',
  },
  {
    id: 'speaker-5',
    name: 'Rob Percival',
    expertise: 'Web Developer And Teacher',
    description:
      "Hi! I'm Rob. I have a degree in Mathematics from Cambridge University and you might call me a bit of coding geek. After building websites for friends and family for fun, I soon learned that web development was a very lucrative career choice. I gave up my successful (and sometimes stressful) job as a teacher to work part time and today, couldn't be happier.",
    image: '/assets/capstone/rob-perceival.png',
    style: 'toggle',
  },
  {
    id: 'speaker-6',
    name: 'Jonas Schmedtmann',
    expertise: 'Web Developer, Designer, and Teacher',
    description:
      "'m a full-stack web developer and designer with a passion for building beautiful things from scratch. I've been building websites and apps and also have a Master's degree in Engineering.",
    image: '/assets/capstone/jonas.png',
    style: 'toggle',
  },
];

const speakers = document.querySelector('#speaker-list');

Array.from(speakers.children).forEach((item, index) => {
  item.innerHTML = `
    <div class="speaker-img">
        <img src="${speakerList[index].image}" alt="Yochai Bankler" />
    </div>
    <div>
      <div >
          <a href="/" class="name">${speakerList[index].name}</a>
      </div>
      <div class="organize text-danger my-2">
      ${speakerList[index].expertise}
      </div>
      <div class="speaker-description mt-4">
      ${speakerList[index].description}
      </div>
    </div>
  `;
});

const more = document.querySelector('#more');
more.addEventListener('click', () => {
  // e.preventDefault();
  const elems = document.querySelectorAll('.toggle-1');
  elems.forEach((item) => {
    console.log(elems);
    item.classList.remove('toggle-1');
  });
  more.classList.add('hide');
  more.classList.remove('toggle-2');
});
