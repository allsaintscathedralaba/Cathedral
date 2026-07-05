export interface ClergyProfile {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  email?: string;
  phone?: string;
}

export interface ServiceSchedule {
  id: string;
  name: string;
  time: string;
  day: string;
  description: string;
}

export interface SaintGroup {
  id: string;
  name: string;
  saintName: string;
  saintDescription: string;
  aboutSaint: {
    background: string;
    calling: string;
    ministry: string;
    lessons: string[];
  };
  representation: {
    fellowship: string;
    evangelism: string;
    welfare: string;
    development: string;
    prayer: string;
    service: string;
  };
  executives: {
    chairman: string;
    viceChairman: string;
    secretary: string;
    treasurer: string;
    chaplain: string;
  };
  activities: string[];
  whatsappLink: string;
}

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  scripture: string;
  date: string;
  readingTime: string;
  summary: string;
  fullArticle: string;
  pdfUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
  topic: string;
  category: 'Wermon' | 'Bible Study' | 'Article' | 'Devotional' | 'Conference' | 'Teaching';
}

export interface Announcement {
  id: string;
  title: string;
  category: 'Worship' | 'Events' | 'Baptism' | 'Weddings' | 'Thanksgiving' | 'Youth' | 'Men' | 'Women' | 'Finance' | 'General';
  content: string;
  date: string;
  expiryDate: string;
  isPinned: boolean;
  imageUrl?: string;
  pdfBulletin?: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

export const clergyData: ClergyProfile[] = [
  {
    id: 'bishop',
    name: 'Rt. Rev. Nathan C. O. Kanu, Ph.D.',
    position: 'Diocesan Bishop, Aba Ngwa North Diocese',
    bio: 'Rt. Rev. Nathan C. O. Kanu, Ph.D., is the spiritual father and Bishop of the Diocese of Aba Ngwa North. He is dedicated to spreading the gospel of Christ, nurturing spiritual maturity, and promoting educational and community development across the diocese.',
    image: '/public/img/bishop-nathan-kanu.jpg'
  },
  {
    id: 'administrator',
    name: 'Ven. Precious Okereke, Ph.D.',
    position: 'Cathedral Administrator',
    bio: 'Ven. Precious Okereke, Ph.D., is the chief administrative officer of All Saints\' Cathedral. He oversees daily operations, pastoral care, and liturgical coordination, ensuring that the cathedral remains a vibrant hub of worship and community support.',
    image: '/public/img/ven-precious-okereke.jpg'
  },
  {
    id: 'clergy-1',
    name: 'Ven. Emmanuel Onwunli',
    position: 'Cathedral Clergy',
    bio: 'Ven. Emmanuel Onwunli serves with dedication in the Cathedral clergy team, offering pastoral guidance, conducting services, and teaching the scriptures.',
    image: '/public/img/ven-emmanuel-onwunli.jpg'
  },
  {
    id: 'clergy-2',
    name: 'Rev. Canon Charles Ubani',
    position: 'Cathedral Clergy',
    bio: 'Rev. Canon Charles Ubani contributes to the spiritual growth of the congregation through active preaching, counseling, and leading community fellowships.',
    image: '/public/img/rev-canon-charles-ubani.jpg'
  },
  {
    id: 'clergy-3',
    name: 'Rev. Dr. Hart O. Hart',
    position: 'Cathedral Clergy',
    bio: 'Rev. Dr. Hart O. Hart brings academic depth and theological insights to the Cathedral teachings, Bible studies, and pastoral work.',
    image: '/public/img/rev-dr-hart-o-hart.jpg'
  },
  {
    id: 'clergy-4',
    name: 'Rev. Blessing Odiwonma Ihediwa',
    position: 'Cathedral Clergy',
    bio: 'Rev. Blessing Odiwonma Ihediwa provides spiritual leadership, pastoral care, and coordinates various fellowships inside the Cathedral.',
    image: '/public/img/rev-blessing-ihediwa.jpg'
  },
  {
    id: 'clergy-5',
    name: 'Rev. Christian C. Nwankpa',
    position: 'Cathedral Clergy',
    bio: 'Rev. Christian C. Nwankpa is passionate about youth ministry, evangelism, and driving the church\'s outreach programs.',
    image: '/public/img/rev-christian-nwankpa.jpg'
  },
  {
    id: 'clergy-6',
    name: 'Rev. Joseph A. W. Stephen',
    position: 'Cathedral Clergy',
    bio: 'Rev. Joseph A. W. Stephen serves in coordinates liturgical services, sacraments, and supports parish outreach initiatives.',
    image: '/public/img/rev-joseph-stephen.jpg'
  },
  {
    id: 'clergy-7',
    name: 'Rev. Pepple Promise',
    position: 'Cathedral Clergy',
    bio: 'Rev. Pepple Promise is dedicated to teaching scripture, organizing community welfare services, and leading intercessory prayers.',
    image: '/public/img/rev-pepple-promise.jpg'
  },
  {
    id: 'clergy-8',
    name: 'Rev. Samuel O. Unogu',
    position: 'Cathedral Clergy',
    bio: 'Rev. Samuel O. Unogu offers pastoral counsel, leads weekly service ministries, and works closely with parish fellowships.',
    image: '/public/img/rev-samuel-unogu.jpg'
  },
  {
    id: 'teacher-1',
    name: 'Ihunanyachi U. Nwogu',
    position: 'Church Teacher',
    bio: 'Ihunanyachi U. Nwogu assists the clergy in catechism, Sunday School education, and spiritual guidance for new converts.',
    image: '/public/img/ihunanyachi-nwogu.jpg'
  },
  {
    id: 'teacher-2',
    name: 'Mascot Evuka',
    position: 'Church Teacher',
    bio: 'Mascot Evuka is dedicated to laying sound biblical foundations for children and youth through structured classes and teachings.',
    image: '/public/img/mascot-evuka.jpg'
  },
  {
    id: 'teacher-3',
    name: 'Brightman Eze',
    position: 'Church Teacher',
    bio: 'Brightman Eze supports the educational outreach of the Cathedral, leading home fellowships and bible training seminars.',
    image: '/public/img/brightman-eze.jpg'
  },
  {
    id: 'clerk',
    name: 'Mrs. Juliet Pepple',
    position: 'Cathedral Clerk',
    bio: 'Mrs. Juliet Pepple coordinates all administrative correspondence, schedules church records, and keeps records of Cathedral activities.',
    image: '/public/img/juliet-pepple.jpg'
  }
];

export const servicesData: ServiceSchedule[] = [
  {
    id: 'sunday-school',
    name: 'Sunday School',
    time: '06:00 AM - 07:00 AM',
    day: 'Every Sunday',
    description: 'An interactive study of the scriptures, designed to build a solid biblical foundation for all ages.'
  },
  {
    id: 'first-service',
    name: 'First Service (Anglican Worship)',
    time: '07:00 AM - 09:00 AM',
    day: 'Every Sunday',
    description: 'Traditional service conducted in the reverence of Book of Common Prayer liturgy with hymns and communion.'
  },
  {
    id: 'second-service',
    name: 'Second Service (Contemporary Worship)',
    time: '09:00 AM - 11:00 AM',
    day: 'Every Sunday',
    description: 'A vibrant service featuring contemporary praise, worship, scripture teaching, and fellowships.'
  },
  {
    id: 'third-service',
    name: 'Third Service (Youth & English)',
    time: '11:00 AM - 01:00 PM',
    day: 'Every Sunday',
    description: 'Youth-focused and family service with modern music, interactive sermons, and focus on current life topics.'
  },
  {
    id: 'bible-study',
    name: 'Bible Study',
    time: '05:00 PM - 06:30 PM',
    day: 'Every Tuesday',
    description: 'Deep dive into biblical topics, verse-by-verse analysis, and answering critical faith questions.'
  },
  {
    id: 'midweek-service',
    name: 'Midweek Power Service',
    time: '09:00 AM - 11:30 AM',
    day: 'Every Thursday',
    description: 'A service of prayer, deliverance, testimonies, and spiritual renewal in the middle of the week.'
  },
  {
    id: 'holy-communion',
    name: 'Holy Communion & Saints Day',
    time: '06:00 AM - 07:15 AM',
    day: 'Every Wednesday',
    description: 'Midweek Communion Service honoring Saints\' calendars, offering deep reflection and corporate sacraments.'
  },
  {
    id: 'group-meetings',
    name: 'Group Fellowship Meetings',
    time: '04:00 PM - 06:00 PM',
    day: 'Every Last Sunday',
    description: 'Saints groups (St. Mark, St. Andrew, etc.) meet for fellowship, welfare discussions, and prayers.'
  },
  {
    id: 'special-programmes',
    name: 'Vigil & Monthly Breakthrough Night',
    time: '10:00 PM - 04:00 AM',
    day: 'Every First Friday',
    description: 'A night of intensive intercessory prayer, prophetic declarations, praises, and breakthroughs.'
  }
];

export const saintGroupsData: SaintGroup[] = [
  {
    id: 'st-mark',
    name: 'St. Mark Group',
    saintName: 'Saint Mark the Evangelist',
    saintDescription: 'St. Mark was the author of the Gospel of Mark and a companion of St. Peter. He is traditionally depicted as a winged lion, representing majesty, courage, and resurrection.',
    aboutSaint: {
      background: 'Mark, also known as John Mark in Acts, was the son of Mary, a Christian homeowner in Jerusalem where early believers gathered. He was a cousin of Barnabas.',
      calling: 'Mark joined Paul and Barnabas on their first missionary journey and later served closely with Peter in Rome, recording Peter\'s preaching in the second Gospel.',
      ministry: 'He founded the Church of Alexandria, Egypt, becoming its first bishop and establishing Christian teaching in North Africa before his martyrdom.',
      lessons: [
        'Overcoming Failure: Mark initially deserted Paul but later matured into an indispensable helper.',
        'Faithful Recording: He faithfully documented Peter\'s testimony for generations.',
        'Pioneering Spirit: He carried the Gospel to new regions, establishing long-standing Christian roots.'
      ]
    },
    representation: {
      fellowship: 'Fosters Christian unity and brotherhood among members, organizing quarterly home visits.',
      evangelism: 'Leads active door-to-door evangelism in the Abayi-Umuocham neighborhood.',
      welfare: 'Maintains a welfare fund to support members in need, providing scholarships and emergency medical aid.',
      development: 'Actively participates in structural upgrades of the Cathedral, including the recent seating improvements.',
      prayer: 'Hosts weekly chain prayers every Thursday at 6:00 PM.',
      service: 'Coordinates sanctuary cleaning and traffic management protocols during large Cathedral events.'
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
      'Quarterly Medical Outreach in the community',
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
      calling: 'Andrew was the first disciple to follow Jesus, immediately bringing his brother Simon Peter saying, "We have found the Messiah."',
      ministry: 'He preached around the Black Sea and Greece, where he was martyred on an X-shaped cross (Crux Decussata), expressing that he was unworthy to die on the same cross as Jesus.',
      lessons: [
        'Introduction to Christ: Andrew is always bringing people to Jesus in scripture (Peter, the boy with loaves, the Greeks).',
        'Humility: He was content to work in the shadow of his brother Simon Peter.',
        'Spiritual Discernment: He immediately recognized Jesus\' spiritual authority.'
      ]
    },
    representation: {
      fellowship: 'Creates an inclusive environment for new members, managing the cathedral\'s hospitality desk.',
      evangelism: 'Focuses on personal evangelism and bringing friends, family, and colleagues to church.',
      welfare: 'Provides food and clothing support to local orphanages and indigent widows twice a year.',
      development: 'Contributes to visual media upgrades (projector screens and sound system expansions).',
      prayer: 'Maintains a 24-hour intercessory prayer roster for the diocese.',
      service: 'Serves as ushers, sidesmen, and welcoming guides during services.'
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
      'Prison Outreaches and Charity distributions',
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
      background: 'Jude was one of the Twelve Apostles, likely related to Jesus, and often referred to as Thaddeus to distinguish him from Judas Iscariot.',
      calling: 'Called to follow Christ early in His ministry, he walked alongside Jesus as one of the key witnesses of His resurrection.',
      ministry: 'He preached in Mesopotamia, Libya, Turkey, and Persia, where he wrote his epistle and eventually suffered martyrdom.',
      lessons: [
        'Contending for the Faith: Standing firm in doctrine against false teachings.',
        'Hope in Despair: Reminding believers of God\'s power to keep them from falling.',
        'Quiet Persistence: Doing apostolic work without seeking personal glory.'
      ]
    },
    representation: {
      fellowship: 'Supports members facing crises (illness, bereavement, financial hardship) with constant visitation.',
      evangelism: 'Conducts evangelical outreaches to hospitals and prisons, sharing hope with the dejected.',
      welfare: 'Administers the Cathedral\'s Emergency Welfare Fund, providing immediate financial relief.',
      development: 'Funds maintenance projects, including generators and cooling systems in the cathedral.',
      prayer: 'Organizes monthly deliverance and breakthrough prayers.',
      service: 'Volunteers in the Cathedral medical team and counseling center.'
    },
    executives: {
      chairman: 'Dr. Obinna O. Okoye',
      viceChairman: 'Engr. Festus E. Chukwu',
      secretary: 'Bro. Jude T. Nwachukwu',
      treasurer: 'Mrs. Rebecca A. Nnamdi',
      chaplain: 'Rev. Blessing Odiwonma Ihediwa'
    },
    activities: [
      'Monthly Meeting (Every 3rd Sunday after service)',
      'Hospital Visitations and healing prayers (Every 2nd Saturday)',
      'Skill Acquisition Seminars for unemployed youths',
      'Annual St. Jude\'s Day Feast'
    ],
    whatsappLink: 'https://chat.whatsapp.com/stjudeplaceholder'
  },
  {
    id: 'st-simon',
    name: 'St. Simon Group',
    saintName: 'Saint Simon the Zealot',
    saintDescription: 'St. Simon was known as the Zealot, indicating his passion for the Jewish law and his subsequent fiery zeal for Christ\'s kingdom.',
    aboutSaint: {
      background: 'Originally associated with the Zealots, a political movement defending Jewish law, Simon redirected his zeal from politics to the Gospel.',
      calling: 'Chosen as one of the Twelve Apostles, Simon left his revolutionary ideals to follow the Prince of Peace.',
      ministry: 'Preached the Gospel in Egypt, Cyrene, and Persia, working alongside Jude, and suffered martyrdom by being sawn in half.',
      lessons: [
        'Redirected Zeal: Channeling passion from political or secular ambitions into the spiritual kingdom.',
        'Unity in Diversity: Working alongside Matthew (a tax collector, political opponent) in unity under Christ.',
        'Absolute Commitment: Showing total loyalty to the Christian mission.'
      ]
    },
    representation: {
      fellowship: 'Promotes unity, peace, and cross-cultural integration within the Cathedral congregation.',
      evangelism: 'Organizes village outreaches and church planting projects in rural areas of Aba Ngwa North.',
      welfare: 'Distributes food items and household essentials to widows and elderly church members.',
      development: 'Supports Cathedral agricultural and investment projects to create self-sustaining revenue.',
      prayer: 'Hosts monthly praise and prayer night vigils.',
      service: 'Serves in the security and protocol team during major church programs.'
    },
    executives: {
      chairman: 'Chief Simon A. Ukaegbu',
      viceChairman: 'Bro. Paulson E. Opara',
      secretary: 'Sis. Grace A. Daniel',
      treasurer: 'Bro. Christian C. Eke',
      chaplain: 'Rev. Samuel O. Unogu'
    },
    activities: [
      'Monthly General Meeting (Every 4th Sunday at 4:00 PM)',
      'Rural Evangelism Outreaches (Bi-annual)',
      'Elderly Members\' Welfare Day (Quarterly)',
      'Annual Thanksgiving and Saint\'s Celebration'
    ],
    whatsappLink: 'https://chat.whatsapp.com/stsimonplaceholder'
  },
  {
    id: 'st-philip',
    name: 'St. Philip Group',
    saintName: 'Saint Philip the Apostle',
    saintDescription: 'St. Philip was one of the first disciples called by Jesus. Practical-minded and direct, he is remembered for bringing Nathanael to Jesus with the words "Come and see."',
    aboutSaint: {
      background: 'A native of Bethsaida, Galilee, Philip was familiar with Greek culture, often acting as a bridge between Greek seekers and Jesus.',
      calling: 'Jesus found Philip and said to him, "Follow me." Philip immediately went and invited his friend Nathanael.',
      ministry: 'He preached in Phrygia and Hierapolis (modern Turkey), where he was martyred. He is known for asking Jesus, "Lord, show us the Father."',
      lessons: [
        'Simple Invitation: The power of a simple, non-argumentative invite: "Come and see."',
        'Practicality: Asking practical questions, though learning to trust God\'s supernatural multiplication.',
        'Cultural Bridge: Using his background to welcome outsiders to the faith.'
      ]
    },
    representation: {
      fellowship: 'Leads the Cathedral\'s visitor welcome program, ensuring guests feel at home.',
      evangelism: 'Organizes campus and school outreaches, sharing the gospel with the younger generation.',
      welfare: 'Maintains a scholarship fund supporting secondary school students within the parish.',
      development: 'Invests in upgrading the Cathedral\'s IT, website, and digital communications infrastructure.',
      prayer: 'Meets every Monday morning for business and career breakthrough prayers.',
      service: 'Provides technical support, audio/visual control, and web broadcasting during services.'
    },
    executives: {
      chairman: 'Sir Philip O. Onyekwere',
      viceChairman: 'Bro. Gregory C. Amadi',
      secretary: 'Sis. Blessing O. Charles',
      treasurer: 'Mrs. Patience O. Ugo',
      chaplain: 'Rev. Christian C. Nwankpa'
    },
    activities: [
      'Monthly Meeting (Every 1st Sunday after 2nd Service)',
      'ICT and Digital Skills Training for youths (Annual)',
      'Business Networking Breakfast and prayer seminars',
      'Annual Feast of St. Philip celebration'
    ],
    whatsappLink: 'https://chat.whatsapp.com/stphilipplaceholder'
  },
  {
    id: 'st-paul',
    name: 'St. Paul Group',
    saintName: 'Saint Paul the Apostle',
    saintDescription: 'St. Paul, formerly Saul of Tarsus, was the Apostle to the Gentiles. A theologian, missionary, and author of much of the New Testament, he represents absolute transformation and doctrinal clarity.',
    aboutSaint: {
      background: 'A Roman citizen and highly educated Pharisee who initially persecuted the early Church with zeal.',
      calling: 'Encountered the risen Christ on the road to Damascus, leading to his blindness, conversion, and calling to carry the Gospel to the Gentiles.',
      ministry: 'Conducted three historic missionary journeys, planted churches throughout the Mediterranean, wrote 13 epistles, and was martyred in Rome.',
      lessons: [
        'Transforming Grace: No one is beyond the reach of God\'s saving power.',
        'Intellectual Engagement: Systematically presenting and defending Christian theology.',
        'Endurance: Pressing forward in service despite shipwreck, beatings, and imprisonment.'
      ]
    },
    representation: {
      fellowship: 'Organizes Bible studies, cell groups, and doctrinal debates to deepen theological understanding.',
      evangelism: 'Coordinates the Cathedral\'s outdoor crusades, church-planting initiatives, and missions.',
      welfare: 'Supports theological students with tuition, books, and living expenses.',
      development: 'Leads the Cathedral Building Expansion Fund, driving architectural design and financing.',
      prayer: 'Runs an intercessory prayer network that supports the church\'s missionary outposts.',
      service: 'Organizes public lectures, Christian literature distribution, and bookstore management.'
    },
    executives: {
      chairman: 'Prof. Paul C. Nwosu',
      viceChairman: 'Sir Timothy U. Alao',
      secretary: 'Bro. Silas E. Ndu',
      treasurer: 'Mrs. Priscilla C. Daniel',
      chaplain: 'Ven. Precious Okereke, Ph.D.'
    },
    activities: [
      'Monthly Doctrinal Seminar and Fellowship (Every 3rd Sunday at 4:30 PM)',
      'Missions and Crusade Outreaches (Annual)',
      'Cathedral Bookstore Support & Literature distribution',
      'Annual St. Paul\'s Conversion Thanksgiving'
    ],
    whatsappLink: 'https://chat.whatsapp.com/stpaulplaceholder'
  },
  {
    id: 'st-bartholomew',
    name: 'St. Bartholomew Group',
    saintName: 'Saint Bartholomew (Nathanael)',
    saintDescription: 'St. Bartholomew, also known as Nathanael, was a man of integrity whom Jesus described as "a true Israelite in whom there is no guile." He represents sincerity, devotion, and steadfast faith.',
    aboutSaint: {
      background: 'Born in Cana of Galilee, Bartholomew was a seeker of truth who spent time studying the prophets under a fig tree.',
      calling: 'Brought to Jesus by Philip. Although skeptical at first ("Can anything good come out of Nazareth?"), he immediately confessed Christ after Jesus showed supernatural knowledge of him.',
      ministry: 'He preached in India, Armenia, and Ethiopia, converting thousands before being flayed alive and martyred for his faith.',
      lessons: [
        'Integrity: Living transparently before God and man without hypocrisy.',
        'Open-mindedness: Willingness to "come and see" and let personal experience overcome prejudice.',
        'Silent Sufferance: Remaining faithful to death under extreme trials.'
      ]
    },
    representation: {
      fellowship: 'Fosters transparency, accountability, and ethical values among church members.',
      evangelism: 'Organizes village missions and outdoor film shows to share the Gospel visually.',
      welfare: 'Maintains the Cathedral food bank, providing monthly groceries to impoverished households.',
      development: 'Funds water purification projects and community borehole maintenance.',
      prayer: 'Meets every Friday at 5:00 PM for deep spiritual alignment and quiet meditation.',
      service: 'Serves in the Cathedral sanitation and compound maintenance crew.'
    },
    executives: {
      chairman: 'Bro. Bartholomew N. Ezelu',
      viceChairman: 'Elder Thomas O. Igwe',
      secretary: 'Bro. Philip I. Ude',
      treasurer: 'Mrs. Martha N. Jude',
      chaplain: 'Rev. Dr. Hart O. Hart'
    },
    activities: [
      'Monthly General Meeting (Every 2nd Sunday after service)',
      'Community Clean-up and environmental sanitation services',
      'Food Bank distribution day (Last Saturday of every month)',
      'Feast of St. Bartholomew Thanksgiving'
    ],
    whatsappLink: 'https://chat.whatsapp.com/stbartholomewplaceholder'
  },
  {
    id: 'st-luke',
    name: 'St. Luke Group',
    saintName: 'Saint Luke the Evangelist',
    saintDescription: 'St. Luke was a physician, companion of St. Paul, and author of the Gospel of Luke and the Acts of the Apostles. He is the patron saint of doctors and artists, representing healing, mercy, and detail.',
    aboutSaint: {
      background: 'A Gentile physician, likely born in Antioch, highly educated in Greek literature, medicine, and painting.',
      calling: 'Joined Paul on his second missionary journey, remaining his loyal physician and chronicler through his trials and imprisonments.',
      ministry: 'He compiled a detailed, orderly account of Christ\'s life and the early Church\'s growth, emphasizing Christ\'s compassion for the poor, women, and outcasts.',
      lessons: [
        'Compassion and Healing: Integrating professional medical skills with Christian ministry.',
        'Orderly Stewardship: Carefully researching and documenting historical facts of faith.',
        'Loyalty: Staying by Paul\'s side when others deserted him ("Only Luke is with me").'
      ]
    },
    representation: {
      fellowship: 'Organizes support groups for healthcare workers and coordinates mental health counseling.',
      evangelism: 'Executes free community medical missions, combining clinical care with sharing the Gospel.',
      welfare: 'Directs the Cathedral Clinic, providing free essential drugs and checkups for parishioners.',
      development: 'Drives the construction and equipping of the Cathedral Clinic and welfare facility.',
      prayer: 'Conducts weekly healing prayers for sick church members.',
      service: 'Coordinates first-aid, emergency response, and clinical care during church services.'
    },
    executives: {
      chairman: 'Dr. Luke A. Onyebuchi',
      viceChairman: 'Sis. Florence O. Nnaji (RN)',
      secretary: 'Bro. Alexander E. Peters',
      treasurer: 'Dr. (Mrs.) Helen C. Okoro',
      chaplain: 'Rev. Pepple Promise'
    },
    activities: [
      'Monthly General Meeting (Every 1st Sunday after service)',
      'Monthly Free Medical Checkup Clinic (First Sunday)',
      'Health and Lifestyle Seminars (Bi-annual)',
      'Annual Feast of St. Luke Medical Thanksgiving'
    ],
    whatsappLink: 'https://chat.whatsapp.com/stlukeplaceholder'
  },
  {
    id: 'st-michael',
    name: 'St. Michael Group',
    saintName: 'Saint Michael the Archangel',
    saintDescription: 'St. Michael is the Archangel who leads the heavenly hosts in the battle against evil. He represents spiritual warfare, divine protection, justice, and absolute loyalty to God.',
    aboutSaint: {
      background: 'Mentioned in Daniel, Jude, and Revelation, Michael is the prince of angels who fights against Satan and protects God\'s people.',
      calling: 'As an archangel, Michael stands in the presence of God, executing divine judgments and defending the heavenly realm.',
      ministry: 'His name means "Who is like God?", a battle cry that humbles pride and exalts the sovereignty of the Creator.',
      lessons: [
        'Spiritual Warfare: Actively standing against spiritual deception and darkness in prayer.',
        'Divine Justice: Defending the weak, oppressed, and maintaining righteousness.',
        'Absolute Loyalty: Resisting rebellion and honoring God\'s supreme authority.'
      ]
    },
    representation: {
      fellowship: 'Instills discipline, order, and spiritual alertness among the Cathedral community.',
      evangelism: 'Reaches out to youths caught in cultism, gang violence, and drug abuse, helping them find deliverance.',
      welfare: 'Provides security support, legal aid, and rehabilitation sponsorship for vulnerable youths.',
      development: 'Supports security infrastructure upgrades (gates, fencing, and surveillance cameras).',
      prayer: 'Leads the Cathedral\'s Deliverance and Spiritual Warfare Ministry.',
      service: 'Coordinates security protocols, parking arrangements, and crowd management.'
    },
    executives: {
      chairman: 'Rtd. Capt. Michael C. Udeh',
      viceChairman: 'Bro. Gabriel O. Eze',
      secretary: 'Bro. Raphael A. Okon',
      treasurer: 'Sis. Uchechi G. Nwachukwu',
      chaplain: 'Rev. Samuel O. Unogu'
    },
    activities: [
      'Monthly Meeting and Prayer Session (Every 3rd Saturday at 4:00 PM)',
      'Weekly Prayer and Deliverance Service support (Thursdays)',
      'Youth Anti-Drug and Cultism Awareness campaigns',
      'Annual Michaelmas Thanksgiving Celebration'
    ],
    whatsappLink: 'https://chat.whatsapp.com/stmichaelplaceholder'
  },
  {
    id: 'st-stephen',
    name: 'St. Stephen Group',
    saintName: 'Saint Stephen the Martyr',
    saintDescription: 'St. Stephen was one of the first seven deacons and the first Christian martyr. Known for being "full of faith and the Holy Spirit," he represents sacrificial service, forgiveness, and courage.',
    aboutSaint: {
      background: 'A Greek-speaking Jew chosen by the apostles to manage welfare distributions to widows in Jerusalem.',
      calling: 'Ordained as a deacon to serve tables, he also performed wonders and spoke with wisdom that opponents could not resist.',
      ministry: 'Arrested by the Sanhedrin, he delivered a powerful historical defense of the Gospel. He was stoned to death while praying for his murderers\' forgiveness.',
      lessons: [
        'Service is Worship: Faithfully serving widows is as vital as preaching.',
        'Forgiving Enemies: Praying for persecutors ("Lord, lay not this sin to their charge").',
        'Vision of Christ: Keeping eyes fixed on the open heavens in times of crisis.'
      ]
    },
    representation: {
      fellowship: 'Assists in resolving disputes and ensuring fair welfare distribution in the Cathedral.',
      evangelism: 'Focuses on street evangelism and public preaching of the Word.',
      welfare: 'Manages the Cathedral\'s Widow Support Program, providing monthly stipends.',
      development: 'Finances educational resources and bible school tuitions for church teachers.',
      prayer: 'Meets every Wednesday at 5:00 PM for intercession for persecuted Christians worldwide.',
      service: 'Manages the distribution of sacraments, bulletins, and seats during services.'
    },
    executives: {
      chairman: 'Sir Stephen I. Maduka',
      viceChairman: 'Bro. Matthew E. Johnson',
      secretary: 'Bro. Philip O. Chidi',
      treasurer: 'Mrs. Beatrice C. Ani',
      chaplain: 'Rev. Christian C. Nwankpa'
    },
    activities: [
      'Monthly General Meeting (Every 4th Sunday after service)',
      'Widows\' Support Welfare Distribution (Every last Saturday)',
      'Intercessory prayer for persecuted churches (Monthly)',
      'Annual St. Stephen\'s Day Thanksgiving (December 26)'
    ],
    whatsappLink: 'https://chat.whatsapp.com/ststephenplaceholder'
  }
];

export const sermonsData: Sermon[] = [
  {
    id: 'sermon-1',
    title: 'Contending Earnestly for the Faith',
    speaker: 'Rt. Rev. Nathan C. O. Kanu, Ph.D.',
    scripture: 'Jude 1:3-4',
    date: '2026-06-28',
    readingTime: '8 mins',
    summary: 'A call to modern Christians to remain steadfast in the apostolic doctrine, resisting the subtle dilutions of secular culture and compromising teachings.',
    fullArticle: `Beloved, when I gave all diligence to write unto you of the common salvation, it was needful for me to write unto you, and exhort you that ye should earnestly contend for the faith which was once delivered unto the saints (Jude 1:3).

In our contemporary world, the call to "contend for the faith" has never been more urgent. Secularism, moral relativism, and compromising doctrines are subtly creeping into the Church. The Gospel is not ours to edit; it is ours to proclaim and preserve.

First, we must know what we believe. Doctrinal literacy is fading. Without a deep understanding of scripture, we are prone to being tossed to and fro by every wind of doctrine. We must return to systematic Bible study, catechism, and theological discipline.

Second, contending requires courage. We live in a society that demands conformity and labels absolute truth as narrow-mindedness. Yet, Christ calls us to stand as beacons of light. We must speak the truth, but we must do so in love, portraying the beauty of holiness in our character.

Finally, we contend by our lifestyle. The strongest defense of the Gospel is a transformed life. When we love our enemies, feed the hungry, live pure lives, and walk in humility, we silence the critics of Christianity. Let us stand firm, anchored in the truth of God's Word, knowing that He who called us is faithful.`,
    pdfUrl: '/sermons/contending-earnestly-faith.pdf',
    audioUrl: '/sermons/sermon1.mp3',
    videoUrl: 'https://www.youtube.com/embed/placeholder1',
    topic: 'Faith & Doctrine',
    category: 'Wermon'
  },
  {
    id: 'sermon-2',
    title: 'The Blueprint of a Transforming Community',
    speaker: 'Ven. Precious Okereke, Ph.D.',
    scripture: 'Acts 2:42-47',
    date: '2026-06-21',
    readingTime: '6 mins',
    summary: 'Exploring how the early Church combined steadfast doctrine, deep fellowship, corporate breaking of bread, and prayers to turn their world upside down.',
    fullArticle: `And they continued stedfastly in the apostles' doctrine and fellowship, and in breaking of bread, and in prayers (Acts 2:42).

What makes a church a Cathedral in spirit and power? It is not merely the height of its spires or the resonance of its choir, but its adherence to the early church model. The book of Acts outlines four pillars of a transforming Christian community.

The first pillar is Doctrinal Steadfastness. The early believers submitted themselves to the teaching of the apostles. Sound teaching guards the heart against error and creates a solid foundation for spiritual maturity.

The second pillar is Fellowship (Koinonia). This is more than social gatherings; it is the deep, spiritual sharing of life, resources, joys, and sorrows. It means carrying one another's burdens and ensuring that no one among us suffers in isolation.

The third is the Breaking of Bread. Holy Communion is the heart of Anglican worship. It connects us to the sacrifice of Calvary and feeds our souls with the spiritual food of Christ's body and blood. It is a visible sign of our unity in Him.

The fourth is Prayer. A church that does not pray is a church that operates in human strength. Through prayer, we tap into the supernatural power of the Holy Spirit, dismantling strongholds and inviting God's kingdom into our community. When we practice these pillars, the Lord will add to our number daily those who are being saved.`,
    pdfUrl: '/sermons/blueprint-transforming-community.pdf',
    audioUrl: '/sermons/sermon2.mp3',
    videoUrl: 'https://www.youtube.com/embed/placeholder2',
    topic: 'Community & Fellowship',
    category: 'Wermon'
  },
  {
    id: 'sermon-3',
    title: 'Understanding the Anglican Heritage and Liturgy',
    speaker: 'Rev. Dr. Hart O. Hart',
    scripture: '1 Corinthians 14:40',
    date: '2026-06-14',
    readingTime: '10 mins',
    summary: 'A theological article explaining the richness of Anglican liturgy, the structure of the Book of Common Prayer, and why orderliness enhances spiritual worship.',
    fullArticle: `Let all things be done decently and in order (1 Corinthians 14:40).

To many, liturgy is seen as mere repetition or dry ritual. However, when understood through the lenses of history, theology, and scripture, the Anglican liturgy is a rich, biblical tapestry designed to engage the whole person in the worship of God.

Our liturgy is scriptural. Over 70% of the Book of Common Prayer (BCP) is drawn directly from the Bible. From the opening sentences to the final blessing, we are praying, singing, and hearing scripture. 

Our liturgy is participatory. It is not a performance by the clergy while the congregation spectates. The word "liturgy" means "the work of the people." Through responses, chants, and corporate prayers, the entire congregation actively worships together.

Our liturgy is formative. Repeating prayers of confession, praise, and creeds shapes our minds and hearts over time. It teaches us how to pray, what to believe, and how to align our lives with the gospel. It unites Anglicans worldwide in a common voice of prayer. Let us approach our liturgy with reverence and understanding, allowing it to draw us closer to the Throne of Grace.`,
    pdfUrl: '/sermons/understanding-anglican-heritage.pdf',
    topic: 'Heritage & Liturgy',
    category: 'Article'
  }
];

export const announcementsData: Announcement[] = [
  {
    id: 'announce-1',
    title: 'All Saints\' Cathedral 2026 Annual Harvest and Thanksgiving',
    category: 'Events',
    content: 'We are pleased to announce our Annual Harvest and Thanksgiving Service, themed "Harvest of Divine Overflow". Join us as we express our gratitude to God for His blessings, protection, and provision over our families and nation. Pre-harvest events and fundraising committees are already active. Please see your Saint Group leaders for levy allocations and thanksgiving slots.',
    date: '2026-07-01',
    expiryDate: '2026-11-30',
    isPinned: true,
    pdfBulletin: '/bulletins/harvest-2026.pdf'
  },
  {
    id: 'announce-2',
    title: 'Cathedral Clinic Now Offering Free Weekly Medical Screening',
    category: 'Worship',
    content: 'In line with our mission of welfare and community care, the Cathedral Clinic, run by the St. Luke Group, will offer free blood pressure, blood sugar, and basic health screenings every first Sunday of the month immediately after the 2nd Service. All parishioners are encouraged to utilize this opportunity to monitor their health.',
    date: '2026-07-03',
    expiryDate: '2026-12-31',
    isPinned: false
  },
  {
    id: 'announce-3',
    title: 'Joint Confirmation and Admissions into Girls Guild and Mothers Union',
    category: 'Women',
    content: 'The Diocesan Bishop, Rt. Rev. Nathan C. O. Kanu, Ph.D., will visit the Cathedral on Sunday, August 16, 2026, for the joint confirmation service and admission of candidates into the Girls\' Guild, Women\'s Guild, and Mothers\' Union. Classes for candidates hold every Saturday at 3:00 PM in the Cathedral hall. Attendance is compulsory.',
    date: '2026-07-02',
    expiryDate: '2026-08-16',
    isPinned: true
  }
];

export const eventsData: ChurchEvent[] = [
  {
    id: 'event-1',
    title: 'Monthly Breakthrough Night Vigil',
    date: '2026-08-07',
    time: '10:00 PM - 04:00 AM',
    location: 'Cathedral Main Auditorium',
    description: 'A night of intensive prayers, prophetic declarations, deliverance, and praise. Come and experience God\'s power.',
    category: 'Vigil'
  },
  {
    id: 'event-2',
    title: 'Annual Bible Study Conference',
    date: '2026-09-10',
    time: '05:00 PM - 07:30 PM Daily',
    location: 'All Saints\' Cathedral Auditorium',
    description: 'A three-day conference with deep expository teachings, workshops, and question-and-answer sessions. Guest speakers from the Anglican Communion.',
    category: 'Conference'
  }
];
