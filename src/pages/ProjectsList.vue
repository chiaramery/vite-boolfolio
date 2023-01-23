<script>
import axios from "axios";
import { store } from "../store";
import ProjectCard from "../components/ProjectCard.vue";
export default {
    name: "ProjectsList",
    components: { ProjectCard },
    data() {
        return {
            store,
            loading: false,
            projects: [],
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(`${this.store.apiUrl}/api/projects`).then(resp => {
                this.projects = resp.data.results;
                this.loading = false;
            })
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h1 class="text-center">I miei progetti</h1>
            <div v-if="loading" class="text-center mt-4">
                LOADING..
            </div>
            <div v-else>
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5">
                    <div class="col mb-2" v-for="project in projects" :key="project.id">
                        <ProjectCard :project="project" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>