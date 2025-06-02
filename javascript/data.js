var email = "adarshsrivastava1996@gmail.com";

var abouts = [
    `Hello! My name is Adarsh Srivastava and I'm having 2+ years of experience as a Software Engineer
    and I enjoy building web applications using Angular framework and web APIs using .NET Core framework.`,
    `Talk about my experience, I'm currently working with Optimus Information Inc. as a software Engineer for the past 2+ years (July 2019 - Current).`,
    `Here are a few technologies I've been working with recently:`
];

var technologiesAndSkills = {
    "Programming & scripting languages": [
        "TypeScript", 
        "C sharp", 
        "JavaScript", 
        "Python"
    ],
    "Frameworks": [
        ".NET core", 
        "Angular"
    ],
    "Project management tools": [
        "Azure DevOps",
        "Atlassian Jira"
    ],
    "IDEs": [
        "Visual studio code",
        "Visual studio",
        "Jupyter notebook",
        "PyCharm"
    ]
};

var projects = [
    {
        name: "Aquatic Informatics - Regulatory Compliance Platform",
        period: "June 2021 - Current",
        responsibility: "Web API development and bug fixing",
        roles: [
            ".NET Core",
            "Liquibase",
            "Jira"
        ],
        problem: "Problem statement",
        solution: "What we have done for the problem.",
        technologiesUsed: "comma separated technologies"
    },
    {
        name: "Aquatic Informatics - Source Water Coagulation Calculator",
        period: "May 2021 - August 2021",
        responsibility: "Create single page dashboard web application to display charts as per the provided CSV configuration file",
        roles: [
            "Angular", 
            "ApexCharts.js"
        ],
        problem: "Problem statement",
        solution: "What we have done for the problem.",
        technologiesUsed: "comma separated technologies"
    },
    {
        name: "NRG Systems - Vega UI",
        period: "March 2021 - April 2021",
        responsibility: "Optimize HTMLs using JavaScript to reduce page size and response time for the micro-controllers",
        roles: [
            "JavaScript", 
            "HTML",
            "Jira"
        ],
        problem: "Problem statement",
        solution: "What we have done for the problem.",
        technologiesUsed: "comma separated technologies"
    },
    {
        name: "Canadian Partnership Against Cancer - Canadian Capacity Planning Map",
        period: "December 2020 - Current",
        responsibility: "Structure raw CSV data using Python and show data on Canada map using ArcGIS online and JavaScript",
        roles: [
            "JavaScript", 
            "Python",
            "ArcGIS"
        ],
        problem: "Problem statement",
        solution: "What we have done for the problem.",
        technologiesUsed: "comma separated technologies"
    },
    {
        name: "Aquatic Informatics - Aquarius Professional Services",
        period: "September 2020 - February 2021",
        responsibility: "Convert the old unstructured database to the new structured database using PowerShell Scripting",
        roles: [
            "PowerShell",
            "SQL Server"
        ],
        problem: "Problem statement",
        solution: "What we have done for the problem.",
        technologiesUsed: "comma separated technologies"
    },
    {
        name: "Squirrel Systems - Cloud POS Services",
        period: "January 2020 - Current",
        responsibility: "Components development and bug fixing",
        roles: [
            "Angular",
            "Azure DevOps"
        ],
        problem: "Problem statement",
        solution: "What we have done for the problem.",
        technologiesUsed: "comma separated technologies"
    },
    {
        name: "Optimus Information Inc. - Optimus Portal",
        period: "July 2020 - September 2020",
        responsibility: "Modify the existing portal written in JavaScript to Angular using Firebase database and authentication",
        roles: [
            "Angular",
            "Firebase"
        ],
        problem: "Problem statement",
        solution: "What we have done for the problem.",
        technologiesUsed: "comma separated technologies"
    },
    {
        name: "Optimus Information Inc. - Rolling Projection and Deployment Automation",
        period: "May 2020 - July 2020",
        responsibility: "Create an Angular application to manage the rolling projections and deployment of the projects",
        roles: [
            "Angular",
            "Azure AD"
        ],
        problem: "Problem statement",
        solution: "What we have done for the problem.",
        technologiesUsed: "comma separated technologies"
    },
    {
        name: "Optimus Information Inc. - Project Kickoff and Billing Portal",
        period: "July 2019 - December 2019",
        responsibility: "Create web APIs to manage the Kickoff and billing of the projects",
        roles: [
            ".NET Core",
            "SQL Server"
        ],
        problem: "Problem statement",
        solution: "What we have done for the problem.",
        technologiesUsed: "comma separated technologies"
    },
    {
        name: "Self-learning - COVID-19 Dashboard India",
        period: "July 2019 - December 2019",
        responsibility: "Create a dashboard to show the COVID-19 India cases graphs and maps for country, state, and districts",
        roles: [
            "Angular",
            "Firebase"
        ],
        problem: "Problem statement",
        solution: "What we have done for the problem.",
        technologiesUsed: "comma separated technologies"
    }
];

