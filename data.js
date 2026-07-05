// Central Data Store with LocalStorage Persistence for Vanilla JS
(function () {
  const DEFAULT_CLERGY = [
    { id: 'bishop-nathan-kanu', name: 'The Rt. Rev. Nathan C. O. Kanu, PhD', position: 'Diocesan Bishop', image: 'public/img/bishop-nathan-kanu.jpg' },
    { id: 'ven-precious-okereke', name: 'The Ven. Precious Okereke', position: 'Cathedral Administrator', image: 'public/img/ven-precious-okereke.jpg' },
    { id: 'ven-emmanuel-onwunli', name: 'The Ven. Emmanuel Onwunli', position: 'Assisting Priest', image: 'public/img/ven-emmanuel-onwunli.jpg' },
    { id: 'rev-canon-charles-ubani', name: 'The Rev. Canon Charles Ubani', position: 'Assisting Priest', image: 'public/img/rev-canon-charles-ubani.jpg' },
    { id: 'rev-dr-hart-o-hart', name: 'The Rev. Dr. Hart O. Hart', position: 'Assisting Priest', image: 'public/img/rev-dr-hart-o-hart.jpg' },
    { id: 'rev-blessing-ihediwa', name: 'The Rev. Blessing Ihediwa', position: 'Assisting Priest', image: 'public/img/rev-blessing-ihediwa.jpg' },
    { id: 'rev-christian-nwankpa', name: 'The Rev. Christian Nwankpa', position: 'Assisting Priest', image: 'public/img/rev-christian-nwankpa.jpg' },
    { id: 'rev-joseph-stephen', name: 'The Rev. Joseph Stephen', position: 'Assisting Priest', image: 'public/img/rev-joseph-stephen.jpg' },
    { id: 'rev-pepple-promise', name: 'The Rev. Pepple Promise', position: 'Assisting Priest', image: 'public/img/rev-pepple-promise.jpg' },
    { id: 'rev-samuel-unogu', name: 'The Rev. Samuel Unogu', position: 'Assisting Priest', image: 'public/img/rev-samuel-unogu.jpg' },
    { id: 'ihunanyachi-nwogu', name: 'Mr. Ihunanyachi Nwogu', position: 'Cathedral Warden', image: 'public/img/ihunanyachi-nwogu.jpg' },
    { id: 'mascot-evuka', name: 'Engr. Mascot Evuka', position: 'Cathedral Warden', image: 'public/img/mascot-evuka.jpg' },
    { id: 'brightman-eze', name: 'Sir Brightman Eze', position: 'PCC Secretary', image: 'public/img/brightman-eze.jpg' },
    { id: 'juliet-pepple', name: 'Mrs. Juliet Pepple', position: 'Verger', image: 'public/img/juliet-pepple.jpg' }
  ];

  const DEFAULT_SERVICES = [
    { id: 'first-service', name: 'First Service (Holy Communion)', time: '07:00 AM - 09:00 AM', day: 'Every Sunday', description: 'Traditional service conducted in the reverence of Book of Common Prayer liturgy with hymns and communion.' },
    { id: 'second-service', name: 'Second Service (Contemporary)', time: '09:00 AM - 11:00 AM', day: 'Every Sunday', description: 'A vibrant service featuring contemporary praise, worship, scripture teaching, and fellowships.' },
    { id: 'third-service', name: 'Third Service (Youth & English)', time: '11:00 AM - 01:00 PM', day: 'Every Sunday', description: 'Youth-focused and family service with modern music, interactive sermons, and focus on current life topics.' },
    { id: 'bible-study', name: 'Bible Study', time: '05:00 PM - 06:30 PM', day: 'Every Tuesday', description: 'Deep dive into biblical topics, verse-by-verse analysis, and answering critical faith questions.' },
    { id: 'midweek-service', name: 'Midweek Power Service', time: '09:00 AM - 11:30 AM', day: 'Every Thursday', description: 'A service of prayer, deliverance, testimonies, and spiritual renewal in the middle of the week.' }
  ];

  const DEFAULT_SAINTS = [
    {
      id: 'st-mark',
      name: 'St. Mark Group',
      saintName: 'Saint Mark the Evangelist',
      saintDescription: 'St. Mark was the author of the Gospel of Mark and a companion of St. Peter. He is traditionally depicted as a winged lion, representing majesty, courage, and resurrection.',
      aboutSaint: {
        background: 'Mark, also known as John Mark in Acts, was the son of Mary, a Christian homeowner in Jerusalem where early believers gathered.',
        calling: 'Mark joined Paul and Barnabas on their first missionary journey and later served closely with Peter in Rome.',
        ministry: 'He founded the Church of Alexandria, Egypt, becoming its first bishop and establishing Christian teaching in North Africa.',
        lessons: [
          'Overcoming Failure: Mark initially deserted Paul but later matured into an indispensable helper.',
          'Faithful Recording: He faithfully documented Peter\'s testimony for generations.',
          'Pioneering Spirit: He carried the Gospel to new regions, establishing North African Christian roots.'
        ]
      },
      representation: {
        fellowship: 'Fosters Christian unity and brotherhood among members, organizing quarterly home visits.',
        evangelism: 'Leads active door-to-door evangelism in the Abayi-Umuocham neighborhood.',
        welfare: 'Maintains a welfare fund to support members in need, providing scholarships.',
        development: 'Actively participates in structural upgrades of the Cathedral.',
        prayer: 'Hosts weekly chain prayers every Thursday at 6:00 PM.',
        service: 'Coordinates sanctuary cleaning and traffic management protocols.'
      },
      executives: {
        chairman: 'Sir Eugene O. Nwachukwu',
        viceChairman: 'Elder Christian N. Onuoha',
        secretary: 'Bro. Emmanuel C. Madu',
        treasurer: 'Sis. Abigail O. Johnson',
        chaplain: 'Rev. Joseph A. W. Stephen'
      },
      activities: [
        'Monthly General Meeting (Every 2nd Sunday after 2nd Service)',
        'Bible Study and Theological Review (Every 3rd Tuesday at 5:00 PM)',
        'Annual Saint Mark\'s Day Celebration (April 25)'
      ],
      whatsappLink: 'https://chat.whatsapp.com/stmarkplaceholder'
    },
    {
      id: 'st-andrew',
      name: 'St. Andrew Group',
      saintName: 'Saint Andrew the Apostle',
      saintDescription: 'St. Andrew, the first-called apostle, was a fisherman and brother of Peter. He is known for bringing others to Christ, represented by the X-shaped cross.',
      aboutSaint: {
        background: 'Born in Bethsaida, Galilee, Andrew was a disciple of John the Baptist before recognizing Jesus as the Messiah.',
        calling: 'Andrew was the first disciple to follow Jesus, immediately bringing his brother Simon Peter to Him.',
        ministry: 'He preached around the Black Sea and Greece, where he was martyred on an X-shaped cross.',
        lessons: [
          'Introduction to Christ: Andrew is always bringing people to Jesus in scripture.',
          'Humility: He was content to work in the shadow of his brother Simon Peter.',
          'Spiritual Discernment: He immediately recognized Jesus\' spiritual authority.'
        ]
      },
      representation: {
        fellowship: 'Creates an inclusive environment for new members, managing hospitality.',
        evangelism: 'Focuses on personal evangelism and bringing friends to church.',
        welfare: 'Provides food and clothing support to local orphanages twice a year.',
        development: 'Contributes to visual media upgrades (projector screens and sound system).',
        prayer: 'Maintains a 24-hour intercessory prayer roster for the diocese.',
        service: 'Serves as ushers, sidesmen, and welcoming guides.'
      },
      executives: {
        chairman: 'Mr. Gabriel I. Anyanwu',
        viceChairman: 'Bro. Silas U. Kalu',
        secretary: 'Sis. Evelyn C. Nwosu',
        treasurer: 'Bro. Bartholomew O. Emeh',
        chaplain: 'Rev. Canon Charles Ubani'
      },
      activities: [
        'Monthly Fellowship Meeting (Every Last Sunday at 4:00 PM)',
        'Youth Mentorship and Skills Training workshops',
        'Annual St. Andrew\'s Day Thanksgiving'
      ],
      whatsappLink: 'https://chat.whatsapp.com/standrewplaceholder'
    },
    {
      id: 'st-jude',
      name: 'St. Jude Group',
      saintName: 'Saint Jude Thaddeus',
      saintDescription: 'St. Jude is the patron saint of lost causes and desperate situations. A brother of James, he is known for his epistle urging Christians to contend earnestly for the faith.',
      aboutSaint: {
        background: 'Jude was one of the Twelve Apostles, likely related to Jesus, and often referred to as Thaddeus.',
        calling: 'Called to follow Christ early in His ministry, he walked alongside Jesus as one of the key witnesses.',
        ministry: 'He preached in Mesopotamia, Libya, Turkey, and Persia, where he wrote his epistle.',
        lessons: [
          'Contending for the Faith: Standing firm in doctrine against false teachings.',
          'Hope in Despair: Reminding believers of God\'s power to keep them from falling.',
          'Quiet Persistence: Doing apostolic work without seeking personal glory.'
        ]
      },
      representation: {
        fellowship: 'Supports members facing crises with constant visitation.',
        evangelism: 'Conducts evangelical outreaches to hospitals and prisons.',
        welfare: 'Administers the Cathedral\'s Emergency Welfare Fund.',
        development: 'Funds maintenance projects, including generators and cooling systems.',
        prayer: 'Hosts monthly vigil sessions on the second Friday of the month.',
        service: 'Supports ushering and hospitality teams.'
      },
      executives: {
        chairman: 'Sir Christopher I. Okafor',
        viceChairman: 'Bro. Augustine U. Nwankwo',
        secretary: 'Sis. Chioma G. Ibe',
        treasurer: 'Sis. Mercy O. Ndukwe',
        chaplain: 'Rev. Blessing Ihediwa'
      },
      activities: [
        'Monthly General Meeting (Every 1st Sunday after 2nd Service)',
        'Quarterly Prison Visitation and Outreach',
        'Annual St. Jude\'s Day Prayer Retreat (October 28)'
      ],
      whatsappLink: 'https://chat.whatsapp.com/stjudeplaceholder'
    }
  ];

  const DEFAULT_SERMONS = [
    {
      id: 'sermon-1',
      title: 'Contending Earnestly for the Faith',
      speaker: 'The Rt. Rev. Nathan C. O. Kanu, PhD',
      scripture: 'Jude 1:3-4',
      date: '2026-06-28',
      readingTime: '6 mins',
      summary: 'A powerful call to defend the biblical truths in a changing world, focusing on standing firm in doctrine and expressing love.',
      fullArticle: 'Beloved, when I gave all diligence to write unto you of the common salvation, it was needful for me to write unto you, and exhort you that ye should earnestly contend for the faith which was once delivered unto the saints.\n\nIn our contemporary world, the call to contend for the faith is more urgent than ever. We are faced with subtle compromises, cultural shifts, and doctrinal dilutions that seek to erode the foundations of Christian truth.\n\nContending for the faith does not mean being contentious. We must defend the truth with grace, humility, and absolute love, maintaining the holiness of our calling while building bridges of reconciliation to the lost. Let us stand firm, rooted in scripture, and guided by the Holy Spirit.',
      topic: 'Doctrinal Firmness',
      category: 'Wermon',
      imageUrl: 'public/sermons/sermon1.jpg'
    },
    {
      id: 'sermon-2',
      title: 'First-Called: Bringing Others to Jesus',
      speaker: 'The Ven. Precious Okereke',
      scripture: 'John 1:40-42',
      date: '2026-06-21',
      readingTime: '5 mins',
      summary: 'Inspired by Saint Andrew, this sermon challenges us to lead our family, friends, and neighbors to encounter Christ personally.',
      fullArticle: 'He first findeth his own brother Simon, and saith unto him, "We have found the Messias, which is, being interpreted, the Christ." And he brought him to Jesus.\n\nThe ministry of St. Andrew is a beautiful model of relational evangelism. Before Andrew traveled to distant lands, he started at home. He brought his own brother, Simon Peter, to Jesus.\n\nMany of us look for grand platforms to share the gospel, yet we ignore the people in our immediate circle—our siblings, neighbors, colleagues, and children. The greatest gift you can offer anyone is an introduction to the Savior. Let us live lives that invite others to "come and see."',
      topic: 'Evangelism & Witness',
      category: 'Wermon',
      imageUrl: 'public/sermons/sermon2.jpg'
    }
  ];

  const DEFAULT_ANNOUNCEMENTS = [
    {
      id: 'ann-1',
      title: 'Diocesan Synod 2026 Commences',
      content: 'The 2026 Diocesan Synod under the theme "Contending for the Faith" will commence this Thursday at the Cathedral Auditorium. All delegates are expected to be seated by 8:00 AM.',
      date: '2026-07-01',
      expiryDate: '2026-07-10',
      category: 'Events',
      isPinned: true
    },
    {
      id: 'ann-2',
      title: 'Youth Skills Acquisition Programme',
      content: 'The Anglican Youth Fellowship (AYF) is hosting a free 2-week digital skills workshop (Web Design, Content Creation, and Digital Marketing) starting next Monday. Register at the Parish Office.',
      date: '2026-07-03',
      expiryDate: '2026-07-20',
      category: 'Youth',
      isPinned: false
    }
  ];

  const DEFAULT_EVENTS = [
    { id: 'ev-1', title: 'Diocesan Synod 2026', date: '2026-07-09', time: '08:00 AM', location: 'Cathedral Auditorium', description: 'Annual general meeting of delegates and clergy across the diocese.', category: 'Synod' },
    { id: 'ev-2', title: 'Breakthrough Night Vigil', date: '2026-08-07', time: '10:00 PM', location: 'Cathedral Main Auditorium', description: 'An intensive night of prayers, praise, and prophetic declarations.', category: 'Vigil' }
  ];

  // Initialize DB helper
  const getStored = (key, fallback) => {
    const val = localStorage.getItem(key);
    if (!val) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(val);
  };

  const setStored = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // Exposed API
  window.CathedralDB = {
    getClergy: () => getStored('c_clergy', DEFAULT_CLERGY),
    getServices: () => getStored('c_services', DEFAULT_SERVICES),
    getGroups: () => getStored('c_groups', DEFAULT_SAINTS),
    getSermons: () => getStored('c_sermons', DEFAULT_SERMONS),
    getAnnouncements: () => getStored('c_announcements', DEFAULT_ANNOUNCEMENTS),
    getEvents: () => getStored('c_events', DEFAULT_EVENTS),
    getAnalytics: () => getStored('c_analytics', { pageViews: 24500, sermonDownloads: 1240, formSubmissions: 312, whatsappClicks: 954 }),

    addSermon: (s) => {
      const list = window.CathedralDB.getSermons();
      s.id = 'sermon-' + Date.now();
      list.unshift(s);
      setStored('c_sermons', list);
    },
    deleteSermon: (id) => {
      const list = window.CathedralDB.getSermons().filter(x => x.id !== id);
      setStored('c_sermons', list);
    },

    addAnnouncement: (a) => {
      const list = window.CathedralDB.getAnnouncements();
      a.id = 'ann-' + Date.now();
      list.unshift(a);
      setStored('c_announcements', list);
    },
    deleteAnnouncement: (id) => {
      const list = window.CathedralDB.getAnnouncements().filter(x => x.id !== id);
      setStored('c_announcements', list);
    },

    addEvent: (e) => {
      const list = window.CathedralDB.getEvents();
      e.id = 'ev-' + Date.now();
      list.unshift(e);
      setStored('c_events', list);
    },
    deleteEvent: (id) => {
      const list = window.CathedralDB.getEvents().filter(x => x.id !== id);
      setStored('c_events', list);
    },

    updateGroup: (g) => {
      const list = window.CathedralDB.getGroups().map(x => x.id === g.id ? g : x);
      setStored('c_groups', list);
    },

    trackMetric: (metric) => {
      const stats = window.CathedralDB.getAnalytics();
      if (stats[metric] !== undefined) {
        stats[metric]++;
        setStored('c_analytics', stats);
      }
    }
  };

  // Track page view
  window.CathedralDB.trackMetric('pageViews');
})();
