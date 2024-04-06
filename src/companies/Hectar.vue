<template>
  <section class="continer">
    <div class="img">
      <img src="@/assets/Hectar.png" alt="HectarPlus Landing-page" />
    </div>
    <div flex="~ col" gap-2 pt-5 class="content">
      <h3 dark:text-white font-600>
        <a href="https://hectarplus.io/" dark:n-link-text target="_blank">
          @Hectar
        </a>
      </h3>
      <p font-base>
        At Hectar, We Creating and maintaining the software components of the
        system, including both frontend and backend development.
      </p>
      <div>
        <h4 third-head mb-4>My Responsibilities</h4>
        <ul font-base list-circle space-y-2>
          <li>
            Ensuring that the frontend components work consistently across
            different web browsers and devices.
          </li>
          <li>
            Optimizing frontend code and assets to improve page load times and
            overall system performance.
          </li>
          <li>
            Implementing accessibility best practices to ensure that the system
            is usable by people with disabilities.
          </li>
          <li>
            Collaborating with backend developers to integrate frontend
            components with backend systems and APIs.
          </li>
          <li>
            Using version control systems like Git to manage code changes and
            collaborate with other developers effectively.
          </li>
          <li>
            Integrating third-party services and APIs into the system to enhance
            its capabilities and interoperability.
          </li>
          <li>
            Conducting frontend testing, including unit tests and end-to-end
            tests, to identify and fix any issues or bugs.
          </li>
          <li>
            Documenting frontend code and components to facilitate maintenance
            and future development.
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
