<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        <p v-if="projects == null">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
            <path
              d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"
            />
          </svg>
        </p>
        <FilteredNav :current="current" @changeCurrent="current = $event"></FilteredNav>
        <SingleProject v-for="project in filteredProjects" :key="project.id" :project="project" @delete="updateProjectsList" @toggle="toggleProjectList"></SingleProject>
      </div>
    </div>
  </div>
</template>

<script>
import FilteredNav from "../components/FilteredNav";
import SingleProject from "../components/SingleProject";
export default {
  name: "HomeView",
  data() {
    return {
      projects: null,
      current: "all",
    };
  },
  components: {
    FilteredNav,
    SingleProject,
  },
  methods: {
    updateProjectsList(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      });
    },
    toggleProjectList(id) {
      let findProject = this.projects.find((project) => {
        return project.id === id;
      });
      findProject.complete = !findProject.complete;
    },
  },
  computed: {
    filteredProjects() {
      if (this.current === "complete") {
        return this.projects.filter((project) => project.complete);
      }
      if (this.current === "ongoing") {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects;
    },
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => (this.projects = data));
  },
};
</script>
