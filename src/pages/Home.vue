<script setup lang="ts">
import CountDown from "../components/CountDown.vue";
import LinkPreview from "@/components/ui/LinkPreview.vue";
</script>

<template>
  <div class="continer text-center">
    <h1 text-black text-4xl font-700 dark:text-white>Hazem Hamdy</h1>
    <p font-base>
      Hey, I am <strong font-900> Hazem Hamdy</strong>, With years of hands-on
      experience as a Front-End Web Developer, I bring expertise in
      <strong font-900> Vue.js</strong> and its associated technologies to craft
      visually appealing and dynamic user interfaces.
    </p>
    <CountDown/>
    <p font-base>
      Working at
      <LinkPreview :width="400"
                   :height="150" class="font-bold" url="https://wakeb.tech/">
        Wakeb
      </LinkPreview>
      . Specialists in artificial intelligence, machine learning, cognitive
      computing, intelligent applications and software as we were established
      and keep up to be a leading company in the field of information technology
      and we located in Riyadh, Saudi Arabia.
    </p>
    <p font-base>
      Worked at
      <LinkPreview class="font-bold" url="https://hectarplus.io/">
        Hectar
      </LinkPreview>
      . An integrated system for managing business operations and procedures
      for real estate entities.also property mangement platform that offers
      users access to various features through an easy-to-use control panel.
    </p>
    <p font-base>
      Worked at
      <LinkPreview class="font-bold" url="https://payiano.com/">Payiano.</LinkPreview> it is a digital payments platform that helps merchants, corporates, and
      individuals make transactions quickly and securely.
    </p>

      <p>
      Worked at
        <a class="font-bold cursor-pointer" style="text-decoration: none" href="https://www.dorysoftware.com/">Dory</a>. Software solutions that are functional and intuitive, turn to Dory Software, and experience the difference we can make for you. Our team of professionals work closely with our clients every step of the way to ensure their needs are met and that they have products that are profitable, extendable, functional and simple.
      </p>
    <p font-base>
      Dreaming up ideas and making them come true is where my passion lies. You
      can find my <br>
      <RouterLink :to="{ name: 'projects' }" text-black dark:text-white>
        Full projects list here
      </RouterLink
      >
      .
    </p>
    <p font-base>
      Beyond coding, I find joy in gaming, with a particular Rocket League and
      FIFA. If you share a passion for these games, we can team up for some fun
      sessions or engage in friendly competitions while tackling problem-solving
      challenges on
      <a
          href="https://www.codingame.com/servlet/urlinvite?u=5591068"
          target="_blank"
          text-black
          dark:text-white
      >Codingame.</a
      >
    </p>
    <hr/>
    <div space-y-3xl>
      <h2 font-base font-700 text-xl>Coding Profiles</h2>
      <ul flex="~ row justify-between" class="test">
        <li>
          <a
              href="https://github.com/hazemhamdyabdo"
              target="_blank"
              text-black
              dark:text-white
          >Github</a
          >
        </li>
        <li>
          <a
              href="https://leetcode.com/Hazem224/"
              target="_blank"
              text-black
              dark:text-white
          >Leetcode</a
          >
        </li>
        <li>
          <a
              href="https://www.hackerrank.com/profile/hazemhamdy117"
              target="_blank"
              text-black
              dark:text-white
          >HackerRank</a
          >
        </li>
        <li>
          <a
              href="https://www.codewars.com/users/Hazem.H"
              target="_blank"
              text-black
              dark:text-white
          >CodeWars</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
html {
  .test a:hover {
    color: black;
    font-weight: 700;
  }
}

html.dark {
  a:hover {
    color: lightgray;
  }
}

.continer {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 0.5rem;
  padding: 2rem 5rem;

  & p {
    font-size: large;
    line-height: 2rem;
  }

  hr {
    height: 0.4px;
    background-color: rgba(122, 122, 122, 0.39);
    border: none;
    width: 8rem;
    margin: 0 auto;
  }
}

a {
  // color: white;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: rgb(66, 66, 66);
  text-underline-offset: 0.2rem;
}

ul > li > a {
  color: rgb(170, 170, 170);
  font-weight: 600;

  &:hover {
    color: white;
  }
}

@media only screen and (max-width: 800px) {
  .continer {
    padding: 0 1rem;
    width: auto;
  }
}
</style>
