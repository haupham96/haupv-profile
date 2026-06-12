/* =============================================================================
 *  CONTENT — everything editable lives here, in one place.
 *  Two language objects (en / vi). Render is driven entirely by this data.
 * ========================================================================== */

window.CONTACT = {
    email: 'hau.pv.0596@gmail.com',
    phone: '0966188700',
    githubUrl: 'https://github.com/haupham96',
    githubLabel: 'github.com/haupham96',
    facebookUrl: 'https://facebook.com/hau.pv.0596',
    facebookLabel: 'fb.com/hau.pv.0596',
    dob: '10/05/1996'
};

window.T = {
    en: {
        nav: {about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects'},
        ui: {
            available: 'Open to opportunities',
            roleTitle: 'Full-stack Developer',
            tagline: 'I build enterprise systems for manufacturing — from shopfloor tracking and RFID warehousing to quality inspection — connecting Java backends with the devices on the factory floor.',
            emailMe: 'Email me',
            exportPdf: 'Export PDF',
            location: 'Ho Chi Minh City, Vietnam',
            labelEmail: 'Email',
            labelPhone: 'Phone',
            labelLocation: 'Location',
            labelGithub: 'GitHub',
            labelDob: 'Date of birth',
            sectionAbout: 'About',
            sectionSkills: 'Skills & Tech Stack',
            sectionEducation: 'Education',
            sectionExperience: 'Work Experience',
            sectionProjects: 'Personal Projects'
        },
        about: [
            'Full-stack Developer with experience in building enterprise systems for manufacturing, warehouse management, quality inspection, construction management, and medical record systems. Strong background in backend development using Java, Spring Boot, Spring MVC, MyBatis, Hibernate, and relational databases such as MySQL and PostgreSQL.',
            'Experienced in developing mobile and web applications using Vue.js, uni-app, HBuilderX, TypeScript, Knockout.js, JSP, Angular, HTML, CSS, JavaScript, and Bootstrap. Hands-on experience with barcode scanning, NFC check-in/check-out, RFID device integration, Android shopfloor applications, reporting, production tracking, and hardware SDK integration.',
            'Skilled in analyzing business workflows, designing database structures, developing backend APIs, building user-facing applications, and integrating systems with factory devices to improve traceability, production visibility, and operational efficiency.'
        ],
        skills: [
            {cat: 'Backend', items: ['Java', 'Spring Boot', 'Spring MVC', 'MyBatis', 'Hibernate', 'JSP']},
            {cat: 'Database', items: ['MySQL', 'PostgreSQL']},
            {
                cat: 'Frontend',
                items: ['Vue.js', 'TypeScript', 'JavaScript', 'Knockout.js', 'Angular', 'HTML', 'CSS', 'Bootstrap']
            },
            {cat: 'Mobile / Hybrid App', items: ['uni-app', 'HBuilderX', 'Android']},
            {cat: 'Testing', items: ['Cypress']},
            {
                cat: 'Hardware / Integration',
                items: ['Barcode Scanner', 'NFC', 'RFID Reader', 'Chainway RFID', 'RFID Gate Reader', 'Fingerprint Auth', 'Device SDK']
            },
            {cat: 'Reporting', items: ['Excel Export', 'CSV Export', 'Email Reports']},
            {
                cat: 'Domain Knowledge',
                items: ['Manufacturing Execution', 'Shopfloor Tracking', 'Quality Inspection', 'Warehouse Management', 'RFID Inventory', 'Construction Management', 'Medical Record System']
            }
        ],
        education: {
            school: 'CodeGym Da Nang',
            program: 'Java Full-stack Program',
            period: 'Nov 2021 – May 2022',
            tech: ['Java', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Spring MVC', 'Spring Boot', 'Angular']
        },
        experience: [
            {
                company: 'Bowker Asia',
                role: 'Full-stack Developer',
                period: 'Apr 2024 – Present',
                current: true,
                domain: 'Garment Manufacturing Systems',
                projects: [
                    {
                        name: 'Shopfloor Tracking System', sub: 'Garment Manufacturing Execution',
                        stack: ['Spring Boot', 'MyBatis', 'MySQL', 'Vue.js', 'uni-app', 'HBuilderX', 'Android'],
                        bullets: [
                            'Developed and maintained a Shopfloor Tracking System for garment manufacturing, covering Cutting, Second Operation, Bundling/Matching, and Sewing production tracking.',
                            'Built backend services with Spring Boot and MyBatis to manage bundle barcode generation, bundle movement, operation status, and sewing output recording.',
                            'Designed and optimized MySQL tables and queries to support production tracking, WIP visibility, and barcode-based traceability.',
                            'Developed Android shopfloor applications using Vue.js with uni-app in HBuilderX, enabling operators to perform barcode scanning, production reporting, and shopfloor process tracking on mobile devices.',
                            'Integrated NFC card-based check-in/check-out functionality to record worker attendance and calculate actual working hours.',
                            'Supported Second Operation workflows including embroidery, printing, heat transfer, pad printing, bonding, and fusing.',
                            'Enabled end-to-end traceability of garment bundles from fabric cutting to second operation and sewing output through barcode scanning.',
                            'Improved production data accuracy, attendance tracking, and real-time visibility of work-in-progress across factory departments.'
                        ]
                    },
                    {
                        name: 'E-Inspection System', sub: 'Garment Quality Control Inspection',
                        stack: ['Vue.js', 'uni-app', 'HBuilderX', 'Android', 'Spring MVC', 'JSP'],
                        bullets: [
                            'Developed and maintained an E-Inspection System used by QC teams to inspect finished garments after sewing production, as the next step of the Shopfloor Tracking System.',
                            'Integrated production output data from the Shopfloor system, allowing QC users to inspect products after workers reported sewing output.',
                            'Built Android QC inspection applications using Vue.js with uni-app in HBuilderX, enabling inspectors to perform garment quality checks directly on the factory floor.',
                            'Implemented defect recording features that allow QC users to capture defect photos, mark defect areas on images, and record inspection results as Pass or Fail.',
                            'Supported rework workflows by sending failed garments back to sewing operators for repair and allowing QC teams to re-inspect them after correction.',
                            'Integrated TLS warning light system with the Shopfloor application to alert sewing lines when defect thresholds are exceeded.',
                            'Implemented push notification alerts to the Shopfloor application when serious quality issues triggered the warning light system, helping production teams respond quickly to quality problems.',
                            'Developed backend and portal features using Spring MVC and JSP to manage inspection records, defect data, QC results, and quality monitoring reports.',
                            'Improved quality issue visibility, defect traceability, and communication between QC teams and sewing production lines.'
                        ]
                    },
                    {
                        name: 'Sample RFID Management Module', sub: 'Warehouse Management System',
                        stack: ['Vue.js', 'uni-app', 'HBuilderX', 'Android', 'Java', 'Spring Boot', 'RFID SDK'],
                        bullets: [
                            'Developed a Sample RFID Management module within the WMS to manage sample garments, RFID registration, inventory counting, and warehouse security monitoring.',
                            'Built Android applications using Vue.js with uni-app in HBuilderX for RFID scanning, barcode scanning, carton management, and gate monitoring.',
                            'Integrated Chainway RFID handheld devices to read RFID chips sewn into sample garments and map RFID tags with unique sample barcodes.',
                            'Implemented RFID-based inventory counting, allowing users to scan multiple samples inside a carton and generate a carton barcode to track all samples stored in that carton.',
                            'Integrated RFID gate readers at sample room entrances and exits to detect sample movements and trigger alarms for unauthorized checkout.',
                            'Developed sample borrowing workflows requiring users to register checkout requests before taking samples out of the warehouse.',
                            'Built tablet-based monitoring screens for gate readers, enabling PIC users to view detected RFID tags and confirm authorized movement using fingerprint authentication.',
                            'Integrated RFID vendor SDKs with Java Spring Boot services and Android applications to support device communication, RFID reading, and alarm handling.',
                            'Implemented daily email reports for sample room managers and Security teams, summarizing RFID alarm records and unauthorized sample movements.',
                            'Improved sample traceability, inventory accuracy, and security control across sample warehouse operations.'
                        ]
                    }
                ]
            },
            {
                company: 'BeetechSoft',
                role: 'Java Developer',
                period: 'Nov 2022 – Mar 2024',
                current: false,
                domain: 'Construction Management',
                projects: [
                    {
                        name: 'Jacic Construction Management System', sub: 'Construction & material management — Japan',
                        stack: ['Spring Boot', 'MyBatis', 'PostgreSQL', 'Cypress'],
                        bullets: [
                            'Developed and maintained the Jacic system for managing construction projects and materials used in each construction site in Japan.',
                            'Built backend features using Spring Boot and MyBatis to support construction data management, material tracking, and reporting workflows.',
                            'Designed and maintained PostgreSQL queries and database structures for construction and material management.',
                            'Implemented data collection and reporting features to export construction and material data to Excel and CSV files.',
                            'Supported automated testing using Cypress to improve application reliability and reduce regression issues.'
                        ]
                    }
                ]
            },
            {
                company: '3S Intersoft',
                role: 'Java Developer',
                period: 'May 2022 – Oct 2022',
                current: false,
                domain: 'Medical Record System',
                projects: [
                    {
                        name: 'Nittsu Medical Record System', sub: 'Healthcare record management',
                        stack: ['Spring Boot', 'Hibernate', 'PostgreSQL', 'TypeScript', 'Knockout.js'],
                        bullets: [
                            'Maintained and enhanced the Nittsu medical record system by fixing bugs, improving existing features, and developing new functionalities.',
                            'Developed backend services using Spring Boot and Hibernate to support medical record management workflows.',
                            'Worked with PostgreSQL for data storage, query updates, and issue investigation.',
                            'Developed and maintained frontend features using TypeScript and Knockout.js.',
                            'Collaborated with the team to analyze issues, debug production problems, and deliver stable system improvements.'
                        ]
                    }
                ]
            }
        ],
        projects: [
            {
                name: 'Tarot Agent',
                tag: 'AI · Mobile',
                icon: 'assets/img/app-icon-tarot-agent.png',
                desc: 'AI-powered tarot reading application.',
                links: [{label: 'Landing page', url: 'https://tarot-agent-eta.vercel.app'}, {
                    label: 'Google Play',
                    url: 'https://play.google.com/store/apps/details?id=app.marco.tarotagent'
                }]
            },
            {
                name: 'Rune Oracle',
                tag: 'AI · Mobile',
                icon: 'assets/img/app-icon-rune-oracle.png',
                desc: 'Rune-based oracle and divination application.',
                links: [{label: 'Landing page', url: 'https://rune-oracle-gamma.vercel.app'}, {
                    label: 'App Store',
                    url: 'https://apps.apple.com/us/app/rune-oracle/id6769952350'
                }]
            }
        ]
    },

    vi: {
        nav: {about: 'Giới thiệu', skills: 'Kỹ năng', experience: 'Kinh nghiệm', projects: 'Dự án'},
        ui: {
            available: 'Sẵn sàng cho cơ hội mới',
            roleTitle: 'Lập trình viên Full-stack',
            tagline: 'Tôi xây dựng các hệ thống doanh nghiệp cho ngành sản xuất — từ theo dõi shopfloor, kho RFID đến kiểm tra chất lượng — kết nối backend Java với các thiết bị tại nhà máy.',
            emailMe: 'Gửi email',
            exportPdf: 'Xuất PDF',
            location: 'TP. Hồ Chí Minh, Việt Nam',
            labelEmail: 'Email',
            labelPhone: 'Điện thoại',
            labelLocation: 'Địa điểm',
            labelGithub: 'GitHub',
            labelDob: 'Ngày sinh',
            sectionAbout: 'Giới thiệu',
            sectionSkills: 'Kỹ năng & Công nghệ',
            sectionEducation: 'Học vấn',
            sectionExperience: 'Kinh nghiệm làm việc',
            sectionProjects: 'Dự án cá nhân'
        },
        about: [
            'Lập trình viên Full-stack có kinh nghiệm xây dựng các hệ thống doanh nghiệp trong lĩnh vực sản xuất, quản lý kho, kiểm tra chất lượng, quản lý công trình và hệ thống hồ sơ y tế. Có nền tảng vững về backend với Java, Spring Boot, Spring MVC, MyBatis, Hibernate và các cơ sở dữ liệu quan hệ như MySQL, PostgreSQL.',
            'Có kinh nghiệm phát triển ứng dụng web và mobile sử dụng Vue.js, uni-app, HBuilderX, TypeScript, Knockout.js, JSP, Angular, HTML, CSS, JavaScript và Bootstrap. Có kinh nghiệm thực tế với barcode scanning, NFC check-in/check-out, tích hợp thiết bị RFID, ứng dụng Android cho nhà máy, báo cáo, theo dõi sản xuất và tích hợp SDK phần cứng.',
            'Có khả năng phân tích quy trình nghiệp vụ, thiết kế cấu trúc dữ liệu, phát triển backend API, xây dựng giao diện người dùng và tích hợp hệ thống với thiết bị nhà máy nhằm cải thiện khả năng truy xuất, theo dõi sản xuất và hiệu quả vận hành.'
        ],
        skills: [
            {cat: 'Backend', items: ['Java', 'Spring Boot', 'Spring MVC', 'MyBatis', 'Hibernate', 'JSP']},
            {cat: 'Cơ sở dữ liệu', items: ['MySQL', 'PostgreSQL']},
            {
                cat: 'Frontend',
                items: ['Vue.js', 'TypeScript', 'JavaScript', 'Knockout.js', 'Angular', 'HTML', 'CSS', 'Bootstrap']
            },
            {cat: 'Mobile / Hybrid', items: ['uni-app', 'HBuilderX', 'Android']},
            {cat: 'Kiểm thử', items: ['Cypress']},
            {
                cat: 'Phần cứng / Tích hợp',
                items: ['Barcode Scanner', 'NFC', 'RFID Reader', 'Chainway RFID', 'RFID Gate Reader', 'Xác thực vân tay', 'Tích hợp SDK']
            },
            {cat: 'Báo cáo', items: ['Xuất Excel', 'Xuất CSV', 'Báo cáo qua email']},
            {
                cat: 'Kiến thức nghiệp vụ',
                items: ['Quản lý sản xuất', 'Theo dõi Shopfloor', 'Kiểm tra chất lượng', 'Quản lý kho', 'Kiểm kê RFID', 'Quản lý công trình', 'Hồ sơ y tế']
            }
        ],
        education: {
            school: 'CodeGym Da Nang',
            program: 'Khóa Java Full-stack',
            period: '11/2021 – 05/2022',
            tech: ['Java', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Spring MVC', 'Spring Boot', 'Angular']
        },
        experience: [
            {
                company: 'Bowker Asia',
                role: 'Full-stack Developer',
                period: '04/2024 – Hiện tại',
                current: true,
                domain: 'Hệ thống sản xuất may mặc',
                projects: [
                    {
                        name: 'Shopfloor Tracking System', sub: 'Quản lý sản xuất may mặc',
                        stack: ['Spring Boot', 'MyBatis', 'MySQL', 'Vue.js', 'uni-app', 'HBuilderX', 'Android'],
                        bullets: [
                            'Phát triển và bảo trì hệ thống Shopfloor Tracking cho nhà máy may, bao gồm các quy trình Cắt, Second Operation, Phối hàng và theo dõi sản lượng May.',
                            'Xây dựng backend service bằng Spring Boot và MyBatis để quản lý tạo barcode cho bó hàng, luân chuyển bó hàng, trạng thái công đoạn và ghi nhận sản lượng may.',
                            'Thiết kế và tối ưu bảng dữ liệu, truy vấn MySQL để hỗ trợ theo dõi sản xuất, hiển thị WIP và truy xuất nguồn gốc bằng barcode.',
                            'Phát triển ứng dụng Android cho shopfloor bằng Vue.js, uni-app và HBuilderX, giúp công nhân thao tác quét barcode, báo sản lượng và theo dõi quy trình sản xuất trên thiết bị di động.',
                            'Tích hợp chức năng check-in/check-out bằng thẻ NFC để ghi nhận chấm công và tính thời gian làm việc thực tế của công nhân.',
                            'Hỗ trợ các quy trình Second Operation như thêu, in, ép nhiệt, pad print, bonding và fusing.',
                            'Xây dựng khả năng truy xuất bó hàng từ công đoạn cắt đến second operation và sản lượng may thông qua barcode.',
                            'Cải thiện độ chính xác dữ liệu sản xuất, theo dõi chấm công và khả năng hiển thị tiến độ WIP theo thời gian thực giữa các bộ phận trong nhà máy.'
                        ]
                    },
                    {
                        name: 'E-Inspection System', sub: 'Kiểm tra chất lượng may mặc',
                        stack: ['Vue.js', 'uni-app', 'HBuilderX', 'Android', 'Spring MVC', 'JSP'],
                        bullets: [
                            'Phát triển và bảo trì hệ thống E-Inspection cho đội ngũ QC kiểm tra thành phẩm sau khi công nhân hoàn tất công đoạn may.',
                            'Tích hợp dữ liệu sản lượng từ hệ thống Shopfloor, cho phép QC kiểm hàng sau khi công nhân báo sản lượng.',
                            'Xây dựng ứng dụng Android kiểm hàng bằng Vue.js, uni-app và HBuilderX, giúp QC thực hiện kiểm tra chất lượng trực tiếp tại nhà máy.',
                            'Phát triển chức năng ghi nhận lỗi, cho phép QC chụp hình lỗi, khoanh vùng vị trí lỗi trên hình và ghi nhận kết quả Pass hoặc Fail.',
                            'Hỗ trợ quy trình sửa hàng bằng cách chuyển sản phẩm Fail về công nhân may để sửa và cho phép QC kiểm tra lại sau khi sửa xong.',
                            'Tích hợp hệ thống đèn cảnh báo TLS với ứng dụng Shopfloor để cảnh báo chuyền may khi số lượng lỗi vượt ngưỡng.',
                            'Phát triển chức năng push notification đến ứng dụng Shopfloor khi có lỗi nghiêm trọng kích hoạt hệ thống cảnh báo.',
                            'Phát triển backend và portal bằng Spring MVC, JSP để quản lý dữ liệu kiểm hàng, lỗi, kết quả QC và báo cáo chất lượng.',
                            'Cải thiện khả năng theo dõi lỗi, truy xuất chất lượng và giao tiếp giữa đội QC và chuyền may.'
                        ]
                    },
                    {
                        name: 'Sample RFID Management Module', sub: 'Hệ thống quản lý kho (WMS)',
                        stack: ['Vue.js', 'uni-app', 'HBuilderX', 'Android', 'Java', 'Spring Boot', 'RFID SDK'],
                        bullets: [
                            'Phát triển module Sample RFID Management trong hệ thống WMS để quản lý hàng mẫu, đăng ký RFID, kiểm kê và giám sát an ninh kho mẫu.',
                            'Xây dựng ứng dụng Android bằng Vue.js, uni-app và HBuilderX cho các chức năng quét RFID, quét barcode, quản lý thùng hàng và giám sát cổng ra vào.',
                            'Tích hợp thiết bị Chainway RFID để đọc chip RFID được may vào hàng mẫu và map RFID tag với barcode định danh của mẫu.',
                            'Phát triển chức năng kiểm kê bằng RFID, cho phép người dùng đọc nhiều mẫu trong một thùng và tạo barcode cho thùng để quản lý toàn bộ mẫu bên trong.',
                            'Tích hợp thiết bị đọc RFID tại các cửa ra vào phòng mẫu để phát hiện luồng di chuyển của mẫu và bật cảnh báo khi mẫu ra khỏi kho không hợp lệ.',
                            'Phát triển quy trình mượn mẫu, yêu cầu người dùng đăng ký trên hệ thống trước khi đưa mẫu ra khỏi kho.',
                            'Xây dựng màn hình giám sát trên tablet cho thiết bị đọc RFID ở cửa, cho phép PIC xem danh sách RFID được đọc và xác nhận bằng vân tay.',
                            'Tích hợp SDK của nhà cung cấp thiết bị RFID với Java Spring Boot service và ứng dụng Android để hỗ trợ đọc RFID, xử lý cảnh báo và giao tiếp thiết bị.',
                            'Phát triển báo cáo email cuối ngày gửi cho quản lý phòng mẫu và bộ phận Security, tổng hợp các trường hợp RFID bị báo động.',
                            'Cải thiện khả năng truy xuất hàng mẫu, độ chính xác kiểm kê và kiểm soát an ninh trong vận hành kho mẫu.'
                        ]
                    }
                ]
            },
            {
                company: 'BeetechSoft',
                role: 'Java Developer',
                period: '11/2022 – 03/2024',
                current: false,
                domain: 'Quản lý công trình',
                projects: [
                    {
                        name: 'Jacic Construction Management System', sub: 'Quản lý công trình & vật liệu — Nhật Bản',
                        stack: ['Spring Boot', 'MyBatis', 'PostgreSQL', 'Cypress'],
                        bullets: [
                            'Phát triển và bảo trì hệ thống Jacic dùng để quản lý công trình và vật liệu sử dụng tại từng công trình ở Nhật Bản.',
                            'Xây dựng backend bằng Spring Boot và MyBatis để hỗ trợ quản lý dữ liệu công trình, theo dõi vật liệu và quy trình báo cáo.',
                            'Thiết kế và bảo trì truy vấn, cấu trúc dữ liệu PostgreSQL cho nghiệp vụ quản lý công trình và vật liệu.',
                            'Phát triển chức năng thu thập dữ liệu và xuất báo cáo công trình, vật liệu ra Excel và CSV.',
                            'Hỗ trợ kiểm thử tự động bằng Cypress để nâng cao độ ổn định của ứng dụng và giảm lỗi regression.'
                        ]
                    }
                ]
            },
            {
                company: '3S Intersoft',
                role: 'Java Developer',
                period: '05/2022 – 10/2022',
                current: false,
                domain: 'Hệ thống hồ sơ y tế',
                projects: [
                    {
                        name: 'Nittsu Medical Record System', sub: 'Quản lý hồ sơ y tế',
                        stack: ['Spring Boot', 'Hibernate', 'PostgreSQL', 'TypeScript', 'Knockout.js'],
                        bullets: [
                            'Bảo trì và nâng cấp hệ thống hồ sơ y tế Nittsu thông qua sửa lỗi, cải thiện chức năng hiện có và phát triển tính năng mới.',
                            'Phát triển backend service bằng Spring Boot và Hibernate để hỗ trợ quy trình quản lý hồ sơ y tế.',
                            'Làm việc với PostgreSQL để lưu trữ dữ liệu, cập nhật truy vấn và điều tra lỗi.',
                            'Phát triển và bảo trì các chức năng frontend bằng TypeScript và Knockout.js.',
                            'Phối hợp với team để phân tích lỗi, debug vấn đề phát sinh và triển khai các cải tiến ổn định cho hệ thống.'
                        ]
                    }
                ]
            }
        ],
        projects: [
            {
                name: 'Tarot Agent',
                tag: 'AI · Mobile',
                icon: 'assets/img/app-icon-tarot-agent.png',
                desc: 'Ứng dụng xem tarot sử dụng AI.',
                links: [{label: 'Landing page', url: 'https://tarot-agent-eta.vercel.app'}, {
                    label: 'Google Play',
                    url: 'https://play.google.com/store/apps/details?id=app.marco.tarotagent'
                }]
            },
            {
                name: 'Rune Oracle',
                tag: 'AI · Mobile',
                icon: 'assets/img/app-icon-rune-oracle.png',
                desc: 'Ứng dụng oracle và bói rune.',
                links: [{label: 'Landing page', url: 'https://rune-oracle-gamma.vercel.app'}, {
                    label: 'App Store',
                    url: 'https://apps.apple.com/us/app/rune-oracle/id6769952350'
                }]
            }
        ]
    }
};
