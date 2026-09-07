export type SkillGroup = {
  title: string
  skills: string[]
}

export type TimelineItem = {
  org: string
  role: string
  period: string
  details: string
}

export type Project = {
  id: string
  title: string
  subtitle: string
  period: string
  description: string
  features: string[]
  stack: string[]
  liveUrl: string
  image: string
}

export const profile = {
  name: 'Alaa Ahmed',
  role: 'Front-End Web Developer',
  headline:
    'Building responsive, interactive, and user-focused web experiences with React and modern web technologies.',
  about:
    'Front-End Developer and Computer Science student at Sohag University, focused on building responsive, interactive, and user-friendly web applications. Experienced with React, JavaScript, TypeScript, and modern UI development, with hands-on training through DEPI, ITI, and NTI.',
  email: 'Alaaahmed1343@gmail.com',
  phone: '01015319472',
  location: 'Sohag, Egypt',
  linkedin: 'https://www.linkedin.com/in/alaa-frontend',
  cvUrl: '/Alaa_Ahmed_Resume.pdf',
  avatar: '/images/alaa.png',
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-End Development',
    skills: [
      'React.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Bootstrap 5',
    ],
  },
  {
    title: 'Web & API Integration',
    skills: [
      'REST APIs',
      'Fetch API',
      'Async/Await',
      'Responsive Design',
      'Form Validation',
      'API Integration',
    ],
  },
  {
    title: 'Tools & Practices',
    skills: [
      'Git',
      'GitHub',
      'Component Architecture',
      'Clean Code',
      'Problem Solving',
      'UI/UX Principles',
    ],
  },
]

export const experience: TimelineItem[] = [
  {
    org: 'Digital Egypt Pioneers Initiative (DEPI)',
    role: 'React Frontend Web Developer',
    period: '2026',
    details:
      'Built modular React applications using reusable components and modern development practices. Worked with TypeScript, Git, GitHub, Node.js, and Express while contributing to a React and Node.js capstone project.',
  },
]

export const courses: TimelineItem[] = [
  {
    org: 'Information Technology Institute (ITI)',
    role: 'Frontend Development – React.js',
    period: '07/2026 – 08/2026',
    details:
      'Completed practical training in React.js and modern frontend development, covering JavaScript (ES6+), Bootstrap, Context API, UI/UX best practices, and AI integration.',
  },
  {
    org: 'National Telecommunication Institute (NTI)',
    role: 'Web Designer',
    period: '01/2026 – 03/2026',
    details:
      'Completed a 120-hour web design program with a 97% score, developing practical skills in responsive web design, user interface development, and freelancing fundamentals.',
  },
  {
    org: 'Information Technology Institute (ITI)',
    role: 'Software Development Fundamentals',
    period: '07/2024 – 08/2024',
    details:
      'Completed training in C/C++ programming, Object-Oriented Programming, Data Structures, Algorithms, Flowcharts, Pseudocode, and debugging fundamentals.',
  },
]

export const projects: Project[] = [
  // ========================================
  // PROJECT 1 - BISTRO BLISS
  // ========================================

  {
    id: 'bistro-bliss',
    title: 'Bistro Bliss',
    subtitle: 'Responsive Food Website',
    period: '08/2026 – 09/2026',
    description:
      'Responsive restaurant website focused on presenting services, customer feedback, and table reservations through a clean and interactive user interface.',
    features: [
      'Responsive layout optimized for mobile, tablet, and desktop',
      'Interactive table reservation form with client-side validation',
      'Customer feedback and testimonials section',
      'Asynchronous API integration using Fetch API and Async/Await',
    ],
    stack: [
      'HTML5',
      'CSS3',
      'Bootstrap 5',
      'JavaScript (ES6+)',
      'Fetch API',
      'Async/Await',
    ],
    liveUrl:
      'https://alaaahmed1343-coder.github.io/food-ordering-website/#about',
    image: '/images/project-bistro.png',
  },

  // ========================================
  // PROJECT 2 - WEATHER APP
  // ========================================

  {
    id: 'weather-app',
    title: 'Weather App',
    subtitle: 'Weather Forecast Web App',
    period: '08/2025 – 09/2025',
    description:
      'Responsive weather application that integrates a weather API to display real-time conditions, detailed weather information, and a multi-day forecast.',
    features: [
      'Search weather conditions by city',
      'Real-time temperature and current weather conditions',
      'Humidity, wind speed, and wind direction details',
      '7-day weather forecast powered by WeatherAPI',
      'Responsive interface across mobile, tablet, and desktop',
      'Error handling for invalid or unavailable locations',
    ],
    stack: [
      'HTML5',
      'CSS3',
      'Bootstrap 5',
      'JavaScript (ES6+)',
      'Fetch API',
      'Async/Await',
      'WeatherAPI',
    ],
    liveUrl:
      'https://alaaahmed1343-coder.github.io/weather/',
    image: '/weather.png',
  },

  // ========================================
  // PROJECT 3 - MOVIE APP
  // ========================================

  {
    id: 'movie-app',
    title: 'Movie Web App',
    subtitle: 'Dynamic Movie Explorer',
    period: '01/2026 – 02/2026',
    description:
      'Dynamic movie discovery application that integrates movie data to help users explore titles across multiple categories through an interactive and responsive interface.',
    features: [
      'Browse Now Playing, Popular, Top Rated, and Upcoming movies',
      'Dynamic category switching without page reloads',
      'Client-side form validation with user-friendly feedback',
      'Responsive movie card grid optimized for different screen sizes',
    ],
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'Bootstrap 5',
    ],
    liveUrl:
      'https://alaaahmed1343-coder.github.io/Movie-app/',
    image: '/movie.png',
  },
]