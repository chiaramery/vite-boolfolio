<script>
import axios from 'axios';
export default {
    name: 'AppMain',
    data() {
        return {
            url: "http://127.0.0.1:8000",
            projects: [],
            maxLenght: 50,
            loading: false,
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(`${this.url}/api/projects`).then(resp => {
                // console.log(resp);
                this.projects = resp.data.results;
                this.loading = false;
            });
        },
    },
}
</script>
<template>
    <div class="container">
        <h2 class="text-center">All projects</h2>
        <div class="row justify-content-center">
            <div class="col-8">
                <!-- Card -->
                <div class="card mb-4" v-for="project in projects" :key="project.id">
                    <div class="card-body">
                        <h4 class="card-title">{{ project.title }}</h4>
                        <p class="text-end text-success"> {{
                            project.title.type ? project.type.title : "Nessuna tipologia"
                        }}</p>
                        <p class="card-text"> {{ (project.description) }}</p>
                        <a class="btn btn-primary" href="">Per saperne di più</a>
                    </div>
                </div>
                <!-- /Card -->
            </div>
        </div>
    </div>
</template>