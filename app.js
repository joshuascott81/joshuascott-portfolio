let express = require('express');

let app = express();

// Set view engine and public directory
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

let theWebDeveloperBootcamp = {
  title: 'The Web Developer Bootcamp',
  instructor: 'Colt Steele'
};

let nodeJSExpressAndMongoDBDevToDeployment = {
  title: 'Node.js, Express & MongoDB Dev to Deployment',
  instructor: 'Brad Traversy'
};

let theCompleteNodeJSDeveloperCourse = {
  title: 'The Complete Node.js Developer Course (2nd Edition)',
  instructor: 'Andrew Mead'
};

let gitAWebDeveloperJob = {
  title: 'Git a Web Developer Job: Mastering the Modern Workflow',
  instructor: 'Brad Schiff'
};

let bootstrap4FromScratch = {
  title: 'Bootstrap 4 From Scratch With 5 Projects',
  instructor: 'Brad Traversy'
};

let theCompleteReactWebDeveloperCourse = {
  title: 'The Complete React Web Developer Course (with Redux)',
  instructor: 'Andrew Mead'
};

let fullStackLogo = {
  url: 'https://cdn.dribbble.com/users/79486/screenshots/1505622/logo-2_1x.jpg',
  adjustment: '2'
};
let nodeJSLogo = {
  url: './images/logos/nodejs-seeklogo.com.svg',
  adjustment: '1'
};
let mongoDBLogo = {
  url: './images/logos/mongodb-seeklogo.com.png',
  adjustment: '1'
};
let javascriptLogo = {
  url: './images/logos/javascript-seeklogo.com.svg',
  adjustment: '3'
};
let htmlLogo = {
  url: './images/logos/html5-seeklogo.com.png',
  adjustment: '1'
};
let cssLogo = {
  url: './images/logos/css3.png',
  adjustment: '2'
};
let jqueryLogo = {
  url: './images/logos/jquery-seeklogo.com.svg',
  adjustment: '1'
};
let gulpJSLogo = {
  url: './images/logos/gulp-seeklogo.com.svg',
  adjustment: '2'
};
let reactJSLogo = {
  url: './images/logos/react-seeklogo.com.svg',
  adjustment: '1'
};
let npmLogo = {
  url: './images/logos/npm-node-package-manager.svg',
  adjustment: '1'
};
let gitLogo = {
  url: './images/logos/git-seeklogo.com.svg',
  adjustment: '1'
};

let tutorials = [
  {
    tutorial: theWebDeveloperBootcamp,
    logos: [
      fullStackLogo,
      nodeJSLogo,
      mongoDBLogo,
      javascriptLogo,
      htmlLogo,
      cssLogo,
      jqueryLogo,
      npmLogo,
      gitLogo
    ]
  },
  {
    tutorial: nodeJSExpressAndMongoDBDevToDeployment,
    logos: [
      nodeJSLogo,
      mongoDBLogo,
      javascriptLogo,
      htmlLogo,
      cssLogo,
      npmLogo,
      gitLogo
    ]
  },
  {
    tutorial: theCompleteNodeJSDeveloperCourse,
    logos: [nodeJSLogo, javascriptLogo, npmLogo, htmlLogo, cssLogo]
  },
  {
    tutorial: gitAWebDeveloperJob,
    logos: [gulpJSLogo, htmlLogo, cssLogo, npmLogo, gitLogo]
  },
  {
    tutorial: bootstrap4FromScratch,
    logos: [htmlLogo, cssLogo]
  },
  {
    tutorial: theCompleteReactWebDeveloperCourse,
    logos: [
      reactJSLogo,
      npmLogo,
      javascriptLogo,
      htmlLogo,
      cssLogo,
      mongoDBLogo
    ]
  }
];

let skills = [
  {
    skillName: 'Full-Stack Development',
    tutorials: [
      theWebDeveloperBootcamp,
      nodeJSExpressAndMongoDBDevToDeployment
    ],
    logo:
      'https://cdn.dribbble.com/users/79486/screenshots/1505622/logo-2_1x.jpg'
  },
  {
    skillName: 'NodeJS',
    tutorials: [
      theWebDeveloperBootcamp,
      nodeJSExpressAndMongoDBDevToDeployment,
      theCompleteNodeJSDeveloperCourse
    ],
    logo: './images/logos/nodejs-seeklogo.com.svg'
  },
  {
    skillName: 'MongoDB',
    tutorials: [
      theWebDeveloperBootcamp,
      nodeJSExpressAndMongoDBDevToDeployment,
      theCompleteNodeJSDeveloperCourse
    ],
    logo: './images/logos/mongodb-seeklogo.com.png'
  },
  {
    skillName: 'JavaScript',
    tutorials: [
      theWebDeveloperBootcamp,
      nodeJSExpressAndMongoDBDevToDeployment,
      theCompleteNodeJSDeveloperCourse,
      gitAWebDeveloperJob,
      theCompleteReactWebDeveloperCourse
    ],
    logo: './images/logos/javascript-seeklogo.com.svg'
  },
  {
    skillName: 'HTML',
    tutorials: [
      theWebDeveloperBootcamp,
      nodeJSExpressAndMongoDBDevToDeployment,
      theCompleteNodeJSDeveloperCourse,
      gitAWebDeveloperJob,
      theCompleteReactWebDeveloperCourse
    ],
    logo: './images/logos/html5-seeklogo.com.png'
  },
  {
    skillName: 'CSS',
    tutorials: [
      theWebDeveloperBootcamp,
      nodeJSExpressAndMongoDBDevToDeployment,
      theCompleteNodeJSDeveloperCourse,
      gitAWebDeveloperJob,
      theCompleteReactWebDeveloperCourse
    ],
    logo: './images/logos/css3.png'
  },
  {
    skillName: 'jQuery',
    tutorials: [theWebDeveloperBootcamp],
    logo: './images/logos/jquery-seeklogo.com.svg'
  },
  {
    skillName: 'GulpJS',
    tutorials: [gitAWebDeveloperJob],
    logo: './images/logos/gulp-seeklogo.com.svg'
  },
  {
    skillName: 'ReactJS',
    tutorials: [theCompleteReactWebDeveloperCourse],
    logo: './images/logos/react-seeklogo.com.svg'
  }
];

app.get('/', (req, res) => {
  res.render('landing', {
    skills: skills,
    tutorials: tutorials
  });
});

app.get('/resume', (req, res) => {
  res.render('resume');
});

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
