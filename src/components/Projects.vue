<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

interface Project {
  number: string
  title: string
  category: string
  description: string
  technologies: string[]
  details?: string[]
}

const selectedProject = ref<Project | null>(null)

const projects: Project[] = [
  {
    number: '01',
    title: 'SmartHR and Network Valve',
    category: 'Web Application',
    description:
      'A web application for AFTECH featuring HR automation, network device management, subscription features, printable vouchers, and MikroTik integration.',
    technologies: [
      'PHP',
      'WordPress Multisite',
      'AJAX',
      'jQuery',
      'MikroTik',
      'Pear2 Net_RouterOS API',
      'mPDF',
      'Cron Jobs',
      'Winbox',
      'Docker',
      'CI/CD',
    ],
    details: [
      'Developed automated email reminders for pending HR forms using WordPress Multisite and custom cron jobs.',
      'Managed MikroTik network devices through PHP using the Pear2 Net_RouterOS API with filtering and error handling.',
      'Implemented CRUD, search, filtering, and subscription features using PHP, AJAX, and jQuery.',
      'Created printable vouchers with customizable paper sizes using mPDF and saved user preferences.',
      'Applied Git and Docker for remote development and supported CI/CD workflows for application development, testing, and deployment.',
      'Developed custom WordPress plugins with cron scheduling and SMTP email handling.',
      'Implemented network device management with real-time synchronization to MikroTik routers and Winbox.',
    ],
  },

  {
  number: '02',
  title: 'iSafeButuan',
  category: 'Mobile & Web Application',
  description:
    'A GPS-enabled public safety system developed using ReactJS for Web, React Native for Mobile, and Firebase to enhance citizen-police collaboration, emergency reporting, and response efficiency in Butuan City.',
  technologies: [
    'ReactJS',
    'React Native',
    'Expo',
    'Firebase',
    'GPS',
    'SMS',
    'Email Authentication',
  ],

  details: [
    'Developed both web and mobile application for police personnel and a mobile application for citizens to support incident reporting and emergency response.',
    'Integrated GPS functionality for user location tracking, nearest police station detection, and jurisdiction-based police station identification.',
    'Implemented anonymous incident reporting to allow citizens to submit reports while protecting their identity.',
    'Provided accessible police station information, including station locations and emergency hotline numbers.',
    'Implemented emergency assistance features that allow users to report incidents and request help from the appropriate police station.',
    'Used Firebase for real-time emergency reporting, data management, and communication between the mobile and web applications.',
    'Integrated email and SMS authentication and communication features to support user access and emergency notifications.',
    'Designed the system to improve public safety and emergency response efficiency within Butuan City.',
  ],
},

 {
  number: '03',
  title: 'AutoMobile Company',
  category: 'Web-Based System',
  description:
    'A web-based system for managing vehicle transactions, inventory, and dealership operations with multi-role authentication and role-specific dashboards.',

  technologies: [
    'Laravel',
    'PHP',
    'MySQL',
    'Bootstrap',
    'HTML',
    'CSS',
  ],

  details: [
    'Developed a web-based vehicle transaction management system using Laravel, MySQL, HTML, CSS, and Bootstrap.',
    'Implemented multi-role authentication for Customers, Dealers, Manufacturers, Suppliers, and Administrators with role-specific access.',
    'Developed dedicated dashboards for each user role based on their responsibilities and system permissions.',
    'Developed vehicle and vehicle parts listings with pricing, specifications, and information management.',
    'Implemented sales tracking and inventory management features to support dealership operations.',
    'Added search and filtering functionality for efficient vehicle and parts discovery.',
    'Implemented CRUD operations for managing vehicles, vehicle parts, and related information.',
    'Designed the system to streamline dealership operations, improve inventory monitoring, and enhance customer service.',
  ],
},

  {
  number: '04',
  title: 'Task Manager App',
  category: 'Full-Stack Web Application',
  description:
    'A full-stack task management application for organizing user-specific lists and tasks with task tracking, filtering, search, and responsive design.',

  technologies: [
    'Laravel',
    'PHP',
    'Vue',
    'TypeScript',
    'MySQL',
  ],

  details: [
    'Developed a full-stack task management application using Laravel and Vue for managing user-specific lists and tasks.',
    'Implemented user authentication and ensured that each user can access and manage only their own lists and tasks.',
    'Developed a dashboard displaying total lists, total tasks, completed tasks, completion rate, and recent lists and tasks.',
    'Implemented full CRUD functionality for creating, editing, and deleting lists, with each list displaying its associated number of tasks.',
    'Implemented task management features including task creation, list assignment, descriptions, priority levels, editing, deletion, and completion tracking.',
    'Added dynamic search and filtering based on lists, tasks, and priority.',
    'Implemented responsive design with both dark and light theme options.',
  ],
},
  {
  number: '05',
  title: 'PageTurner',
  category: 'Web Application',
  description:
    'A web-based blog application for creating, managing, and publishing articles with content discovery and user engagement features.',

  technologies: [
    'React',
    'JavaScript',
    'Firebase',
    'Firestore',
    'CRUD',
    'Responsive Design',
  ],

  details: [
    'Developed a responsive blog application using React and Firebase for creating, managing, and displaying articles.',
    'Implemented user authentication with login and registration functionality for content management.',
    'Implemented CRUD functionality allowing users to create, edit, and delete their own articles.',
    'Added article thumbnails, descriptions, categories, and tags for improved content organization.',
    'Implemented search and filtering functionality to help users discover articles based on relevant content.',
    'Developed article interaction features including comments and likes.',
    'Designed a responsive interface for a smooth reading and content management experience.',
  ],
},

  {
  number: '06',
  title: 'Enrollment System',
  category: 'Console Application',
  description:
    'A Java console-based application for managing student enrollment, subject registration, and academic records through an interactive menu-driven system.',

  technologies: [
    'Java',
    'OOP',
    'ArrayList',
    'Data Management',
  ],

  details: [
    'Developed a Java console application for managing student enrollment and subject registration.',
    'Implemented functionality for adding and viewing student and subject records.',
    'Implemented student enrollment in available subjects and management of enrollment records.',
    'Added search functionality for locating student and subject records using their respective IDs.',
    'Used ArrayLists for dynamic storage and management of student, subject, and enrollment data.',
    'Implemented input validation to ensure accurate and valid data entry.',
    'Applied modular class design and object-oriented programming principles throughout the application.',
    'Designed clear console menus to provide an organized and user-friendly interaction flow.',
  ],
},

 {
  number: '07',
  title: 'ClientQueue',
  category: 'Console Application',
  description:
    'A Java console-based application simulating client line management using FIFO queues for regular clients and LIFO stacks for VIP clients.',

  technologies: [
    'Java',
    'Queue',
    'Stack',
    'Data Structures',
  ],

  details: [
    'Developed a Java console application simulating client queue management in an office environment.',
    'Implemented a FIFO queue for managing regular clients and a LIFO stack for VIP clients.',
    'Implemented enqueue, dequeue, push, and pop operations for managing client records.',
    'Implemented dynamic queue behavior based on the presence or arrival of a supervisor.',
    'Developed functionality that merges the VIP stack into the regular queue when the supervisor arrives.',
    'Implemented priority-based client serving based on the system rules.',
    'Applied data structure manipulation and queue management concepts to simulate priority-based service operations.',
  ],
},

 {
  number: '08',
  title: 'Book Rental Management System',
  category: 'Console Application',
  description:
    'A console-based book rental management system developed in C for managing book inventory, rentals, borrowers, and returns through a menu-driven interface.',

  technologies: [
    'C',
    'Data Structures',
    'Algorithms',
  ],

  details: [
    'Developed a menu-driven console application in C for managing book inventory and rental operations.',
    'Implemented book inventory management with book IDs, titles, authors, number of copies, and rental prices per day.',
    'Implemented case-insensitive book search by title and display of available books.',
    'Developed rental functionality allowing users to specify the number of copies and rental duration.',
    'Implemented borrower tracking with borrower names and rental duration.',
    'Implemented book return functionality that automatically updates the number of available copies.',
    'Added functionality to delete books from the inventory.',
    'Implemented validation for unique book IDs and available copies during rental transactions.',
  ],
},
]

