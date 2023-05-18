import { Component } from '@angular/core';
import { faPhone, faEnvelope, faLocation, faGlobe, faPrint } from '@fortawesome/free-solid-svg-icons';

export interface Skill {
  name: string;
  percent: number;
}

export interface Education {
  name: string;
  major_board: string;
  startYear: string;
  endYear: string;
  collegeName: string;
}

export interface Project {
  clientName: string;
  clientDescription: string;
  projectsDetails: ProjectDetails[];
  roles: string[]
}

export interface ProjectDetails {
  projectName: string;
  projectDescriotion: string;
}

export interface Experience {
  companyName: string;
  companyAddress: string;
  jobTitle: string;
  beginDate: string;
  endDate?: string;
  isCurrent?: boolean;
  companyDescription: string;
  projects: Project[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';
  firstName = 'soumen';
  lastName = 'sarkar';
  jobTitle = "Sr. Associate";
  currentCompany = "Cognizant Technology Solution India Pvt. Ltd.";
  phoneNumber = "+91-8609599125";
  email = "uideveloper.soumen@gmail.com";
  addressLine1 = "388, Michael Nagar, Kolkata";
  addressLine2 = "West Bengal - 700133, India";
  linkedin = "https://in.linkedin.com/in/soumenSarkar-uiDeveloper";
  github = "https://github.com/soumen-sarkar";
  website = "https://crystalui.in/";
  resumeLink = "https://soumen-sarkar.github.io/resume/"

  skills: Skill[] = [
    {
      name: "Angular 2",
      percent: 70
    },
    {
      name: "JavaScript",
      percent: 60
    },
    {
      name: "HTML5",
      percent: 80
    },
    {
      name: "CSS3",
      percent: 60
    },
    {
      name: "AG-Grid",
      percent: 65
    }
  ];

  courses: Education[] = [
    {
      name: "B.A",
      major_board: "Burdwan University",
      startYear: "2004",
      endYear: "2008",
      collegeName: "A.K.P.C Mahavidlaya"
    },
    {
      name: "XII",
      major_board: "W.B.B.H.S.E.",
      startYear: "2002",
      endYear: "2004",
      collegeName: "B.G.P. Vidyapith"
    },
    {
      name: "X",
      major_board: "W.B.B.S.E.",
      startYear: "2001",
      endYear: "2002",
      collegeName: "Kotulpur High School"
    }
  ];

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocation = faLocation;
  faGlobe = faGlobe;
  faPrint = faPrint;

  profileSummary = `A professional front-end developer who focuses on telling stories visually, through enjoyable and meaningful experiences. Having 13+ years of experience in a fast paced environment meeting the goals and objectives through hard work.`;

  get address(): string {
    return this.addressLine1 + ", " + this.addressLine2;
  }

  getCourseDuration(course: Education): string {
    return `${course.startYear}-${course.endYear.substr(2, 2)}`;
  }

  experiences: Experience[] = [
    {
      companyName: this.currentCompany,
      companyAddress: "Kolkata, India",
      jobTitle: "Senior Software Developer",
      beginDate: "December 2017",
      endDate: "Present",
      isCurrent: true,
      companyDescription: `Cognizant is an American multinational information technology services and consulting company.`,
      projects: [
        {
          clientName: "Credit Suisse",
          clientDescription: "Credit Suisse Group AG is a global investment bank and financial services firm founded and based in Switzerland. it maintains offices in all major financial centers around the world and provides services in investment banking, private banking, asset management, and shared services.",
          projectsDetails: [
            {
              projectName: "KTOS-net",
              projectDescriotion: "An account management app. other than account creation. It holds account master data, flags, account condition & limit, collective limits, account association and instructions."
            },
            {
              projectName: "XBS-net",
              projectDescriotion: "A Extended Booking System. From this application user can create any type of rule for account or account group. It also process all the business transaction advices that are delivered to it."
            },
            {
              projectName: "TABS-net",
              projectDescriotion: ""
            }
          ],
          roles: [
            "Gather and document new requirements.",
            "Proposing timelines and creating POC where ever required.",
            "Ensuring test-driven development architecture.",
            "Coding and review.",
            "Ensuring quality code and unit testing.",
            "Proposing solutions for fixing issues."
          ]
        },
        {
          clientName: "First Data",
          clientDescription: "First Data Corporation is a financial services company. The company's STAR Network provides nationwide domestic debit acceptance at more than 2 million retail POS, ATM, and at online outlets for nearly a third of all U.S. debit cards.",
          projectsDetails: [
            {
              projectName: "FD-pos",
              projectDescriotion: "An application combined desk for integrating and resolving issues for all the devices manufactured by the client. This management systems is also given support throughout the life cycle of a POS device from add, edit, delete merchant; add, edit, return, replace, delete equipment, Boarding process, equipment deployment, equipment fees with different fees method, equipment billing with different bill method, Request taking for all services, Application install process in equipment, Manipulate feature of that application etc. "
            }
          ],
          roles: [
            "Gather and document new requirements from client.",
            "Propose solutions and timelines.",
            "Coding and review.",
            "Unit testing.",
            "Fixing bugs."
          ]
        }
      ]
    },
    {
      companyName: "R.S. Software India Ltd.",
      companyAddress: "Kolkata, India",
      jobTitle: "Senior Software Developer",
      beginDate: "September 2017",
      endDate: "December 2017",
      isCurrent: false,
      companyDescription: "RS Software brings multi-rail expertise developed by delivering transformative solutions across the digital payments value chain - Infrastructure, Application, Services.",
      projects: [
        {
          clientName: "Network Telephone Services",
          clientDescription: "NTS is a Strong Engineering & Entertainment Organization, specializing in both Telecom & FinTech.",
          projectsDetails: [
            {
              projectName: "PLCC",
              projectDescriotion: "Private label Credit Card Management Systems allows retailers to offer more lenient and extended terms to customers than they could otherwise and to encourage them to spend more by offering the convenience of a credit card and deferred payment. In addition, when a customer makes a purchase with a private label credit card, they will usually earn loyalty rewards, such as a discount on a future purchase."
            }
          ],
          roles: [
            "Provided innovative approaches for betterment of the application and profiling in the UI layer. Adopted new methods to develop the application.",
            "Understand, interpret and clarify functional requirements as well as technical requirements and requirement standards for the project.",
            "Study assigned functional specifications; analyze and identify impact of specifications; raise queries and seek resolution from different .",
            "Develop coding as required in the project. Raise clarifications / issues / concerns regarding work output to the lead on time.",
            "Write unit test cases for the specific unit; seek review from peer / Senior Developer for the test cases written. Follow up on integration of the component developed with the application.",
          ]
        }
      ]
    },
    {
      companyName: "Brainium Information Technologies Pvt. Ltd.",
      companyAddress: "Kolkata, India",
      jobTitle: "Senior Web Designer",
      beginDate: "July 2013",
      endDate: "September 2017",
      isCurrent: false,
      companyDescription: "Brainium provide end-to-end services from design, development, testing, deployment, and digital marketing services.",
      projects: [
        {
          clientName: "TDG Marketing (http://www.tdgmarketing.com/)",
          clientDescription: "A full-service marketing agency, offer everything you need to help your brand to break through the clutter in a world that is full of advertisements",
          projectsDetails: [
            {
              projectName: "TDG Marketing",
              projectDescriotion: "TDG Marketing is a full service marketing agency based in Brantford, Ontario. With over 16 years of experience (and counting). TDG produces strategic and eye-catching marketing tools and campaigns to break through the clutter of advertisements that consumers are affected by daily."
            }
          ],
          roles: [
            "Conversion from Design to Bootstrap ware frame with HTML5, CSS3, SCSS.",
            "Involved in analyze, design and mainly with code implementation phases for different modules.",
            "Make custom animation based on design ware-frame by CSS3, jQuery.",
          ]
        },
        {
          clientName: "Abdul Latif Jamal Finace (http://www.aljfinance.com/index.aspx)",
          clientDescription: "A closed joint stock company licensed by the Saudi Central Bank (SAMA) to work in financial leasing, productive assets financing, consumer products financing, and real estate financing.",
          projectsDetails: [
            {
              projectName: "TDG Marketing",
              projectDescriotion: "Applying for different financing products and enabling our representatives to contact and assist you. Finalize the financing processes for the products that can be financed entirely online. Complete the online aftersales services without the need to visit our branches. View your standing financing applications details."
            }
          ],
          roles: [
            "Conversion from Design to Bootstrap ware frame with HTML5, CSS3, SCSS.",
            "Involved in analyze, design and mainly with code implementation phases for different modules.",
            "Make custom animation based on design ware-frame by CSS3, jQuery.",
          ]
        }
      ]
    },
    {
      companyName: "Webgen Technologies Pvt. Ltd.",
      companyAddress: "Kolkata, India",
      jobTitle: "Web Designer",
      beginDate: "March 2010",
      endDate: "June 2013",
      isCurrent: false,
      companyDescription: "A software development company that provides cutting-edge technology and software solutions to global businesses.",
      projects: [
        {
          clientName: "Esafe Field Evaluation (https://www.esafieldevaluation.ca/)",
          clientDescription: "ESAFE offers unparalleled expertise in on-site electrical safety inspections for low volume and specialized electrical equipment. They are proud of our long history in electrical safety, and the experience that we offer our customers. ESAFE has the most highly qualified team in the country.",
          projectsDetails: [
            {
              projectName: "Esafe Field Evaluation",
              projectDescriotion: "Application for product approval services, technical services & blog."
            }
          ],
          roles: [
            "Conversion from Design to Bootstrap ware frame with HTML5, CSS3, SCSS.",
            "Involved in analyze, design and mainly with code implementation phases for different modules.",
            "Make custom animation based on design ware-frame by CSS3, jQuery.",
          ]
        }
      ]
    }
  ];

  printResume() {
    window.print();
  }
  
  get isMyResume(): boolean {
    return this.firstName === "soumen" && this.lastName === "sarkar" && this.phoneNumber.indexOf("8609599125") > -1;
  }
}
