<style>
.color-red {
  color: red;
}
.createnewjob-container h3 {
  margin-bottom: 1.3em;
}
.createnewjob-container .input-group--text-field {
  max-width: 500px;
}
.createnewjob-container .input-group--text-field .input-group__details {
  min-height: 10px;
}
.createnewjob-container .input-group--text-field > label {
  color: #999;
}
.createnewjob-container .input-group--text-field .input-group__details:before {
  background-color: #999;
}
.createnewjob-container .cust-radio-box .input-group.radio-group.radio-group--row,
.createnewjob-container .cust-radio-box .input-group__input {
  display: block;
}
.createnewjob-container .cust-radio-box .input-group__details
{
  min-height: 0;
  height: 10px;
}
.createnewjob-container .cust-radio-box > p {
  margin-bottom: 2px;
  color: #999;
}
.createnewjob-container .cust-radio-box > div {
  padding-top: 0;
}
.createnewjob-container .cust-radio-box .input-group.input-group--selection-controls.radio,
.createnewjob-container .multi-checkbox > div {
  padding-top: 4px;
  width: 120px;
  height: 34px;
  float: left;
  background-color: #f8f8f8;
  margin: 2px 2px;
  border-radius: 3px;
}
.createnewjob-container .cust-radio-box .input-group.input-group--selection-controls label,
.createnewjob-container .multi-checkbox .input-group.input-group--selection-controls label {
  max-width: 100%;
  /* width: 100%; */
  text-align: center;
  left: 0;
}
.createnewjob-container .cust-radio-box i,
.multi-checkbox > div i {
  display: none;
}
.multi-checkbox .input-group__details {
  display: none;
}
.createnewjob-container .cust-radio-box label:after,
.createnewjob-container .multi-checkbox label:after {
  content: '';
}
.createnewjob-container .cust-radio-box .input-group.radio.input-group--active label,
.createnewjob-container .multi-checkbox .input-group.checkbox.input-group--active label {
  color: #fff;
}
.createnewjob-container .cust-radio-box .input-group--active,
.createnewjob-container .multi-checkbox .input-group--active {
  background-color: #555 !important; /* #ef5350 */
}
@media (min-width: 600px) {
  .createnewjob-container .cust-radio-box,
  .createnewjob-container .multi-checkbox {
    margin-left: 15px;
  }
}
</style>
<template>
  <v-container fluid class="createnewjob-container">
    <div class="main-cont-large">
      <section>
        <h2>Create a job</h2>
        <br>
        <h3>Title and Address<span class="color-red">*</span></h3>
        <v-text-field
          v-model="name"
          label="Job Title"
          required
        ></v-text-field>
        <v-text-field
          v-model="address"
          label="Address"
          required
        ></v-text-field>

        <br>
        <h3>Catagories<span class="color-red">*</span></h3>
        <div class="cust-radio-box">
          <p>Select one:</p>
          <v-radio-group v-model="type" row color="red" required>
            <v-radio label="full time" value="fulltime"></v-radio>
            <v-radio label="part time" value="parttime"></v-radio>
            <v-radio label="internship" value="internship"></v-radio>
            <v-radio label="contract" value="contract"></v-radio>
            <v-radio label="other" value="other"></v-radio>
          </v-radio-group>
        </div>
        <div class="cust-radio-box">
          <p>Select one:</p>
          <v-radio-group v-model="studentfriendly" row color="red" required>
            <v-radio label="Student friendly" :value="true" style="min-width: 190px;" selected></v-radio>
            <v-radio label="Not student friendly" :value="false" style="min-width: 190px;"></v-radio>
          </v-radio-group>
        </div>

        <br>
        <h3>Shifts (optional)</h3>
        <div class="multi-checkbox">
          <v-checkbox label="morning" v-model="shift" value="morning"></v-checkbox>
          <v-checkbox label="noon" v-model="shift" value="noon"></v-checkbox>
          <v-checkbox label="afternoon" v-model="shift" value="afternoon"></v-checkbox>
          <v-checkbox label="evening" v-model="shift" value="evening"></v-checkbox>
          <v-checkbox label="night" v-model="shift" value="night"></v-checkbox>
        </div>
        <!--<v-radio-group v-model="shift" row>

            <v-radio label="morning" value="morning"></v-radio>
            <v-radio label="noon" value="noon"></v-radio>
            <v-radio label="afternoon" value="afternoon"></v-radio>
            <v-radio label="evening" value="evening" ></v-radio>
            <v-radio label="night" value="night"></v-radio>
        </v-radio-group>-->


       <!--<v-text-field
          v-model="age"
          label="Age"
        ></v-text-field>

        <v-text-field
          v-model="salary"
          label="Salary"
        ></v-text-field>

        <v-radio-group v-model="education" row>
            <v-radio label="Associate" value="Associate" ></v-radio>
            <v-radio label="Bachelor" value="Bachelor"></v-radio>
            <v-radio label="Master" value="Master"></v-radio>
            <v-radio label="None" value="None" ></v-radio>
        </v-radio-group>-->


        <!--<v-text-field
          v-model="overview"
          label="Overview"
        ></v-text-field>-->

        <v-text-field
          v-model="description"
          label="Job description"
          required
        ></v-text-field>

        <v-text-field
          v-model="responsibilities"
          label="Responsibilities"
        ></v-text-field>

        <v-text-field
          v-model="experience"
          label="Experience/Qualifications"
        ></v-text-field>

        <!--<v-text-field
          v-model="qualifications"
          label="Qualifications"
        ></v-text-field>-->

        <v-text-field
          name="language"
          v-model="language"
          label="language"
          value="English"
          single-line
        ></v-text-field>

        <v-text-field
          v-model="notes"
          label="Notes"
        ></v-text-field>

        <v-btn @click="save">Save</v-btn>
        <p>{{ message }}</p>
      </section>
    </div>
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
        experience
        notes
      }
    }
  }
`;

export default {
  data() {
    return {
      studentfriendly: true,
      language: 'English',
      shift: [],
    };
  },
  methods: {
    save() {
      const job = {
        user_name: 'test',
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
        experience: this.experience,
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
