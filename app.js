// KVdb Cloud Sync Configuration
const BUCKET_ID = 'NyDpWCKHfrnYMPRtCuzaYA';
let bucket = null;

function getBucket() {
    if (!bucket && typeof KVdb !== "undefined") {
        bucket = KVdb.bucket(BUCKET_ID);
    }
    return bucket;
}

// Initial data mapping containing all fCC and custom Full Stack tasks
const DEFAULT_TASKS = [
    // === HTML & CSS (freeCodeCamp Responsive Web Design) ===// === HTML & CSS: Basic HTML (137 Steps) ===
    {
        id: "html-basic-outline",
        title: "Basic HTML: Build a Curriculum Outline",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5"],
        dueDate: "Week 1",
        subTask: "Basic HTML (137 Steps) - Setup outline document.",
        isFCC: true
    },
    {
        id: "html-basic-camperbot",
        title: "Basic HTML: Debug Camperbot's Profile Page",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5", "Debugging"],
        dueDate: "Week 1",
        subTask: "Basic HTML (137 Steps) - Fix nested markup bugs and structural elements.",
        isFCC: true
    },
    {
        id: "html-basic-attributes",
        title: "Basic HTML: Understanding HTML Attributes",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5"],
        dueDate: "Week 1",
        subTask: "Basic HTML (137 Steps) - Learn href, src, alt, and id configurations.",
        isFCC: true
    },
    {
        id: "html-basic-pet-page",
        title: "Basic HTML: Debug a Pet Adoption Page",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5", "Debugging"],
        dueDate: "Week 1",
        subTask: "Basic HTML (137 Steps) - Fix images and links layout issues.",
        isFCC: true
    },
    {
        id: "html-basic-boilerplate",
        title: "Basic HTML: Understanding the HTML Boilerplate",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5"],
        dueDate: "Week 1",
        subTask: "Basic HTML (137 Steps) - Setup DOCTYPE, html, head, title, and body tags.",
        isFCC: true
    },
    {
        id: "html-basic-cat-photo",
        title: "Basic HTML: Build a Cat Photo App",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5"],
        dueDate: "Week 1",
        subTask: "Basic HTML (137 Steps) - Build sections, links, custom text, and input forms.",
        isFCC: true
    },
    {
        id: "html-basic-recipe",
        title: "Basic HTML: Build a Recipe Page",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5"],
        dueDate: "Week 1",
        subTask: "Basic HTML (137 Steps) - List ingredients, instructions, and descriptions.",
        isFCC: true
    },
    {
        id: "html-basic-fundamentals",
        title: "Basic HTML: HTML Fundamentals",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5"],
        dueDate: "Week 1",
        subTask: "Basic HTML (137 Steps) - Recap fundamental structural guidelines.",
        isFCC: true
    },
    {
        id: "html-basic-bookstore",
        title: "Basic HTML: Build a Bookstore Page",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5"],
        dueDate: "Week 1",
        subTask: "Basic HTML (137 Steps) - Form lists of book titles, authors, and prices.",
        isFCC: true
    },
    {
        id: "html-basic-seo",
        title: "Basic HTML: Understanding How HTML Affects SEO",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["SEO", "Meta Tags"],
        dueDate: "Week 1",
        subTask: "Basic HTML (137 Steps) - Learn title keyword optimization and search description tags.",
        isFCC: true
    },
    {
        id: "html-basic-travel",
        title: "Basic HTML: Build a Travel Agency Page",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5"],
        dueDate: "Week 1",
        subTask: "Basic HTML (137 Steps) - Design layout featuring agency highlights and lists.",
        isFCC: true
    },
    {
        id: "html-basic-media-intro",
        title: "Basic HTML: Working with Audio and Video Elements",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5 Media"],
        dueDate: "Week 2",
        subTask: "Basic HTML (137 Steps) - Learn source, controllers, and autoplay flags.",
        isFCC: true
    },
    {
        id: "html-basic-music-player",
        title: "Basic HTML: Build an HTML Music Player",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5 Audio"],
        dueDate: "Week 2",
        subTask: "Basic HTML (137 Steps) - Setup playlist layout with music elements controls.",
        isFCC: true
    },
    {
        id: "html-basic-video-player",
        title: "Basic HTML: Build an HTML Video Player",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5 Video"],
        dueDate: "Week 2",
        subTask: "Basic HTML (137 Steps) - Play files with subtitle and overlay controls.",
        isFCC: true
    },
    {
        id: "html-basic-av-player",
        title: "Basic HTML: Build an HTML Audio & Video Player",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5 Media"],
        dueDate: "Week 2",
        subTask: "Basic HTML (137 Steps) - Combine media components in layout.",
        isFCC: true
    },
    {
        id: "html-basic-images-svg",
        title: "Basic HTML: Working with Images and SVGs",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["SVG", "Vector"],
        dueDate: "Week 2",
        subTask: "Basic HTML (137 Steps) - Learn vector path coordinates and fill gradients.",
        isFCC: true
    },
    {
        id: "html-basic-heart",
        title: "Basic HTML: Build a Heart Icon",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["SVG Shapes"],
        dueDate: "Week 2",
        subTask: "Basic HTML (137 Steps) - Build heart vector elements using SVG path coordinates.",
        isFCC: true
    },
    {
        id: "html-basic-iframe-intro",
        title: "Basic HTML: Working with the iFrame Element",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5 iFrame"],
        dueDate: "Week 2",
        subTask: "Basic HTML (137 Steps) - embed page sources within frames.",
        isFCC: true
    },
    {
        id: "html-basic-iframe-playlist",
        title: "Basic HTML: Build a Video Playlist Using iFrame",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["iFrames"],
        dueDate: "Week 2",
        subTask: "Basic HTML (137 Steps) - Embed playlist videos in layout.",
        isFCC: true
    },
    {
        id: "html-basic-video-compile",
        title: "Basic HTML: Build a Video Compilation Page",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["iFrames"],
        dueDate: "Week 2",
        subTask: "Basic HTML (137 Steps) - Arrange compilation layout grids.",
        isFCC: true
    },
    {
        id: "html-basic-links",
        title: "Basic HTML: Working with Links",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML Links"],
        dueDate: "Week 2",
        subTask: "Basic HTML (137 Steps) - Practice page anchor bookmarks.",
        isFCC: true
    },
    {
        id: "html-basic-review",
        title: "Basic HTML: Basic HTML Review",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5 Review"],
        dueDate: "Week 2",
        subTask: "Basic HTML (137 Steps) - Consolidate basic rules.",
        isFCC: true
    },
    {
        id: "html-basic-quiz",
        title: "Basic HTML: Basic HTML Quiz",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Quiz"],
        dueDate: "Week 2",
        subTask: "Basic HTML (137 Steps) - Solve outlines test questions.",
        isFCC: true
    },

    // === HTML & CSS: Semantic HTML (53 Steps) ===
    {
        id: "html-semantic-importance",
        title: "Semantic HTML: Importance of Semantic HTML",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Semantic HTML"],
        dueDate: "Week 2",
        subTask: "Semantic HTML (53 Steps) - Learn screen-reader structure values.",
        isFCC: true
    },
    {
        id: "html-semantic-elements",
        title: "Semantic HTML: Understanding Semantic Elements",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Semantic HTML"],
        dueDate: "Week 2",
        subTask: "Semantic HTML (53 Steps) - Work with headers, footers, navs, and aside blocks.",
        isFCC: true
    },
    {
        id: "html-semantic-browsers",
        title: "Semantic HTML: Build a List of Major Web Browsers",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Semantic HTML"],
        dueDate: "Week 2",
        subTask: "Semantic HTML (53 Steps) - Outline browser histories in structured details.",
        isFCC: true
    },
    {
        id: "html-semantic-time",
        title: "Semantic HTML: Working with Text and Time Semantic Elements",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Semantic Time"],
        dueDate: "Week 2",
        subTask: "Semantic HTML (53 Steps) - Format dates using <time> elements.",
        isFCC: true
    },
    {
        id: "html-semantic-quincy",
        title: "Semantic HTML: Build Quincy's Job Tips Page",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Semantic HTML"],
        dueDate: "Week 2",
        subTask: "Semantic HTML (53 Steps) - Group tips into descriptive sections.",
        isFCC: true
    },
    {
        id: "html-semantic-specialized",
        title: "Semantic HTML: Working with Specialized Semantic Elements",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Semantic HTML"],
        dueDate: "Week 2",
        subTask: "Semantic HTML (53 Steps) - Use details, summary, and dialog tags.",
        isFCC: true
    },
    {
        id: "html-semantic-blog",
        title: "Semantic HTML: Build a Cat Blog Page",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Semantic Blog"],
        dueDate: "Week 2",
        subTask: "Semantic HTML (53 Steps) - Format articles with authors details.",
        isFCC: true
    },
    {
        id: "html-semantic-events",
        title: "Semantic HTML: Build an Event Hub",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Semantic Hub"],
        dueDate: "Week 2",
        subTask: "Semantic HTML (53 Steps) - Organize event slots visually.",
        isFCC: true
    },
    {
        id: "html-semantic-review",
        title: "Semantic HTML: Semantic HTML Review",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Semantic HTML"],
        dueDate: "Week 2",
        subTask: "Semantic HTML (53 Steps) - Review tags checklist.",
        isFCC: true
    },
    {
        id: "html-semantic-quiz",
        title: "Semantic HTML: Semantic HTML Quiz",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Quiz"],
        dueDate: "Week 2",
        subTask: "Semantic HTML (53 Steps) - Verify semantic guidelines.",
        isFCC: true
    },

    // === HTML & CSS: Forms and Tables (53 Steps) ===
    {
        id: "html-forms-working",
        title: "Forms & Tables: Working with Forms",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5 Forms"],
        dueDate: "Week 3",
        subTask: "Forms and Tables (53 Steps) - Setup inputs fields and actions attributes.",
        isFCC: true
    },
    {
        id: "html-forms-hotel",
        title: "Forms & Tables: Build a Hotel Feedback Form",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Forms Validation"],
        dueDate: "Week 3",
        subTask: "Forms and Tables (53 Steps) - Create reservation fields validations.",
        isFCC: true
    },
    {
        id: "html-tables-working",
        title: "Forms & Tables: Working with Tables",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML Tables"],
        dueDate: "Week 3",
        subTask: "Forms and Tables (53 Steps) - Define tr, th, scopes, and descriptions.",
        isFCC: true
    },
    {
        id: "html-tables-exam",
        title: "Forms & Tables: Build a Final Exam Table",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Colspan / Rowspan"],
        dueDate: "Week 3",
        subTask: "Forms and Tables (53 Steps) - Group subjects and marks rows.",
        isFCC: true
    },
    {
        id: "html-tables-catalog",
        title: "Forms & Tables: Build a Book Catalog Table",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML Tables"],
        dueDate: "Week 3",
        subTask: "Forms and Tables (53 Steps) - Format authors and years fields.",
        isFCC: true
    },
    {
        id: "html-tools-working",
        title: "Forms & Tables: Working with HTML Tools",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["HTML5 Tools"],
        dueDate: "Week 3",
        subTask: "Forms and Tables (53 Steps) - Work with editor packages.",
        isFCC: true
    },
    {
        id: "html-formtable-review",
        title: "Forms & Tables: HTML Tables and Forms Review",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Forms / Tables"],
        dueDate: "Week 3",
        subTask: "Forms and Tables (53 Steps) - Consolidate fields tags guidelines.",
        isFCC: true
    },
    {
        id: "html-formtable-quiz",
        title: "Forms & Tables: HTML Tables and Forms Quiz",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Quiz"],
        dueDate: "Week 3",
        subTask: "Forms and Tables (53 Steps) - Test inputs and spanning.",
        isFCC: true
    },
    {
        id: "html-project-survey",
        title: "Forms & Tables: Build a Survey Form (Certification Project)",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Forms Validation", "HTML5"],
        dueDate: "Week 3",
        subTask: "Forms and Tables (53 Steps) - Build responsive surveys forms.",
        isFCC: true
    },

    // === HTML & CSS: Accessibility (57 Steps) ===
    {
        id: "html-a11y-importance",
        title: "Accessibility: Importance of Accessibility & Structure",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["a11y"],
        dueDate: "Week 3",
        subTask: "Accessibility (57 Steps) - Setup document outline contrast.",
        isFCC: true
    },
    {
        id: "html-a11y-codingblog",
        title: "Accessibility: Debug a Coding Journey Blog Page",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["a11y Debugging"],
        dueDate: "Week 3",
        subTask: "Accessibility (57 Steps) - Fix links focus outlines, alt parameters.",
        isFCC: true
    },
    {
        id: "html-a11y-accessible-formtable",
        title: "Accessibility: Working with Accessible Tables and Forms",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Accessible Forms"],
        dueDate: "Week 3",
        subTask: "Accessibility (57 Steps) - Wrap fields inside legends, check labels.",
        isFCC: true
    },
    {
        id: "html-a11y-conference",
        title: "Accessibility: Build a Tech Conference Schedule Table",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["a11y scopes"],
        dueDate: "Week 3",
        subTask: "Accessibility (57 Steps) - Bind table scopes with screen announcer.",
        isFCC: true
    },
    {
        id: "html-a11y-donation",
        title: "Accessibility: Debug a Donation Form",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["a11y Forms"],
        dueDate: "Week 3",
        subTask: "Accessibility (57 Steps) - Fix donation focus index paths.",
        isFCC: true
    },
    {
        id: "html-a11y-aria-intro",
        title: "Accessibility: Introduction to ARIA",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["ARIA Roles"],
        dueDate: "Week 3",
        subTask: "Accessibility (57 Steps) - Configure aria tags descriptions.",
        isFCC: true
    },
    {
        id: "html-a11y-audio-ctrl",
        title: "Accessibility: Build an Accessible Audio Controller",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["a11y Media"],
        dueDate: "Week 3",
        subTask: "Accessibility (57 Steps) - Keyboards controls indicators.",
        isFCC: true
    },
    {
        id: "html-a11y-media-working",
        title: "Accessibility: Working with Accessible Media Elements",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Media Captions"],
        dueDate: "Week 4",
        subTask: "Accessibility (57 Steps) - Setup subtitles tracks and options.",
        isFCC: true
    },
    {
        id: "html-a11y-checkout",
        title: "Accessibility: Build a Checkout Page",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["a11y checkout"],
        dueDate: "Week 4",
        subTask: "Accessibility (57 Steps) - Design key paths outlines validations.",
        isFCC: true
    },
    {
        id: "html-a11y-moviereview",
        title: "Accessibility: Design a Movie Review Page",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["a11y Layout"],
        dueDate: "Week 4",
        subTask: "Accessibility (57 Steps) - Align descriptive columns elements.",
        isFCC: true
    },
    {
        id: "html-a11y-multimedia",
        title: "Accessibility: Build a Multimedia Player",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["a11y media"],
        dueDate: "Week 4",
        subTask: "Accessibility (57 Steps) - Fully accessible playlist toggles.",
        isFCC: true
    },
    {
        id: "html-a11y-review",
        title: "Accessibility: HTML Accessibility Review",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["a11y Checklist"],
        dueDate: "Week 4",
        subTask: "Accessibility (57 Steps) - Recap WCAG guidelines checkpoints.",
        isFCC: true
    },
    {
        id: "html-a11y-quiz",
        title: "Accessibility: HTML Accessibility Quiz",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Quiz"],
        dueDate: "Week 4",
        subTask: "Accessibility (57 Steps) - Verify outlines elements test rules.",
        isFCC: true
    },

    // === HTML & CSS: CSS (1234 Steps) ===
    {
        id: "css-basic-steps",
        title: "Basic CSS (122 Steps)",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["CSS3 Basics"],
        dueDate: "Week 4",
        subTask: "CSS (1234 Steps) - Learn elements selectors, fonts, border-radius styling rules.",
        isFCC: true
    },
    {
        id: "css-design-steps",
        title: "CSS Design (23 Steps)",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["CSS Typography"],
        dueDate: "Week 4",
        subTask: "CSS (1234 Steps) - Setup layout aesthetic alignments.",
        isFCC: true
    },
    {
        id: "css-units-steps",
        title: "Absolute and Relative Units (8 Steps)",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["CSS Sizing"],
        dueDate: "Week 4",
        subTask: "CSS (1234 Steps) - Sizing configurations (px, rem, em, vw, %).",
        isFCC: true
    },
    {
        id: "css-pseudo-steps",
        title: "Pseudo Classes and Elements (74 Steps)",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["CSS Selectors"],
        dueDate: "Week 5",
        subTask: "CSS (1234 Steps) - Styling states (:hover, :focus, ::before, ::after).",
        isFCC: true
    },
    {
        id: "css-colors-steps",
        title: "CSS Colors (98 Steps)",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Color Models"],
        dueDate: "Week 5",
        subTask: "CSS (1234 Steps) - Work with gradients, RGB/hex values, transparency colors.",
        isFCC: true
    },
    {
        id: "css-formstyling-steps",
        title: "Styling Forms (84 Steps)",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["Form Design"],
        dueDate: "Week 5",
        subTask: "CSS (1234 Steps) - Style custom forms inputs fields borders.",
        isFCC: true
    },
    {
        id: "css-boxmodel-steps",
        title: "The Box Model (54 Steps)",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["CSS Box Model"],
        dueDate: "Week 5",
        subTask: "CSS (1234 Steps) - Format margin/padding spacing parameters.",
        isFCC: true
    },
    {
        id: "css-flexbox-steps",
        title: "CSS Flexbox (70 Steps)",
        category: "HTML & CSS",
        status: "Pending",
        tools: ["CSS Flexbox"],
        dueDate: "Week 5",
        subTask: "CSS (1234 Steps) - Distribute columns and align blocks in flex paths.",
        isFCC: true
    },

    // === JavaScript (1318 Steps) ===
    {
        id: "js-variables-strings",
        title: "1. Variables and Strings (101 Steps)",
        category: "JavaScript",
        status: "Pending",
        tools: ["JavaScript", "Strings"],
        dueDate: "Week 5",
        subTask: "Learn variables declaration, string concatenation, and string methods.",
        isFCC: true
    },
    {
        id: "js-booleans-numbers",
        title: "2. Booleans and Numbers (54 Steps)",
        category: "JavaScript",
        status: "Pending",
        tools: ["JavaScript", "Math"],
        dueDate: "Week 5",
        subTask: "Learn numbers operations, booleans, comparison operators, and conditions.",
        isFCC: true
    },
    {
        id: "js-functions",
        title: "3. Functions (38 Steps)",
        category: "JavaScript",
        status: "Pending",
        tools: ["JavaScript", "Functions"],
        dueDate: "Week 5",
        subTask: "Master parameters, return values, arrow functions, and scoping rules.",
        isFCC: true
    },
    {
        id: "js-arrays",
        title: "4. Arrays (34 Steps)",
        category: "JavaScript",
        status: "Pending",
        tools: ["JavaScript", "Arrays"],
        dueDate: "Week 6",
        subTask: "Study array push/pop methods, indices, and elements nesting.",
        isFCC: true
    },
    {
        id: "js-objects",
        title: "5. Objects (41 Steps)",
        category: "JavaScript",
        status: "Pending",
        tools: ["JavaScript", "Objects"],
        dueDate: "Week 6",
        subTask: "Study key-value properties, object methods, dot vs bracket notations.",
        isFCC: true
    },
    {
        id: "js-loops",
        title: "6. Loops (130 Steps)",
        category: "JavaScript",
        status: "Pending",
        tools: ["JavaScript", "Loops"],
        dueDate: "Week 6",
        subTask: "Implement while, for, for-of loops and solve algorithmic steps.",
        isFCC: true
    },
    {
        id: "js-fundamentals-review",
        title: "7. JavaScript Fundamentals Review (32 Steps)",
        category: "JavaScript",
        status: "Pending",
        tools: ["JavaScript", "Review"],
        dueDate: "Week 6",
        subTask: "Test foundational knowledge of variables, functions, and objects.",
        isFCC: true
    },
    {
        id: "js-higher-order-callbacks",
        title: "8. Higher Order Functions and Callbacks (37 Steps)",
        category: "JavaScript",
        status: "Pending",
        tools: ["JavaScript", "Callbacks"],
        dueDate: "Week 7",
        subTask: "Implement functions taking functions, closures, map, filter, and reduce.",
        isFCC: true
    },
    {
        id: "js-dom-events",
        title: "9. DOM Manipulation and Events (87 Steps)",
        category: "JavaScript",
        status: "Pending",
        tools: ["JavaScript", "DOM"],
        dueDate: "Week 7",
        subTask: "Listen to click events, style HTML nodes dynamically, and edit DOM trees.",
        isFCC: true
    },
    {
        id: "js-accessibility",
        title: "10. JavaScript and Accessibility (42 Steps)",
        category: "JavaScript",
        status: "Pending",
        tools: ["a11y", "Accessibility"],
        dueDate: "Week 7",
        subTask: "Manage dynamic aria labels, keyboard focuses paths, and screen reader announcements.",
        isFCC: true
    },
    {
        id: "js-debugging",
        title: "11. Debugging (8 Steps)",
        category: "JavaScript",
        status: "Pending",
        tools: ["Debugging", "Chrome DevTools"],
        dueDate: "Week 7",
        subTask: "Learn breakpoints, stack tracing, console utilities, and source checking.",
        isFCC: true
    },
    {
        id: "js-basic-regex",
        title: "12. Basic Regex (46 Steps)",
        category: "JavaScript",
        status: "Pending",
        tools: ["RegEx", "Regular Expressions"],
        dueDate: "Week 7",
        subTask: "Learn match flags, test formats, replacement strings, and input patterns.",
        isFCC: true
    },
    {
        id: "js-certification-project",
        title: "13. Certification Project",
        category: "JavaScript",
        status: "Pending",
        tools: ["JavaScript Project"],
        dueDate: "Week 8",
        subTask: "Build final JavaScript curriculum assignment projects.",
        isFCC: true
    },

    // === Frontend (React / Advanced) ===
    {
        id: "custom-react-components",
        title: "React Components & Props",
        category: "Frontend",
        status: "Pending",
        tools: ["React", "JSX"],
        dueDate: "Week 6",
        subTask: "Build modular interfaces passing parameters using React Props.",
        isFCC: false
    },
    {
        id: "custom-react-hooks",
        title: "React Hooks (useState/useEffect)",
        category: "Frontend",
        status: "Pending",
        tools: ["React Hooks"],
        dueDate: "Week 6",
        subTask: "Manage reactive page state, data side-effects, and component lifecycles.",
        isFCC: false
    },
    {
        id: "custom-react-router",
        title: "React Router",
        category: "Frontend",
        status: "Pending",
        tools: ["React Router"],
        dueDate: "Week 6",
        subTask: "Implement routing, path parameters, nested navigations, and router shields.",
        isFCC: false
    },
    {
        id: "custom-react-api",
        title: "API Integration (Fetch/Axios)",
        category: "Frontend",
        status: "Pending",
        tools: ["Axios", "REST API"],
        dueDate: "Week 6",
        subTask: "Retrieve and render server content, config headers, and intercept loading errors.",
        isFCC: false
    },

    // === Backend ===
    {
        id: "custom-node-basics",
        title: "Node.js Basics",
        category: "Backend",
        status: "Pending",
        tools: ["Node.js", "NPM"],
        dueDate: "Week 7",
        subTask: "Create HTTP server, work with file systems, module imports, and script routines.",
        isFCC: false
    },
    {
        id: "custom-express-routing",
        title: "Express.js Routing",
        category: "Backend",
        status: "Pending",
        tools: ["Express.js", "REST APIs"],
        dueDate: "Week 7",
        subTask: "Design API routers, middleware controllers, request bodies, and JSON responses.",
        isFCC: false
    },
    {
        id: "custom-jwt-auth",
        title: "JWT Authentication",
        category: "Backend",
        status: "Pending",
        tools: ["JSON Web Tokens", "bcrypt"],
        dueDate: "Week 8",
        subTask: "Create user register/login endpoint, hash passwords, issue signatures, and shield routes.",
        isFCC: false
    },
    {
        id: "custom-role-access",
        title: "Role-Based Access",
        category: "Backend",
        status: "Pending",
        tools: ["Middleware", "Auth Systems"],
        dueDate: "Week 8",
        subTask: "Configure admin vs standard user permission flags and restrict routes dynamically.",
        isFCC: false
    },

    // === Database ===
    {
        id: "custom-mongodb-crud",
        title: "MongoDB CRUD Operations",
        category: "Database",
        status: "Pending",
        tools: ["MongoDB Atlas", "Mongoose"],
        dueDate: "Week 8",
        subTask: "Setup Atlas cluster, compile schemas, validate fields, and perform queries.",
        isFCC: false
    },

    // === MERN (Full Stack Projects) ===
    {
        id: "custom-mern-mini",
        title: "Full-Stack Mini Project",
        category: "MERN",
        status: "Pending",
        tools: ["MERN Stack", "CRUD"],
        dueDate: "Week 9",
        subTask: "Build full stack app connecting React frontend, Express router, and MongoDB data.",
        isFCC: false
    },
    {
        id: "custom-mern-ecommerce",
        title: "E-commerce Project",
        category: "MERN",
        status: "Pending",
        tools: ["MERN Stack", "Stripe API"],
        dueDate: "Week 9-10",
        subTask: "Implement inventory dashboard, client shopping cart, and transaction gateways.",
        isFCC: false
    },
    {
        id: "custom-mern-admin",
        title: "Admin Dashboard",
        category: "MERN",
        status: "Pending",
        tools: ["React", "Charts.js", "Grid Layout"],
        dueDate: "Week 10",
        subTask: "Create charts showing platform data, customer registration metrics, and order streams.",
        isFCC: false
    },

    // === DevOps & Tools ===
    {
        id: "custom-git-github",
        title: "Git & GitHub Workflow",
        category: "DevOps & Tools",
        status: "Pending",
        tools: ["Git", "GitHub"],
        dueDate: "Ongoing",
        subTask: "Utilize branch flow, resolve conflicts, commit, and manage remote repositories.",
        isFCC: false
    },
    {
        id: "custom-deployment",
        title: "Deployment (Vercel + Render)",
        category: "DevOps & Tools",
        status: "Pending",
        tools: ["Vercel", "Render", "ENV Config"],
        dueDate: "Week 11",
        subTask: "Deploy SPA frontend and Node server, configure environment flags, and setup custom domains.",
        isFCC: false
    },

    // === Career ===
    {
        id: "custom-interview-prep",
        title: "Interview Prep (JS + React)",
        category: "Career",
        status: "Pending",
        tools: ["LeetCode", "System Design"],
        dueDate: "Ongoing",
        subTask: "Solve algorithm problems, study system architectures, and review standard mock questions.",
        isFCC: false
    },
    {
        id: "custom-resume-applications",
        title: "Resume & Job Applications",
        category: "Career",
        status: "Pending",
        tools: ["LinkedIn", "ATS Resume"],
        dueDate: "Ongoing",
        subTask: "Format portfolio links, update CV metrics, expand network, and send applications.",
        isFCC: false
    }
];