const openProject = (project: Project) => {
  selectedProject.value = project
}

const closeProject = () => {
  selectedProject.value = null
}
</script>

<template>
  <section id="projects" class="projects section">
    <div class="section-container">

      <div class="section-heading reveal">
        <p>Projects</p>
        <h2>Things I've built</h2>
      </div>

      <div class="projects-grid stagger reveal">

        <article
          v-for="project in projects"
          :key="project.number"
          class="project-card"
        >
          <div class="project-header">
            <span class="project-number">
              {{ project.number }}
            </span>

            <span class="project-category">
              {{ project.category }}
            </span>
          </div>

          <h3>{{ project.title }}</h3>

          <p>
            {{ project.description }}
          </p>

          <div class="project-tech">
            <span
              v-for="technology in project.technologies"
              :key="technology"
            >
              {{ technology }}
            </span>
          </div>

          <button
            v-if="project.details"
            class="project-details-btn"
            type="button"
            @click="openProject(project)"
          >
            View Details
            <span>→</span>
          </button>

        </article>

      </div>

    </div>

    <!-- PROJECT MODAL -->
    <Transition name="modal">
      <div
        v-if="selectedProject"
        class="project-modal"
        @click.self="closeProject"
      >
        <div class="project-modal-content">

          <button
            class="modal-close"
            type="button"
            aria-label="Close project details"
            @click="closeProject"
          >
            ×
          </button>

          <div class="modal-header">
            <span class="project-number">
              {{ selectedProject.number }}
            </span>

            <span class="project-category">
              {{ selectedProject.category }}
            </span>
          </div>

          <h3>{{ selectedProject.title }}</h3>

          <p class="modal-description">
            {{ selectedProject.description }}
          </p>

          <div
            v-if="selectedProject.details?.length"
            class="modal-details"
          >
            <h4>What I worked on</h4>

            <ul>
              <li
                v-for="detail in selectedProject.details"
                :key="detail"
              >
                {{ detail }}
              </li>
            </ul>
          </div>

          <div class="modal-technologies">
            <h4>Technologies</h4>

            <div class="project-tech">
              <span
                v-for="technology in selectedProject.technologies"
                :key="technology"
              >
                {{ technology }}
              </span>
            </div>
          </div>

        </div>
      </div>
    </Transition>

  </section>
</template>

<style lang="scss">
@use '../styles/projects.scss';
</style>