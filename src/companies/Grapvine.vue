<template>
    <section class="continer">
      <div class="img">
        <img src="@/assets/Grapvine.png" alt="Grapvine Landing-page" />
      </div>
      <div flex="~ col" gap-2 pt-5 class="content">
        <h3 dark:text-white font-600>
          <a href="https://graypevine.com/" dark:n-link-text target="_blank">
            @GrayPevine
          </a>
        </h3>
        <p font-base>
          At GrayPevine, We play a crucial role in creating an engaging and
          user-friendly interface for real estate entities to manage their
          business operations and procedures effectively.
        </p>
        <div>
  <h4 third-head mb-4>My Responsibilities</h4>
  <ul font-base list-circle space-y-2>
    <li>
      Developed the quiz experience using Nuxt 3 and Tailwind CSS with dynamic UI states and smooth interactions.
    </li>
    <li>
      Implemented strict validation logic to prevent cheating—auto full screen on quiz start, block tab switching, and auto-marking questions as wrong on violation.
    </li>
    <li>
      Created modules for evaluations, practices, and quiz history, including detailed performance reports and summaries.
    </li>
    <li>
      Integrated pixel tracking and enhanced SEO support for better user analytics and visibility.
    </li>
    <li>
      Ensured high accessibility and responsiveness across all devices and screen sizes.
    </li>
    <li>
      Collaborated closely with product and backend teams to ensure API integration and business logic alignment.
    </li>
    <li>
      Optimized build performance using Vite and followed best practices for modern frontend architecture.
    </li>
    <li>
      Wrote reusable, maintainable components and documented key functionalities for future scalability.
    </li>
  </ul>
</div>
      </div>
    </section>
  </template>
  
  <style scoped lang="scss">
  .img {
    max-height: max-content;
    & img {
      height: 100%;
      width: 100%;
    }
  }
  
  .continer {
    display: flex;
    justify-content: space-between;
    width: 84%;
    border-radius: 8px;
    overflow: hidden;
    gap: 2rem;
    margin: 0 auto;
  }
  
  @media only screen and (max-width: 1407px) {
    .content {
      font-size: 1em;
    }
  }
  @media only screen and (max-width: 1235px) {
    .content {
      font-size: 0.9em;
    }
  }
  @media only screen and (max-width: 1166px) {
    .content {
      font-size: 0.85em;
    }
  }
  @media only screen and (max-width: 1001px) {
    .content {
      font-size: 0.8em;
    }
  }
  @media only screen and (max-width: 941px) {
    .content {
      font-size: 0.75em;
    }
  }
  @media only screen and (max-width: 794px) {
    .content {
      font-size: 0.7em;
    }
  }
  @media only screen and (max-width: 715px) {
    .continer {
      flex-direction: column;
      gap: 0rem;
      width: 80%;
  
      & .content {
        padding: 6px;
      }
      & img {
        width: auto;
      }
    }
  }
  </style>
  