// App State Manager
let tasks = [];
let currentCategory = "all";
let currentStatusFilter = "all";

// DOM Elements
const tasksListEl = document.getElementById("tasks-list");
const searchInputEl = document.getElementById("search-input");
const overallPercentageEl = document.getElementById("overall-percentage");
const overallProgressBarEl = document.getElementById("overall-progress-bar");
const completedFractionEl = document.getElementById("completed-fraction");

// Stats Widgets
const statCompletedEl = document.getElementById("stat-completed");
const statProgressEl = document.getElementById("stat-progress");
const statPendingEl = document.getElementById("stat-pending");

// Section Local Progress Bar
const sectionProgressContainer = document.getElementById("section-progress-container");
const sectionProgressTitle = document.getElementById("section-progress-title");
const sectionProgressPercentage = document.getElementById("section-progress-percentage");
const sectionProgressBar = document.getElementById("section-progress-bar");

// Modal Elements
const taskModal = document.getElementById("task-modal");
const taskForm = document.getElementById("task-form");
const modalTitle = document.getElementById("modal-title");
const taskIdInput = document.getElementById("task-id");
const btnAddTaskModal = document.getElementById("btn-add-task-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnCancelModal = document.getElementById("btn-cancel-modal");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    // Initialize tasks list from local storage or defaults
    const storedTasks = localStorage.getItem("full_stack_tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        
        // Migrate check: ensure the new detailed HTML & CSS tasks are merged in
        const hasDetailedHtmlCss = tasks.some(t => t.id === "html-basic-outline");
        if (!hasDetailedHtmlCss) {
            // Filter out old HTML & CSS tasks
            const nonHtmlCssTasks = tasks.filter(t => t.category !== "HTML & CSS");
            // Extract the new HTML & CSS tasks from DEFAULT_TASKS
            const newHtmlCssTasks = DEFAULT_TASKS.filter(t => t.category === "HTML & CSS");
            // Merge them (new ones first)
            tasks = [...newHtmlCssTasks, ...nonHtmlCssTasks];
            saveTasksToLocalStorage();
        }
        
        // Reset HTML & CSS status to Pending and remove image tasks on load (v2 migration)
        const hasPendingMigration = localStorage.getItem("html_css_pending_v2");
        if (!hasPendingMigration) {
            // Remove image reference tasks
            tasks = tasks.filter(t => t.id !== "custom-html-task-img" && t.id !== "custom-css-task-img");
            
            // Set all HTML & CSS tasks status to Pending
            tasks = tasks.map(t => {
                if (t.category === "HTML & CSS") {
                    t.status = "Pending";
                }
                return t;
            });
            
            saveTasksToLocalStorage();
            localStorage.setItem("html_css_pending_v2", "true");
        }

        // Migrate check: ensure the new detailed JavaScript tasks are merged in
        const hasDetailedJs = tasks.some(t => t.id === "js-variables-strings");
        if (!hasDetailedJs) {
            const htmlTasks = tasks.filter(t => t.category === "HTML & CSS");
            const newJsTasks = DEFAULT_TASKS.filter(t => t.category === "JavaScript");
            const otherTasks = tasks.filter(t => t.category !== "HTML & CSS" && t.category !== "JavaScript");
            tasks = [...htmlTasks, ...newJsTasks, ...otherTasks];
            saveTasksToLocalStorage();
        }
        
        // Reset all task statuses to Pending on load (v4 migration - start fresh)
        const hasAllPendingMigration = localStorage.getItem("all_pending_v4");
        if (!hasAllPendingMigration) {
            // Set every single task status to Pending
            tasks = tasks.map(t => {
                t.status = "Pending";
                return t;
            });
            
            saveTasksToLocalStorage();
            localStorage.setItem("all_pending_v4", "true");
        }
    } else {
        tasks = [...DEFAULT_TASKS];
        saveTasksToLocalStorage();
    }

    // Initialize Sync System
    initSyncCode();
    loadTasksFromCloud();

    // Set active listeners
    setupEventListeners();
    
    // Perform initial render
    renderApp();
    
    // Create icons
    lucide.createIcons();

    // Sync automatically on tab focus/visibility change
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
            loadTasksFromCloud();
        }
    });

    // Periodic automatic sync every 15 seconds
    setInterval(() => {
        loadTasksFromCloud();
    }, 15000);
});

