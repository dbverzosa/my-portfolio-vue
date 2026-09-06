<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useTypewriter } from '../composables/useTypewriter'
import heroImg from '../assets/hero.png'

const { text } = useTypewriter([
  'Problem Solver',
  'Creative Thinker',
  'Continuous Learner',
  'Solution Builder',
])

const orbitRoles = [
  'Software Developer',
  'Full-Stack Developer',
  'Web Developer',
  'Application Developer',
  'Computer Programmer',
  'Computer Networking',
]

/* =========================================
   NETWORK BACKGROUND
========================================= */

const networkCanvas = ref<HTMLCanvasElement | null>(null)

let animationFrame = 0

onMounted(() => {
  const canvas = networkCanvas.value

  if (!canvas) return

  const ctx = canvas.getContext('2d')

  if (!ctx) return

  const section = canvas.parentElement

  if (!section) return

  let width = 0
  let height = 0
  let dpr = 1

  let mouseX = -1000
  let mouseY = -1000

  const nodes: {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
  }[] = []

  /* =====================================
     CREATE NODES
  ====================================== */

  const createNodes = () => {
    nodes.length = 0

    const nodeCount =
      width < 600
        ? 35
        : width < 1000
          ? 55
          : 80

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 1.2 + 1,
      })
    }
  }

  /* =====================================
     RESIZE
  ====================================== */

  const resize = () => {
    const rect = section.getBoundingClientRect()

    width = rect.width
    height = rect.height

    dpr = Math.min(
      window.devicePixelRatio || 1,
      2
    )

    canvas.width = width * dpr
    canvas.height = height * dpr

    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    ctx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    )

    createNodes()
  }

  /* =====================================
     MOUSE MOVE
  ====================================== */

  const handleMouseMove = (
    event: MouseEvent
  ) => {
    const rect = canvas.getBoundingClientRect()

    mouseX =
      event.clientX - rect.left

    mouseY =
      event.clientY - rect.top
  }

  /* =====================================
     MOUSE LEAVE
  ====================================== */

  const handleMouseLeave = () => {
    mouseX = -1000
    mouseY = -1000
  }

  /* =====================================
     ANIMATION
  ====================================== */

  const animate = () => {
    ctx.clearRect(
      0,
      0,
      width,
      height
    )

    /* =================================
       FLOATING NODES
    ================================== */

    nodes.forEach((node) => {
      node.x += node.vx
      node.y += node.vy

      if (
        node.x < -20 ||
        node.x > width + 20
      ) {
        node.vx *= -1
      }

      if (
        node.y < -20 ||
        node.y > height + 20
      ) {
        node.vy *= -1
      }
    })

    /* =================================
       CONNECTIONS
    ================================== */

    for (
      let i = 0;
      i < nodes.length;
      i++
    ) {
      for (
        let j = i + 1;
        j < nodes.length;
        j++
      ) {
        const a = nodes[i]
        const b = nodes[j]

        const dx =
          a.x - b.x

        const dy =
          a.y - b.y

        const distance =
          Math.sqrt(
            dx * dx +
            dy * dy
          )

        const maxDistance = 155

        if (
          distance >
          maxDistance
        ) {
          continue
        }

        const proximity =
          1 -
          distance /
            maxDistance

        const centerX =
          (a.x + b.x) / 2

        const centerY =
          (a.y + b.y) / 2

        const mouseDistance =
          Math.sqrt(
            (mouseX - centerX) ** 2 +
            (mouseY - centerY) ** 2
          )

        const hoverRadius = 160

        const hover =
          Math.max(
            0,
            1 -
              mouseDistance /
                hoverRadius
          )

        const opacity =
          proximity * 0.12 +
          hover * 0.65

        ctx.beginPath()

        ctx.moveTo(
          a.x,
          a.y
        )

        ctx.lineTo(
          b.x,
          b.y
        )

        ctx.strokeStyle =
          `rgba(20, 184, 166, ${opacity})`

        ctx.lineWidth =
          0.5 +
          hover * 1.1

        ctx.stroke()
      }
    }

    /* =================================
       DRAW NODES
    ================================== */

    nodes.forEach((node) => {
      const dx =
        mouseX - node.x

      const dy =
        mouseY - node.y

      const distance =
        Math.sqrt(
          dx * dx +
          dy * dy
        )

      const hoverRadius = 135

      const hover =
        Math.max(
          0,
          1 -
            distance /
              hoverRadius
        )

      ctx.beginPath()

      ctx.arc(
        node.x,
        node.y,
        node.radius +
          hover * 2,
        0,
        Math.PI * 2
      )

      ctx.fillStyle =
        `rgba(20, 184, 166, ${
          0.25 +
          hover * 0.75
        })`

      ctx.fill()

      if (hover > 0) {
        ctx.beginPath()

        ctx.arc(
          node.x,
          node.y,
          7 +
            hover * 8,
          0,
          Math.PI * 2
        )

        ctx.fillStyle =
          `rgba(20, 184, 166, ${
            hover * 0.07
          })`

        ctx.fill()
      }
    })

    animationFrame =
      requestAnimationFrame(
        animate
      )
  }

  /* =====================================
     INITIALIZE
  ====================================== */

  resize()

  window.addEventListener(
    'resize',
    resize
  )

  canvas.addEventListener(
    'mousemove',
    handleMouseMove
  )

  canvas.addEventListener(
    'mouseleave',
    handleMouseLeave
  )

  animate()

  /* =====================================
     CLEANUP
  ====================================== */

  onBeforeUnmount(() => {
    cancelAnimationFrame(
      animationFrame
    )

    window.removeEventListener(
      'resize',
      resize
    )

    canvas.removeEventListener(
      'mousemove',
      handleMouseMove
    )

    canvas.removeEventListener(
      'mouseleave',
      handleMouseLeave
    )
  })
})
</script>

