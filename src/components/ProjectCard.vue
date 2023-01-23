<script>
export default {
    name: "ProjectCard",
    data() {
        return {
            maxLenght: 100,
        }
    },
    props: {
        project: Object
    },
    computed: {
        descriptionLenght() {
            if (this.project.description && this.project.description.length > this.maxLenght) {
                return this.project.description.substring(0, this.maxLenght) + "...";
            }
            return this.project.description;
        }
    }
}
</script>

<template>
    <div class="card mt-4">
        <div class="card-body">
            <h5>{{ project.title }}</h5>
            <p class="card-text">{{ descriptionLenght }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>