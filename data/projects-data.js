const projects = [
  {
    id: 1,
    section: "Mobile application - Android & IOS",
    title: "Education application",
    image: "/projects/learnit/preview.jpg",
    icon: "/projects/learnit/icon.png",
    shotScreens: [
      "/projects/learnit/1.webp",
      "/projects/learnit/2.webp",
      "/projects/learnit/3.webp",
      "/projects/learnit/4.webp",
      "/projects/learnit/5.webp",
      "/projects/learnit/6.webp",
      "/projects/learnit/7.webp",
      "/projects/learnit/8.webp",
      "/projects/learnit/9.webp",
      "/projects/learnit/10.webp",
      "/projects/learnit/11.webp",
      "/projects/learnit/12.webp",
    ],
    description:
      "Screens:\n 1-Login Screen\n 2- Register Screen\n 3- Main Screen to Show new news\n 4- Profile Screen\n 5- Courses page for student filtered by terms and studying year and all Courses page for teachers\n 6- More page to add New posts and Courses and manage users\n 7- Settings Page to Change language\n 8- Contact Me Page \n \n  Features:\n * Posting: Users can post news and other content that is visible to all users.\n * Post management: Users can edit or delete their own posts, and they can also manage other users' posts.\n * Course management: Teacher can add chapters to courses and delete chapters.\n * User management: Teacher can block, activate, change the password of, or delete other users.\n * Language support: Users can change the interface language to Arabic, English, or any other language that is supported.\n * Sign-out and remember password: Users can sign out of the app and have the option to remember their password.\n * Contact page: Users can contact the teacher through a dedicated contact page.\n * Privacy and terms: Users can view the app's privacy policy and terms of service.\n * Firebase services: The app uses Firebase services, including Firestore (a NoSQL database) and Firebase Storage (a cloud storage service).\n * Crashlytics: The app uses Crashlytics to collect crash reports and help identify and fix stability issues.\n \n  Security:\n * Device binding: Users can only log in to the app from the device they registered with. The app saves the device's serial number to ensure that only the registered device can be used to log in.\n * Screen recording and screenshot protection: The app prevents users from recording the screen or taking screenshots. This helps to protect the app's content and prevent unauthorized sharing.\n * Single-user account: Each user can only have one account. This prevents users from logging in to the app with multiple accounts at the same time.\n * Headset detection: The app can detect if the user is using a headset. This helps to prevent the user from sharing the app's content with others by playing the sound through the loudspeaker.\n ",
    tags: ["flutter", "andriod", "IOS", "FireBase"],
    technology:
      "Flutter framework for IOS and Andriod \n Firebase backend\n GetX state manager.\n Multilanguage English and Arabic.",
    links: [
      {
        name: "PlayStore",
        url: "https://play.google.com/store/apps/details?id=com.monaellebody.mlapp",
      },
      {
        name: "appleStore",
        url: "https://apps.apple.com/us/app/mona-ellebody/id6469087922",
      },
      {
        name: "PlayStore",
        url: "https://play.google.com/store/apps/details?id=com.mohamedfarid.faridonline",
      },
      {
        name: "appleStore",
        url: "https://apps.apple.com/us/app/farid-online/id6477533291",
      },
    ],
  },
  {
    id: 2,
    section: "Website",
    title: "XO-Store Games Cards Store",
    image: "/projects/xo/xo-store-main.png",
    icon: "https://xo-store.vercel.app/logo/logo.svg",
    shotScreens: [
      "/projects/xo/xo-page.png",
      "/projects/xo/xo-cart.png",
      "/projects/xo/xo-store-main.png",

    ],
    description:
      "Home Page \nCategories Page \nLogIn Page \nSignUp Page \nCart Page \nPayment Page \nSingle Game Card Page  ",
    tags: [
      "Nextjs",
      "Reactjs",
      "Nodejs",
      "FireBase",
      "Firestore",
      "Firebase Storage",
    ],
    technology: "Nextjs Reactjs Nodejs FireBase (Firestore - Firebase Storage)",
    links: [
      {
        name: "Website",
        url: "https://xo-store.vercel.app/",
      },
    ],
  },
  {
    id: 3,
    section: "Mobile application - Android & IOS",
    title: "Money Wizard",
    image: "/projects/moneywizard/moneywizard-app.jpg",
    icon: "/projects/moneywizard/icon.png",
    shotScreens: [
      "/projects/moneywizard/1.png",
      "/projects/moneywizard/2.png",
      "/projects/moneywizard/3.png",
      "/projects/moneywizard/4.png",
      "/projects/moneywizard/5.png",
      "/projects/moneywizard/6.png",
      "/projects/moneywizard/7.png",
      "/projects/moneywizard/8.png",
      "/projects/moneywizard/9.png",
      "/projects/moneywizard/10.png",
      "/projects/moneywizard/11.png",
      "/projects/moneywizard/12.png",
      "/projects/moneywizard/13.png",
    ],
    description: `Money Wizard - daily financial - count your currency - various denominations

                    Your All-in-One Money Manager

                    Simplify your financial life with our versatile mobile app. Designed to efficiently count your currency of various denominations, this handy tool offers a range of features to keep your finances organized:

                    * Effortless Counting: Quickly and accurately tally your money.

                    * Denomination Value Retention: Save time and effort by preserving denomination values between app sessions.

                    * Transaction Tracking: Record and categorize your credit and debit transactions, including currency conversions.

                    * Detailed Reports: Generate daily, weekly, or monthly reports to analyze your spending habits.

                    * Multilingual Support: Access the app in multiple languages.

                    * Multicurrency Functionality: Handle transactions in various currencies.

                    * Customizable Themes: Personalize your app experience with interactive themes and two styles of application bars.

                    * Denomination Control: Manage and modify the denominations used for counting and tracking.

                    Take control of your finances with our comprehensive mobile app.`,
    tags: [
      "flutter",
      "andriod",
      "IOS",
      "Clean architecture",
      "Bloc/cubit",
      "get-it",
      "Sqlite",
      "AdMob",
    ],
    technology:
      "Flutter framework for IOS and Andriod \n Sqlite local database\n Bloc/cubit state manager.\n Multilanguage English and Arabic.",
    links: [
      {
        name: "PlayStore",
        url: "https://play.google.com/store/apps/details?id=com.samersaied.moneywizard",
      },
      {
        name: "appleStore",
        url: "https://apps.apple.com/us/app/money-wizard/id6738664958",
      },
    ],
  },
  {
    id: 2,
    section: "Mobile app",
    title: "Food Shop",
    image: "/projects/food_shop_blue.png",
    description:
      "full Food shop Mobile application for android and Iphone , you can connect it to Your API or Firebase",
    tags: ["flutter", "andriod", "IOS"],
    technology:
      "Flutter framework for IOS and Andriod \nClean architecture\nMultilanguage English, Arabic and More.",
    links: [
      // { "name": "PlayStore", "url": "" },
      // { "name": "appleStore", "url": "" }
    ],
  },
  {
    id: 4,
    section: "Mobile app",
    title: "Food Shop",
    image: "/projects/foodshop.gif",
    description: "Demo foodshop mobile applications",
    tags: ["flutter", "andriod", "IOS"],
    technology:
      "Flutter framework available for IOS and Andriod.\n Bloc state manager.",
    links: [
      {
        name: "Github",
        url: "https://github.com/samer-saied/foodShop",
      },
      {
        name: "PlayStore",
        url: "https://samer-saied.github.io/samersaied/foodshop.html",
      },
      {
        name: "Website",
        url: "https://flutterawesome.com/a-simple-food-shop-flutter-example-with-firebase/",
      },
    ],
  },
  {
    id: 5,
    section: "NodeJs Api server , Mobile app",
    title: "AccuNews",
    image: "/projects/accunews.png",
    description:
      "Mobile app to catch new News from scraping website by nodejs server",
    tags: ["flutter", "andriod", "IOS", "expressJs", "nodeJs", "NextJs"],
    technology:
      "Flutter framework for IOS and Andriod \n Firebase backend\n GetX state manager.\n Next.js api for BackEnd Server",
    links: [
      {
        name: "Github",
        url: "https://github.com/samer-saied/News-flutter-app",
      },
      {
        name: "Github",
        url: "https://github.com/samer-saied/news_api_app",
      },
    ],
  },
  {
    id: 6,
    section: "Fullstack Website",
    title: "POS",
    image: "/projects/under.jpg",
    description:
      "a system for making sales and processing payments in person. handles transactions, inventory, customer data, and more...",
    tags: ["reactJs", "tailwind", "MySql", "expressJs", "nodeJs", "NextJs"],
    links: [
      // {"name":"Github","url":"https://github.com/samer-saied/collectOrder/tree/master"},
      // {"name":"PlayStore","url":"https://play.google.com/store/apps/details?id=me.samersaied.collect_order"},
    ],
  },
  {
    id: 7,
    section: "Mobile app",
    title: "Cigarettes Off",
    image: "/projects/cigarettesoff.gif",
    description:
      "Cigarettes Off is a mobile application that helps you quit smoking by providing you with a personalized plan, tips, and rewards. You can track your progress, see how much money and time you have saved, and get support from other quitters.",
    tags: ["flutter", "andriod", "IOS", "Firebase"],
    technology:
      "Flutter framework for IOS and Andriod \nFirebase backend Provider state manager.\nMultilanguage English and Arabic.",
    links: [
      {
        name: "Github",
        url: "https://github.com/samer-saied/smokeless",
      },
      {
        name: "PlayStore",
        url: "https://play.google.com/store/apps/details?id=me.samersaied.freesmokingapp",
      },
      {
        name: "appleStore",
        url: "",
      },
    ],
  },
  {
    id: 8,
    section: "Mobile app",
    title: "Collect Orders",
    image: "/projects/collectOrder.jpg",
    description:
      "When a group of friends go out and order different sandwiches, this application can handle a specific order for every friend.",
    technology:
      "Flutter framework available for IOS and Andriod \nHive Database \nGetx state manager.",
    tags: ["flutter", "andriod", "IOS", "FireBase"],
    links: [
      {
        name: "Github",
        url: "https://github.com/samer-saied/collectOrder/tree/master",
      },
      {
        name: "PlayStore",
        url: "https://play.google.com/store/apps/details?id=me.samersaied.collect_order",
      },
    ],
  },
  {
    id: 9,
    section: "Website",
    title: "Ecommerce website",
    image: "/projects/ecommerce_nextjs.gif",
    description:
      "One Hour Work Only: fast building for 4 pages (single product page + Home page with products and categories + Loading Page + Error Page)",
    technology: "Next.js + React.js + Tailwind + API (connect to fakeApi)",
    tags: ["React.js", "Next.js 13 last version", "API"],
    links: [
      {
        name: "Github",
        url: "https://github.com/samer-saied/nextjs13_ecommerce",
      },
      {
        name: "Website",
        url: "https://nextjs13-ecommerce-phi.vercel.app/products",
      },
    ],
  },
  {
    id: 10,
    section: "Website , adminPanel , Mobile application",
    title: "Tal3a",
    image: "/projects/tal3a_image.gif",
    video: "tal3a_video.mp4",
    description:
      "Tal3a is a website and mobile app that offers various events and activities for people to enjoy in Kuwait. You can find plays, concerts, movies, workshops, festivals, and more on the website. You can also create your own event and invite others to join you.",
    tags: [
      "flutter",
      "andriod",
      "IOS",
      "reactJs",
      "tailwind",
      "mongoDb",
      "expressJs",
      "nodeJs",
      "NextJs",
    ],
    technology:
      "MERN stack by Next.js framework full-stack Web applications and admin Panel \nFlutter framework for IOS and Andriod.",
    links: [
      {
        name: "Website",
        url: "https://www.tal3a.app",
      },
      {
        name: "PlayStore",
        url: "",
      },
      {
        name: "appleStore",
        url: "",
      },
    ],
  },
];

export default projects;
