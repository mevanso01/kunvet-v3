<style>
.color-red {
  color: red;
}
.createnewjob-container .ql-editor {
    min-height: 120px;
}
/* .quillWrapper {
  clear: both;
  padding-top: 15px;
} */
.ql-snow.ql-toolbar button, .ql-snow .ql-toolbar button {
  margin-bottom: 0;
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
.createnewjob-container .multi-checkbox .input-group.input-group--selection-controls {
  padding-top: 4px;
  max-width: 120px;
  height: 34px;
  float: left;
  background-color: #f8f8f8;
  margin: 2px 2px;
  border-radius: 3px;
  display: block !important;
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
.createnewjob-container .multi-checkbox {
  width: auto;
  min-height: 38px;
}
.createnewjob-container .cust-radio-box .input-group--active,
.createnewjob-container .multi-checkbox .input-group--active {
  background-color: #555 !important; /* #ef5350 */
}
.requirements .flex {
  padding-top: 0;
  padding-bottom: 0;
}
/* @media (min-width: 600px) {
  .createnewjob-container .cust-radio-box,
  .createnewjob-container .multi-checkbox {
    margin-left: 15px;
  }
} */
@media (max-width: 960px) {
  .requirements .flex {
    padding: 0 15px;
  }
}
@media (max-width: 700px) {
  /* doing this is really bad practice, but I'm not sure how to avoid it */
  .createnewjob-container .multi-checkbox {
    min-height: 76px;
  }
}
@media (max-width: 435px) {
  .createnewjob-container .multi-checkbox {
    min-height: 114px;
  }
}
</style>
<template>
  <v-container fluid class="createnewjob-container">
    <div class="main-cont-large">
      <section class="no-padding-xs">
        <h2>Create a job</h2>
        <br>

        <h3>Title and Address<span class="color-red">*</span></h3>
        <v-text-field
          v-model="name"
          label="Job Title"
          required
        ></v-text-field>
        <v-layout row wrap>
          <v-flex xs12 sm4 class="padding-15px-right">
            <v-text-field
              v-model="address"
              label="Address"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm4 class="padding-15px-right">
            <v-text-field
              v-model="city_and_state"
              label="City, State"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs8 sm2 class="no-padding">
            <v-text-field
              v-model="zip"
              label="Zip"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>

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
        <h3>Salary<span class="color-red">*</span></h3>
        <v-layout row wrap>
          <v-flex xs12 sm12 md6 class="no-padding">
            <div class="cust-radio-box">
              <p>Select one:</p>
              <v-radio-group v-model="salary_select" row color="red" required>
                <v-radio label="Paid" value=""></v-radio>
                <v-radio label="Unpaid" value="unpaid"></v-radio>
                <v-radio label="Negotiable" value="negotiable"></v-radio>
              </v-radio-group>
            </div>
          </v-flex>
          <v-flex v-if="salary_select == ''" xs6 sm3 md2 class="no-padding">
            <v-text-field
            v-model="salary"
            style="margin-top: 5px;"
            prefix="$"
            required
            :rules="[() => !!(salary/1) || 'Required, must be a number']"
            single-line
            ></v-text-field>
          </v-flex>
          <v-flex v-if="salary_select == ''" xs6 sm3 md2 class="no-padding" style="padding-left: 15px !important;">
            <v-select
              value="per hour"
              :items="[ 'per hour', 'per month', 'annually' ]"
              style="margin-top: 5px;">
            </v-select>
          </v-flex>
        </v-layout>

        <br>
        <h3>Shifts (optional)</h3>

        <div class="multi-checkbox">
            <v-checkbox label="morning" v-model="shift" value="morning"></v-checkbox>
            <v-checkbox label="noon" v-model="shift" value="noon"></v-checkbox>
            <v-checkbox label="afternoon" v-model="shift" value="afternoon"></v-checkbox>
            <v-checkbox label="evening" v-model="shift" value="evening"></v-checkbox>
            <v-checkbox label="night" v-model="shift" value="night"></v-checkbox>
        </div>

        <br>
        <h3>Requirements (optional)</h3>
        <v-layout class="requirements" row wrap>
          <v-flex xs12 sm6 md5>
            <v-select
              v-model="education"
              label="Education"
              v-bind:items="educationOptions">
            </v-select>
          </v-flex>
          <v-flex xs12 sm6 md5>
            <v-text-field
              name="preferred-degree"
              v-model="degree"
              label="Preferred degree"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md5>
            <v-text-field
              name="language"
              v-model="language"
              label="Language"
            ></v-text-field>
          </v-flex>
          <v-flex xs4 sm2>
            <v-text-field
            v-model="age"
            label="Age"
            :rules="[() => !!(age/1) || 'Must be a number']">
          </v-text-field>
          </v-flex>
        </v-layout>

        <br>
        <h3>Description</h3>
        <vue-editor id="description" v-model="description" :editorToolbar="customEditorToolbar"></vue-editor>

        <br>
        <h3>Responsibilities</h3>
        <vue-editor id="responsibilities" v-model="responsibilities" :editorToolbar="customEditorToolbar"></vue-editor>

        <br>
        <h3>Experience/Qualifications</h3>
        <vue-editor id="experience" v-model="experience" :editorToolbar="customEditorToolbar"></vue-editor>

        <!--<v-text-field
          v-model="notes"
          label="Notes"
        ></v-text-field>-->

        <br>
        <v-layout>
          <v-btn @click="save">Save</v-btn>
          <v-btn @click="saveAndPost">Save and Post</v-btn>
        </v-layout>
        <!--<p>{{ message }}</p>-->
      </section>
    </div>
  </v-container>
</template>
<script>
import { VueEditor } from 'vue2-editor';
import gql from 'graphql-tag';
import Store from '../store';

const State = Store.state;

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
        responsibilities
        notes
      }
    }
  }
`;

export default {
  components: {
    VueEditor,
  },
  created() {
    this.checkUserInfo();
  },

  data() {
    return {
      name: '',
      description: '',
      address: '',
      city_and_state: '',
      zip: '',
      type: '',
      category: '',
      shift: [],
      age: '',
      salary: '',
      education: '',
      responsibilities: '',
      experience: '',
      notes: '',
      studentfriendly: true,
      language: '',
      degree: '',

      educationOptions: [
        'None (recommended)',
        'High School', 'Bachelor Degree',
        'Masters Degree', 'Doctorate/PHD',
      ],
      salary_select: '',

      customEditorToolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        // ['blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscriptn
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': [] }],
        ['clean'],
      ],
    };
  },

  methods: {
    save() {

    },
    saveAndPost() {
      const job = this.createJobArray();
      this.$apollo.mutate({
        mutation: createJobMutation,
        variables: {
          job,
        },
      });
    },
    createJobArray() {
      const job = {
        user_name: State.userdata.username,
        name: this.name,
        description: this.description,
        address: `${this.address} ${this.city_and_state} ${this.zip}`,
        type: this.type,
        category: this.category,
        shift: this.shift,
        age: this.age,
        salary: this.salary_select || this.salary,
        education: this.education,
        language: this.language,
        experience: this.experience,
        responsibilities: this.responsibilities,
        notes: this.notes,
      };
      return job;
    },
    checkUserInfo() {
      if (!State.loggedin) {
        alert('not logged in');
      }
    },
  },
};
</script>