// Setup Action & Filter Listeners
function setupEventListeners() {
    // Sidebar category navigation
    document.querySelectorAll(".sidebar .nav-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            document.querySelectorAll(".sidebar .nav-btn").forEach(b => b.classList.remove("active"));
            const targetBtn = e.currentTarget;
            targetBtn.classList.add("active");
            
            currentCategory = targetBtn.dataset.category;
            renderApp();
        });
    });

    // Status filter tabs
    document.querySelectorAll(".status-filters .filter-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            document.querySelectorAll(".status-filters .filter-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            
            currentStatusFilter = e.target.dataset.status;
            renderApp();
        });
    });

    // Realtime search query
    searchInputEl.addEventListener("input", () => {
        renderApp();
    });

    // Add task modal triggers
    btnAddTaskModal.addEventListener("click", () => {
        openModal();
    });

    btnCloseModal.addEventListener("click", closeModal);
    btnCancelModal.addEventListener("click", closeModal);
    
    // Modal Overlay click to close
    taskModal.addEventListener("click", (e) => {
        if (e.target === taskModal) closeModal();
    });

    // Save task submission
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        saveTask();
    });

    // Reset Tracker button
    document.getElementById("btn-reset").addEventListener("click", () => {
        if (confirm("Are you sure you want to reset the tracker? This will reset progress to initial defaults.")) {
            tasks = [...DEFAULT_TASKS];
            saveTasksToLocalStorage();
            renderApp();
            showToast("Tracker has been reset successfully!", "Completed");
        }
    });

    // Export JSON progress file
    document.getElementById("btn-export").addEventListener("click", () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tasks, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `Full_Stack_Tracker_Backup_${new Date().toISOString().slice(0,10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast("Progress exported successfully!", "Completed");
    });

    // Import JSON progress triggers
    const fileImportInput = document.getElementById("file-import");
    document.getElementById("btn-import-trigger").addEventListener("click", () => {
        fileImportInput.click();
    });

    fileImportInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const imported = JSON.parse(event.target.result);
                if (Array.isArray(imported)) {
                    tasks = imported;
                    saveTasksToLocalStorage();
                    renderApp();
                    showToast("Progress imported successfully!", "Completed");
                } else {
                    alert("Invalid backup file structure.");
                }
            } catch (err) {
                alert("Failed to parse JSON backup.");
            }
        };
        reader.readAsText(file);
    });

    // Mobile Sidebar Drawer Toggles
    const mobileMenuBtn = document.getElementById("btn-mobile-menu");
    const sidebarEl = document.querySelector(".sidebar");
    
    let backdrop = document.querySelector(".sidebar-backdrop");
    if (!backdrop) {
        backdrop = document.createElement("div");
        backdrop.className = "sidebar-backdrop";
        document.body.appendChild(backdrop);
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            sidebarEl.classList.add("active");
            backdrop.classList.add("active");
        });
    }

    backdrop.addEventListener("click", () => {
        sidebarEl.classList.remove("active");
        backdrop.classList.remove("active");
    });

    // Close mobile menu on nav link click
    document.querySelectorAll(".sidebar .nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                sidebarEl.classList.remove("active");
                backdrop.classList.remove("active");
            }
        });
    });

    // Copy Sync Code click
    const btnCopyCode = document.getElementById("btn-copy-code");
    if (btnCopyCode) {
        btnCopyCode.addEventListener("click", () => {
            const syncCode = localStorage.getItem("tracker_sync_code");
            if (syncCode) {
                navigator.clipboard.writeText(syncCode).then(() => {
                    showToast("Sync Code copied to clipboard!", "Completed");
                }).catch(() => {
                    alert("Could not copy code. Select and copy it manually: " + syncCode);
                });
            }
        });
    }

    // Link Device click
    const btnLinkDevice = document.getElementById("btn-link-device");
    const inputSyncCode = document.getElementById("input-sync-code");
    if (btnLinkDevice && inputSyncCode) {
        btnLinkDevice.addEventListener("click", () => {
            const code = inputSyncCode.value.trim();
            if (!code) {
                alert("Please enter a valid Sync Code.");
                return;
            }
            if (confirm("Linking this device will replace your current progress with the data from the other device. Continue?")) {
                localStorage.setItem("tracker_sync_code", code);
                const codeTextEl = document.getElementById("sync-code-text");
                if (codeTextEl) codeTextEl.innerText = code;
                inputSyncCode.value = "";
                
                // Immediately pull from cloud
                const b = getBucket();
                if (b) {
                    b.get(code).then(cloudData => {
                        if (cloudData) {
                            const cloudTasks = JSON.parse(cloudData);
                            if (Array.isArray(cloudTasks) && cloudTasks.length > 0) {
                                tasks = cloudTasks;
                                localStorage.setItem("full_stack_tasks", JSON.stringify(tasks));
                                renderApp();
                                showToast("Device successfully linked and synced! ☁️", "Completed");
                            }
                        } else {
                            saveTasksToCloud();
                            showToast("New device linked. Initializing cloud progress...", "Completed");
                        }
                    }).catch(err => {
                        alert("Failed to connect to cloud. Please verify your Sync Code.");
                    });
                } else {
                    alert("Cloud service is currently unavailable. Please try again later.");
                }
            }
        });
    }
}

// Cloud Sync System Core
function initSyncCode() {
    let syncCode = localStorage.getItem("tracker_sync_code");
    if (!syncCode) {
        syncCode = 'shinu_' + Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
        localStorage.setItem("tracker_sync_code", syncCode);
    }
    
    const codeTextEl = document.getElementById("sync-code-text");
    if (codeTextEl) {
        codeTextEl.innerText = syncCode;
    }
}

function saveTasksToCloud() {
    const syncCode = localStorage.getItem("tracker_sync_code");
    const b = getBucket();
    if (syncCode && b) {
        b.set(syncCode, JSON.stringify(tasks)).catch(err => {
            console.error("Cloud sync save error:", err);
        });
    }
}

function loadTasksFromCloud(forceToast = false) {
    const syncCode = localStorage.getItem("tracker_sync_code");
    const b = getBucket();
    if (syncCode && b) {
        b.get(syncCode).then(cloudData => {
            if (cloudData) {
                const cloudTasks = JSON.parse(cloudData);
                if (Array.isArray(cloudTasks) && cloudTasks.length > 0) {
                    const localString = JSON.stringify(tasks);
                    if (localString !== cloudData) {
                        tasks = cloudTasks;
                        localStorage.setItem("full_stack_tasks", JSON.stringify(tasks));
                        renderApp();
                        showToast("Synced progress from Cloud! ☁️", "Completed");
                    } else if (forceToast) {
                        showToast("Everything is up to date! ☁️", "Completed");
                    }
                }
            } else {
                saveTasksToCloud();
            }
        }).catch(err => {
            console.error("Cloud sync load error:", err);
        });
    }
}

// Update LocalStorage State
function saveTasksToLocalStorage() {
    localStorage.setItem("full_stack_tasks", JSON.stringify(tasks));
    saveTasksToCloud();
}

// Render dynamic contents
function renderApp() {
    renderStats();
    renderSidebarBadges();
    renderTasksList();
    renderSectionProgressBar();
}

// Calculate and render all metrics
function renderStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === "Completed").length;
    const progress = tasks.filter(t => t.status === "In Progress").length;
    const pending = tasks.filter(t => t.status === "Pending").length;

    // Stat numbers
    statCompletedEl.innerText = completed;
    statProgressEl.innerText = progress;
    statPendingEl.innerText = pending;

    // Overall Progress panel
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    overallPercentageEl.innerText = `${percentage}%`;
    overallProgressBarEl.style.width = `${percentage}%`;
    completedFractionEl.innerText = `${completed} / ${total} Tasks Completed`;
}

// Render counters beside sidebar tabs
function renderSidebarBadges() {
    // All
    document.getElementById("badge-all").innerText = tasks.length;

    // Categories
    const counts = {};
    // Setup categories
    const categories = ["HTML & CSS", "JavaScript", "Frontend", "Backend", "Database", "MERN", "DevOps & Tools", "Career"];
    categories.forEach(cat => counts[cat] = 0);

    tasks.forEach(t => {
        if (counts.hasOwnProperty(t.category)) {
            counts[t.category]++;
        }
    });

    document.getElementById("badge-html").innerText = counts["HTML & CSS"];
    document.getElementById("badge-js").innerText = counts["JavaScript"];
    document.getElementById("badge-frontend").innerText = counts["Frontend"];
    document.getElementById("badge-backend").innerText = counts["Backend"];
    document.getElementById("badge-database").innerText = counts["Database"];
    document.getElementById("badge-mern").innerText = counts["MERN"];
    document.getElementById("badge-devops").innerText = counts["DevOps & Tools"];
    document.getElementById("badge-career").innerText = counts["Career"];
}

// Render Section Progress Bar when filtered
function renderSectionProgressBar() {
    if (currentCategory === "all") {
        sectionProgressContainer.style.display = "none";
        return;
    }

    const catTasks = tasks.filter(t => t.category === currentCategory);
    const total = catTasks.length;
    const completed = catTasks.filter(t => t.status === "Completed").length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    sectionProgressContainer.style.display = "block";
    sectionProgressTitle.innerText = `${currentCategory} Progress`;
    sectionProgressPercentage.innerText = `${percentage}%`;
    sectionProgressBar.style.width = `${percentage}%`;
}

// Render Cards List with searching + filters
function renderTasksList() {
    tasksListEl.innerHTML = "";

    // Apply Filter Rules
    const query = searchInputEl.value.toLowerCase().trim();
    
    const filteredTasks = tasks.filter(task => {
        // Category Filter
        if (currentCategory !== "all" && task.category !== currentCategory) return false;

        // Status Filter
        if (currentStatusFilter !== "all" && task.status !== currentStatusFilter) return false;

        // Search Filter
        if (query) {
            const matchesTitle = task.title.toLowerCase().includes(query);
            const matchesDesc = (task.subTask || "").toLowerCase().includes(query);
            const matchesTools = task.tools.some(t => t.toLowerCase().includes(query));
            return matchesTitle || matchesDesc || matchesTools;
        }

        return true;
    });

    if (filteredTasks.length === 0) {
        renderEmptyState();
        return;
    }

    filteredTasks.forEach(task => {
        const card = document.createElement("div");
        card.className = `task-card status-${task.status.toLowerCase().replace(" ", "-")}`;
        card.setAttribute("data-id", task.id);

        // Tech Tags strings markup
        const tagsMarkup = task.tools.map(tag => `<span class="tech-tag">${tag}</span>`).join("");

        // Set completed states
        const isCompleted = task.status === "Completed";
        const isInProgress = task.status === "In Progress";
        const isPending = task.status === "Pending";

        card.innerHTML = `
            <div class="task-header">
                <span class="category-tag">${task.category}</span>
                <div class="task-actions">
                    <button class="action-btn edit-btn" onclick="editTask('${task.id}')" title="Edit Task">
                        <i data-lucide="edit-3"></i>
                    </button>
                    <button class="action-btn delete-btn" onclick="deleteTask('${task.id}')" title="Delete Task">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </div>

            <div class="task-body">
                ${task.image ? `
                <div class="task-card-image" onclick="viewImage('${task.image}', '${task.title}')">
                    <img src="${task.image}" alt="${task.title}">
                </div>
                ` : ""}
                <h4 class="task-title" onclick="cycleStatus('${task.id}')">${task.title}</h4>
                <p class="task-description">${task.subTask || "No details provided for this task."}</p>
                <div class="tech-tags">${tagsMarkup}</div>
            </div>

            <div class="task-footer">
                <div class="due-date">
                    <i data-lucide="calendar"></i>
                    <span>${task.dueDate || "N/A"}</span>
                </div>
                
                <select class="status-select" onchange="updateTaskStatus('${task.id}', this.value)">
                    <option value="Pending" ${isPending ? 'selected' : ''}>Pending</option>
                    <option value="In Progress" ${isInProgress ? 'selected' : ''}>In Progress</option>
                    <option value="Completed" ${isCompleted ? 'selected' : ''}>Completed</option>
                </select>
            </div>
        `;
        
        tasksListEl.appendChild(card);
    });

    lucide.createIcons();
    styleSelectDropdowns();
}

// Add appropriate classes to selects to match status colorings
function styleSelectDropdowns() {
    document.querySelectorAll(".status-select").forEach(select => {
        const val = select.value;
        select.style.backgroundColor = `var(--color-${val.toLowerCase().replace(" ", "-")}-bg)`;
        select.style.color = `var(--color-${val.toLowerCase().replace(" ", "-")})`;
        select.style.border = `1px solid var(--border-glass)`;
    });
}

// Trigger Empty State Placeholder
function renderEmptyState() {
    tasksListEl.innerHTML = `
        <div class="empty-state">
            <i data-lucide="clipboard-x"></i>
            <h3>No Tasks Found</h3>
            <p>We couldn't find any tasks matching your filters or search terms. Try refining your criteria or add a new task!</p>
        </div>
    `;
    lucide.createIcons();
}

// Quick State Cycle (when clicking card title)
function cycleStatus(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    let newStatus = "Pending";
    if (task.status === "Pending") newStatus = "In Progress";
    else if (task.status === "In Progress") newStatus = "Completed";

    updateTaskStatus(id, newStatus);
}

// Modify specific task status
function updateTaskStatus(id, newStatus) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const oldStatus = task.status;
    task.status = newStatus;
    saveTasksToLocalStorage();
    renderApp();

    if (newStatus === "Completed" && oldStatus !== "Completed") {
        triggerConfetti();
        showToast(`Congrats! "${task.title}" Completed! 🥳`, "Completed");
    } else {
        showToast(`Task updated to "${newStatus}"`, newStatus);
    }
}

// Launch celebrations
function triggerConfetti() {
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.8 },
        colors: ['#6366f1', '#10b981', '#f59e0b', '#4f46e5']
    });
}

// Modal actions
function openModal(editingTaskId = null) {
    taskForm.reset();
    
    if (editingTaskId) {
        const task = tasks.find(t => t.id === editingTaskId);
        if (!task) return;
        
        modalTitle.innerText = "Edit Learning Task";
        taskIdInput.value = task.id;
        document.getElementById("task-title").value = task.title;
        document.getElementById("task-category").value = task.category;
        document.getElementById("task-status").value = task.status;
        document.getElementById("task-due").value = task.dueDate || "";
        document.getElementById("task-tools").value = task.tools.join(", ") || "";
        document.getElementById("task-subtask").value = task.subTask || "";
    } else {
        modalTitle.innerText = "Add New Learning Task";
        taskIdInput.value = "";
        // Pre-set selected category if browsing a single folder
        if (currentCategory !== "all") {
            document.getElementById("task-category").value = currentCategory;
        }
    }

    taskModal.classList.add("active");
}

function closeModal() {
    taskModal.classList.remove("active");
}

// Save or Create Task
function saveTask() {
    const id = taskIdInput.value;
    const title = document.getElementById("task-title").value.trim();
    const category = document.getElementById("task-category").value;
    const status = document.getElementById("task-status").value;
    const dueDate = document.getElementById("task-due").value.trim() || "N/A";
    const toolsInput = document.getElementById("task-tools").value;
    const subTask = document.getElementById("task-subtask").value.trim();

    const tools = toolsInput ? toolsInput.split(",").map(t => t.trim()).filter(t => t.length > 0) : [];

    if (id) {
        // Edit Mode
        const task = tasks.find(t => t.id === id);
        if (task) {
            const oldStatus = task.status;
            task.title = title;
            task.category = category;
            task.status = status;
            task.dueDate = dueDate;
            task.tools = tools;
            task.subTask = subTask;

            if (status === "Completed" && oldStatus !== "Completed") {
                triggerConfetti();
            }
        }
    } else {
        // Create Mode
        const newTask = {
            id: 'task_' + Date.now(),
            title,
            category,
            status,
            dueDate,
            tools,
            subTask,
            isFCC: false
        };
        tasks.push(newTask);
        if (status === "Completed") {
            triggerConfetti();
        }
    }

    saveTasksToLocalStorage();
    closeModal();
    renderApp();
    showToast("Task saved successfully!", "Completed");
}

// Delete Task
function deleteTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    if (confirm(`Are you sure you want to delete the task: "${task.title}"?`)) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasksToLocalStorage();
        renderApp();
        showToast("Task deleted.", "Pending");
    }
}

// Premium Toast Message
function showToast(message, statusType) {
    // Remove existing toast if visible
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "toast";
    
    let icon = "info";
    let colorVar = "--color-pending";
    if (statusType === "Completed") {
        icon = "check-circle-2";
        colorVar = "--color-completed";
    } else if (statusType === "In Progress") {
        icon = "play-circle";
        colorVar = "--color-progress";
    }

    toast.style.borderColor = `var(${colorVar})`;
    toast.style.borderLeftWidth = "5px";

    toast.innerHTML = `
        <i data-lucide="${icon}" style="color: var(${colorVar}); width: 20px; height: 20px;"></i>
        <span style="font-size: 0.85rem; font-weight:600;">${message}</span>
    `;

    document.body.appendChild(toast);
    lucide.createIcons();

    // Trigger transition
    setTimeout(() => toast.classList.add("active"), 50);

    // Fade out and remove
    setTimeout(() => {
        toast.classList.remove("active");
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// Expose functions globally for dynamic elements onclick attribute
window.editTask = openModal;
window.deleteTask = deleteTask;
window.updateTaskStatus = updateTaskStatus;
window.cycleStatus = cycleStatus;

// Lightbox image viewer
function viewImage(src, title) {
    let overlay = document.getElementById("image-lightbox");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "image-lightbox";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.backgroundColor = "rgba(10, 14, 23, 0.96)";
        overlay.style.backdropFilter = "blur(15px)";
        overlay.style.display = "flex";
        overlay.style.flexDirection = "column";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "2000";
        overlay.style.cursor = "pointer";
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 0.3s ease";
        overlay.onclick = () => {
            overlay.style.opacity = "0";
            setTimeout(() => overlay.style.display = "none", 300);
        };
        
        const img = document.createElement("img");
        img.id = "lightbox-img";
        img.style.maxWidth = "85%";
        img.style.maxHeight = "80%";
        img.style.borderRadius = "12px";
        img.style.boxShadow = "0 25px 60px rgba(0,0,0,0.6)";
        img.style.border = "1px solid rgba(255,255,255,0.08)";
        img.style.transition = "transform 0.3s ease";
        
        const caption = document.createElement("div");
        caption.id = "lightbox-caption";
        caption.style.marginTop = "20px";
        caption.style.color = "#fff";
        caption.style.fontFamily = "var(--font-main)";
        caption.style.fontWeight = "700";
        caption.style.fontSize = "1.15rem";
        
        overlay.appendChild(img);
        overlay.appendChild(caption);
        document.body.appendChild(overlay);
    }
    
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-caption").innerText = title;
    overlay.style.display = "flex";
    setTimeout(() => overlay.style.opacity = "1", 50);
}
window.viewImage = viewImage;
