<template>
  <v-container fluid>
    <h2>Create a job</h2>

    <v-text-field
      v-model="name"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="description"
      label="Description"
      required
    ></v-text-field>
    <v-text-field
      v-model="address"
      label="Address"
      required
    ></v-text-field>

    <section>
        <input type="radio" model="type" value="fulltime" /> Full Time
        <input type="radio" model="type" value="parttime" /> Part Time
        <input type="radio" model="type" value="other" /> Other
    </section>
    <br />

    <section>
        <input type="radio" model="category" value="business" /> Business
        <input type="radio" model="category" value="individual" /> Individual
        <input type="radio" model="category" value="club" /> Club
    </section>
    <br />

    <section>
        <input type="radio" model="shift" value="morning" /> Morning
        <input type="radio" model="shift" value="afternoon" /> Afternoon
        <input type="radio" model="shift" value="night" /> Night
    </section>
    <br />

    <v-text-field
      v-model="age"
      label="Age"
    ></v-text-field>

    <v-text-field
      v-model="salary"
      label="Salary"
    ></v-text-field>

    <section>
        <input type="radio" model="education" value="Associate" /> Associate
        <input type="radio" model="education" value="Bachelor" /> Bachelor
        <input type="radio" model="education" value="Master" /> Master
        <input type="radio" model="education" value="None" /> None
    </section>
    <br />

    <section>
        <input type="radio" model="language" value="English" /> English
        <input type="radio" model="language" value="Other" /> Other
    </section>
    <br />

    <v-text-field
      v-model="overview"
      label="Overview"
    ></v-text-field>

    <v-text-field
      v-model="responsibilities"
      label="Responsibilities"
    ></v-text-field>

    <v-text-field
      v-model="experience"
      label="Experience"
    ></v-text-field>

    <v-text-field
      v-model="qualifications"
      label="Qualifications"
    ></v-text-field>

    <v-text-field
      v-model="notes"
      label="Notes"
    ></v-text-field>

    <v-btn @click="save">Save</v-btn>
    <p>{{ message }}</p>
  </v-container>
</template>
<script>
import gql from 'graphql-tag';

const createJobMutation = gql`
  mutation ($job: CreateOneJobInput!) {
    createJob (record: $job) {
      recordId
      record {
        name
        description
        address
        type
        category
        shift
        age
        salary
        education
        language
        overview
        experience
        qualifications
        notes
      }
    }
  }
`;

export default {
  data() {
    return {
    };
  },
  methods: {
    save() {
      const job = {
        name: this.name,
        description: this.description,
        address: this.address,
        type: this.type,
        category: this.category,
        shift: this.shift,
        age: this.age,
        salary: this.salary,
        education: this.education,
        language: this.language,
        overview: this.overview,
        experience: this.experience,
        qualifications: this.qualifications,
        notes: this.notes,
      };
      this.$apollo.mutate({
        mutation: createJobMutation,
        variables: {
          job,
        },
      });
    },
  },
};
</script>
