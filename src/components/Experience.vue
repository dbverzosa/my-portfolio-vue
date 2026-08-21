<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const experiences = [
  {
    period: 'August 2024 — September 2025',
    role: 'Lecturer',
    company: 'Caraga State University - Main Campus',
    location: 'Butuan City',
    description: [
  'Taught programming, computer networking, computing, and mathematics-related courses to Engineering, Information Technology, and Applied Mathematics students.',
  'Developed and updated course syllabi, instructional materials, laboratory activities, and assessments based on course requirements.',
  'Facilitated classroom and laboratory instruction while guiding students through technical activities, academic projects, and research.',
  'Assessed student performance and provided constructive feedback to support learning and academic development.',
    'Collaborated with faculty members in curriculum development, instructional planning, and departmental and institutional activities.',  
  'Prepared and submitted instructional reports, grades, and other academic requirements.',
],
  },

  {
    period: 'February 2024 — June 2024',
    role: 'Intern Programmer',
    company: 'AFMB Corporation - AFTECH',
    location: 'Butuan City',
    description: [
    'Developed and maintained both front-end and back-end components of web applications.',
    'Integrated APIs and implemented new features to enhance website functionality and user experience.',
    'Debugged, tested, and optimized web applications to improve system performance and reliability.',
    'Configured and deployed network devices, including modems and routers, to support client connectivity requirements.',
    'Utilized frameworks, packages, and libraries to streamline development and improve application efficiency.',
    'Worked with CI/CD practices to support automated application development, testing, and deployment workflows.',
    'Collaborated with the development team in software implementation, testing, and troubleshooting.',
    ],
  },

  {
    period: 'January 2020',
    role: 'Work Immersion',
    company: 'Enterprise Bank Incorporated',
    location: 'Butuan City',
    description: [
      'Conducted data processing and ensured proper documentation for organizational records.',
      'Supported clients and staff in resolving queries related to operations.',
      'Contributed to the smooth functioning of daily tasks through technical and clerical assistance.',
      'Gained practical experience in administrative and operational procedures within a banking environment.',
    ],
  },
]
</script>

<template>
  <section id="experience" class="experience section">
    <div class="section-container">

      <!-- Section Heading -->
      <div class="section-heading reveal">
        <p>Experience</p>

        <h2>
          Where I've worked
        </h2>
      </div>

      <!-- Timeline -->
      <div class="timeline">

        <article
          v-for="(experience, index) in experiences"
          :key="experience.role + experience.period"
          class="timeline-item"
          :class="index % 2 === 0 ? 'reveal-left' : 'reveal-right'"
        >
          <!-- Timeline Dot -->
          <div class="timeline-dot">
            <span></span>
          </div>

          <!-- Timeline Content -->
          <div class="timeline-content">

            <span class="timeline-year">
              {{ experience.period }}
            </span>

            <h3>
              {{ experience.role }}
            </h3>

            <h4>
              {{ experience.company }}
            </h4>

            <span class="timeline-location">
              {{ experience.location }}
            </span>

            <ul>
              <li
                v-for="item in experience.description"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>

<style lang="scss">
@use '../styles/experience.scss';
</style>