var achievements = [
    {
        name: "Performer of the month",
        description: "February 2021"
    },
    {
        name: "Spot awardee",
        description: "5 times"
    },
    {
        name: "Development team of the year",
        description: "December 2019"
    }
];

var miscs = [
    {
        shortDescription: "Deployed web applications on Firebase(GCP) with functionalities like OTP and google authentication, database, and hosting",
        longDescription: "something 1 long desc."
    },
    {
        shortDescription: "Created CI/CD pipelines on Azure DevOps for web applications",
        longDescription: "something 2 long desc."
    },
    {
        shortDescription: "Worked on projects with GitHub for source code version controlling",
        longDescription: "something 3 long desc."
    },
    {
        shortDescription: "Supervised some resources in completing requirements in some projects",
        longDescription: "something 4 long desc."
    }
];

var appreciations = [
    {
        comment: `Performer of the month - He did really well in multiple projects (AQUARIUS, CPAC, 
        and Squirrel), and delivered the task with utmost priority in all the projects. His hard work 
        and dedication are commendable.`,
        by: "Khushbu Garg (Technical Architect)"
    },
    {
        comment: `It sounds like the team in India is doing great job running the tools, Bill is quite
        happy that they are able to execute the tool suite with minimal issues.`,
        by: "Marcus Bell (AQUARIUS Client)"
    },
    {
        comment: `I would really appreciate <span id="name">+Adarsh Srivastava</span> - For hard work that he put in multiple
        projects this month and remains always on top of everything.`,
        by: "Naveen Pratap Singh (Technical Delivery Manager)"
    },
    {
        comment: `I would like to appreciate <span id="name">+Adarsh Srivastava</span> for doing good work on Optius Portal and SSO
        tasks. We have rolled out Manage Portals feature to production.`,
        by: "Vivek Kumar (Associate Technical Lead)"
    },
    {
        comment: `Kudos to <span id="name">+Adarsh Srivastava</span> for his exceptionally good work in the AQUARIUS project. 
        I would really appreciate his efforts for quick ramp up in the project and started doing the 
        assigned tasks. Our client has also appreciated the same.`,
        by: "Naveen Pratap Singh (Technical Delivery Manager)"
    },
    {
        comment: `<span id="name">+Adarsh Srivastava</span>. Thanks a lot for your effort today. We did a great job and also 
        qualified for the final round of the "BC-Dev Code challenge".`,
        by: "Rajeev Roy (Business Lead for Data & AI)"
    },
    {
        comment: `Congratulations <span id="name">+Adarsh Srivastava</span> for being our top users of Udemy Learning Platform this
        month and aquiring new skills.`,
        by: "Aastha Agarwal (Learning & Development Program Executive)"
    },
    {
        comment: `Thanks <span id="name">+Adarsh Srivastava</span>. The results looks good. We can pack it up for delivery today.`,
        by: "Bill Chen (AQUARIUS Client)"
    }
];