<template>
  <section id="home" class="hero">

    <!-- =========================================
         NETWORK BACKGROUND
    ========================================== -->

    <canvas
      ref="networkCanvas"
      class="hero-network"
      aria-hidden="true"
    ></canvas>

    <div class="hero-grid"></div>

    <div class="hero-glow hero-glow-one"></div>
    <div class="hero-glow hero-glow-two"></div>

    <div class="hero-particle particle-one"></div>
    <div class="hero-particle particle-two"></div>
    <div class="hero-particle particle-three"></div>


    <!-- =========================================
         HERO CONTAINER
    ========================================== -->

    <div class="section-container hero-container">

      <!-- =========================================
           HERO CONTENT
      ========================================== -->

      <div class="hero-content">

        <p class="hero-greeting">
          Hello, I'm
        </p>

        <h1 class="hero-name">
          Debby
          <span>Verzosa</span>
        </h1>

        <div class="hero-title">

          <span class="hero-title-prefix">
            I'm a
          </span>

          <span class="typewriter">
            {{ text }}
          </span>

          <span class="cursor">
            |
          </span>

        </div>

        <p class="hero-description">
          An Information Technology graduate passionate about developing
          web and mobile applications, building software systems, working
          with computer networks, and creating practical technology
          solutions that solve real-world problems.
        </p>

        <div class="hero-achievements">

          <span class="dot">•</span>

          <span>
            Web Development
          </span>

          <span class="dot">•</span>

          <span>
            Mobile Development
          </span>

          <span class="dot">•</span>

          <span>
            Computer Networking
          </span>

        </div>


        <!-- =====================================
             CTA GROUP
        ====================================== -->

        <div class="hero-cta-group">

          <div class="hero-actions">

            <a
              href="#projects"
              class="primary-btn"
            >
              View My Work

              <span class="arrow">
                →
              </span>
            </a>

            <a
              href="#contact"
              class="secondary-btn"
            >
              Contact Me
            </a>

          </div>


          <!-- =================================
               AVAILABILITY
          ================================== -->

          <div class="availability-badge">

            <span class="availability-dot"></span>

            <span>
              Open for Work &amp; Collaborations
            </span>

          </div>

        </div>

      </div>


      <!-- =========================================
           HERO VISUAL
      ========================================== -->

      <div class="hero-visual">

        <div class="hero-orbit orbit-one"></div>

        <div class="hero-orbit orbit-two"></div>


        <!-- =====================================
             ROLE ORBIT
        ====================================== -->

        <div class="role-orbit">

          <div
            v-for="(role, index) in orbitRoles"
            :key="role"
            class="orbit-role"
            :class="`orbit-role-${index + 1}`"
          >
            {{ role }}
          </div>

        </div>


        <!-- =====================================
             PROFILE
        ====================================== -->

        <div class="hero-profile">

          <div class="profile-ring"></div>

          <img
            :src="heroImg"
            alt="Debby Verzosa"
          />

        </div>


        <div class="floating-dot dot-one"></div>

        <div class="floating-dot dot-two"></div>

      </div>

    </div>


    <!-- =========================================
         SCROLL INDICATOR
    ========================================== -->

    <a
      href="#about"
      class="scroll-indicator"
      aria-label="Scroll to About"
    >

      <span>
        Scroll to explore
      </span>

      <div class="scroll-line"></div>

    </a>

  </section>
</template>

<style lang="scss">
@use '../styles/hero.scss';
</style>