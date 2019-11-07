<style lang="scss">
  @import "../css/CreateJobStyles";
</style>

<template>
  <v-container fluid class="create-job-container" v-show="!pageloading">
    <div v-if="pageloading" style="margin-top: 48px;">
      <v-progress-circular indeterminate class="ma-3" size="30" color="red darken-1"
      style="display: block; margin: auto !important;"></v-progress-circular>
    </div>
    <div v-show="!pageloading">
      <div class="cust-tab-wrapper"></div>
      <v-tabs
        slot="extension"
        v-model="tab"
        grow
        fixed-tabs
      >
        <!-- <v-tabs-slider color="grey"></v-tabs-slider> -->
        <template v-if="tab !== 'success-tab'">
          <v-tab v-for="(item, i) in tabItems" :href="`#${i}`" :key="`${i}`"
                 :disabled="i > furthest_tab" >
            <div class="tab-text-container" style="width: 100%; height: 100%;"
              :class="{ 'tab-no-error': isTabValid(i), 'tab-error': isTabInvalid(i) }">
              <span style="line-height: 36px;">{{ item }}</span>
            </div>
          </v-tab>
        </template>

        <v-tabs-items v-model="tab">
          <v-tab-item id="0">
            <!-- SECTION 1 -->
            <div class="main-cont-large">
              <div class="cust-spacer"></div>

              <v-form v-model="form1Valid" ref="form1">
                <template v-if="!uid">
                  <p class="mb-0">
                    First, we need some basic information about who's posting.<br>
                    You will receive your applicants' information through email, unless you opt out of this feature at the end of this form.<br>
                  </p>
                  <v-layout row wrap>
                    <div v-if="!chosenAccountType">
                      <AccountTypeSelection
                        :forbiddenTypes="['student']"
                        @select="selectAccountType"
                      />
                    </div>
                    <div v-else>
                      <SignupComponent
                        dontValidate
                        :type="chosenAccountType"
                        @success="onSignup"
                        @select="selectAccountType"
                      />
                    </div>
                  </v-layout>
                </template>

                <template v-else>
                  <p class="mb-2">Welcome back {{ userdata.firstname }} {{ userdata.lastname }}</p>
                  <h3 class="mt-0 mb-4">Posting as: {{ job.posted_by }}</h3>
                </template>
              </v-form>

              <v-layout row wrap style="margin-top: 8px; margin-bottom: 16px;">
                <v-flex xs12 style="text-align: center;" v-show="uid">
                  <v-btn class="kunvet-red-bg" :disabled="loading" @click="next(1)">Continue</v-btn>
                  <p v-if="loading">
                    <span style="padding: 0 4px;">
                      <v-progress-circular indeterminate :size="16" :width="2" color="grey darken-1"></v-progress-circular>
                    </span>
                    Loading.
                  </p>
                </v-flex>
                <v-flex v-if="form1Error" xs12>
                  <v-alert
                   :value="true"
                   color="error"
                   icon="warning"
                   outline
                 >
                   <span v-if="form1Error==='UserExists'">
                     Error: A user with this email already exists. Would you like to <router-link class="underline" to="/login">login</router-link>?
                   </span>
                   <span v-else-if="form1Error==='LoginFailure'">
                     Error: Your account has been registered, but somehow we could not log you in. This could be due to network issues.
                     Please try to <router-link class="underline" to="/login">login</router-link> again.
                   </span>
                   <span v-else>
                     An error occured: {{ form1Error }}
                   </span>
                 </v-alert>
                </v-flex>
              </v-layout>
              <!-- <p class="mb-1">This is here only for testing</p>
              <a @click="tab = 'verify-email'">Test verify</a>
              <a @click="tab = 'success-tab'">Test success</a> -->
            </div>
          </v-tab-item>
          <v-tab-item id="1">
            <!-- SECTION 2 -->
            <div class="main-cont-large">
              <div class="cust-spacer"></div>
              <v-form v-model="form2Valid" ref="form2">
                <h4 class="cust-subheader">Basic info</h4>
                <v-layout row wrap>
                  <v-flex xs12 sm9 md6 class="no-padding">
                    <v-text-field
                      v-model="job.title"
                      label="Job Title"
                      :rules="[(title) => !!(title) || 'Required']"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="job.address"
                      ref="addressField"
                      label="Address"
                      required
                      @change="setLatLongs"
                      :rules="[() => !!(job.address) || 'Required',
                               () => (!!(job.latitude) && !!(job.longitude)) || 'Invalid address. Please select a complete address from the dropdown']"
                    ></v-text-field>
                    <v-text-field
                      class="optional"
                      v-model="job.address2"
                      ref="addressField2"
                      label="Address Line 2"
                      placeholder="Apt, Suite, Bldg."
                      hide-details
                    ></v-text-field>
                    <div v-if="job.address">
                      <v-checkbox class="optional" style="margin-top: 16px;"
                        label="Is this job on a school campus?"
                        v-model="isUniversity"
                        hide-details
                      ></v-checkbox>
                      <v-autocomplete
                        v-if="isUniversity"
                        label="Which one?"
                        v-model="job.university"
                        v-bind:items="availableSchools"
                      ></v-autocomplete>
                    </div>
                  </v-flex>
                </v-layout>

                <!-- Categories -->
                <h4 class="cust-subheader">Categories</h4>
                <p>Is this a full-time or part-time job?</p>
                <v-radio-group v-model="job.type"
                  class="no-padding"
                  :rules="[(v) => !!(v) || 'Required']"
                  required>
                  <v-radio label="Full time" value="fulltime" class="pt-0"></v-radio>
                  <v-radio label="Part time" value="parttime" class="pt-0"></v-radio>
                  <v-radio label="Both" value="both" class="pt-0"></v-radio>
                </v-radio-group>

                <p>Is it also an internship or contract position? (Optional)</p>
                <v-checkbox label="internship" v-model="job.type2" value="internship"
                  hide-details class="pt-0"></v-checkbox>
                <v-checkbox
                  label="contract" v-model="job.type2" value="contract"
                  hide-details class="pt-0 mt-1 mb-3"></v-checkbox>

                <p>Is this job student friendly?</p>
                <!-- the cust-radio-box class makes the radio input wrap on small screens -->
                <div class="cust-radio-box">
                  <v-radio-group v-model="job.studentfriendly" row required hide-details class="mt-0">
                      <v-radio label="Student friendly" :value="true" style="max-width: 160px;" selected></v-radio>
                      <v-radio label="Not student friendly" :value="false" style="max-width: 180px;"></v-radio>
                  </v-radio-group>
                </div>

                <!-- Salary -->
                <br>
                <h4 class="cust-subheader">Salary</h4>
                <v-layout row wrap>
                  <v-flex xs12 class="no-padding">
                    <div class="cust-radio-box">
                      <v-radio-group class="mt-0"
                      v-model="salary_select"
                      row
                      :rules="requiredRules"
                      :hide-details="salary_select === 'paid'"
                      required>
                        <v-radio style="max-width: 90px;" label="Paid" value="paid"></v-radio>
                        <v-radio style="max-width: 110px;" label="Unpaid" value="unpaid"></v-radio>
                        <v-radio label="Negotiable" value="negotiable"></v-radio>
                      </v-radio-group>
                    </div>
                  </v-flex>
                  <v-flex xs6 sm3 md2 v-if="salary_select === 'paid'">
                    <v-text-field class="pa-0 ma-0"
                      v-model="job.salary"
                      :disabled = "salary_select !== 'paid'"
                      prefix="$"
                      required
                      :rules="[(salary) => _isNumber(salary) || salary_select !== 'paid' || 'Required, must be a number']"
                      single-line
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6 sm3 md2 style="padding-left: 15px !important;" v-if="salary_select === 'paid'">
                    <v-select class="pa-0 ma-0" style="max-width: 125px;"
                      v-model="job.pay_denomination"
                      :disabled = "salary_select != 'paid'"
                      :items="[ 'per hour', 'per week', 'per month', 'per quarter', 'per year', 'per task' ]"
                      >
                    </v-select>
                  </v-flex>
                </v-layout>

                <!-- Working hours -->
                <h4 class="cust-subheader">Working Hours <span class="optional-color">(Optional)</span></h4>
                <div class="mb-3">
                    <v-checkbox label="flexible" v-model="job.shift" value="flexible" hide-details class="pt-0 mt-1"></v-checkbox>
                    <v-divider style="margin-bottom: 6px; margin-top: 3px; max-width: 230px;"></v-divider>
                    <v-checkbox label="morning" v-model="job.shift" value="morning" hide-details class="pt-0 mt-1"></v-checkbox>
                    <v-checkbox label="noon" v-model="job.shift" value="noon" hide-details class="pt-0 mt-1"></v-checkbox>
                    <v-checkbox label="afternoon" v-model="job.shift" value="afternoon" hide-details class="pt-0 mt-1"></v-checkbox>
                    <v-checkbox label="evening" v-model="job.shift" value="evening" hide-details class="pt-0 mt-1"></v-checkbox>
                    <v-checkbox label="night" v-model="job.shift" value="night" hide-details class="pt-0 mt-1"></v-checkbox>
                </div>

                <!-- Additional requirements -->
                <h4 class="cust-subheader">Additional requirements <span class="optional-color">(Optional)</span></h4>
                <v-layout class="additional-requirements" row wrap>
                  <v-flex xs12 sm6 md5>
                    <v-select class="optional"
                      v-model="job.education"
                      label="Education"
                      v-bind:items="educationOptions">
                    </v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md5>
                    <v-text-field class="optional"
                      name="preferred-major"
                      v-model="job.major"
                      label="Preferred major"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md5>
                    <v-autocomplete class="optional"
                      v-model="job.language"
                      label="Language"
                      v-bind:items="languages"
                      attach
                      dense>
                    </v-autocomplete>
                  </v-flex>
                  <v-flex xs4 sm3 lg2>
                    <v-text-field class="optional"
                      v-model="job.age"
                      label="Age"
                      :rules="[(age) => !(age) || _isNumber(age) || 'Must be a number']">
                    </v-text-field>
                  </v-flex>
                </v-layout>

                <!-- Long text fields -->
                <QuillEditor v-model="job.description" @blur="updateJob" title="Description" id="editor1" required></QuillEditor>

                <QuillEditor v-model="job.experience" @blur="updateJob" title="Required Experience" id="editor2" required
                  placeholder="900 characters maximum" :charLimit="900"></QuillEditor>

                <QuillEditor v-model="job.responsibilities" @blur="updateJob" title="Responsibilities" id="editor3" required
                  placeholder="900 characters maximum" :charLimit="900"></QuillEditor>

                <!-- Pictures -->
                <br>
                <h4 class="cust-subheader" :class="{ 'mb-1': job.images.length === 0 }">Pictures <span class="optional-color">(Optional)</span></h4>
                <p v-show="job.images.length === 0">
                  Although not required, adding relevant pictures to your job builds trust and can attract more attention from potential applicants
                </p>
                <v-btn v-if="job.images.length === 0"
                  @click="picUploaderDialog = true"
                  flat small outline
                  style="margin: 0;"
                  class="optional">
                  Upload a picture
                </v-btn>
                <v-btn v-else
                  @click="picUploaderDialog = true"
                  style="margin: 0;"
                  flat small outline class="optional">
                  Upload Another
                </v-btn>

                <v-dialog v-model="picUploaderDialog">
                  <PicUploader @uploaded="picUploaded" @cancel="picUploaderDialog = false" keepOriginal />
                </v-dialog>

                <v-container fluid grid-list-sm style="margin-top: 8px;">
                  <v-layout row wrap>
                    <v-flex xs4 md3 class="image-container" v-for="(image, i) in job.images" :key="`image-${i}`">
                      <v-btn icon small ripple class="delete-img-btn" @click="showDeletePictureModal(image.cropped)">
                        <v-icon>cancel</v-icon>
                      </v-btn>
                      <img class="image" :src="`${serverUrl}/file/get/${image.cropped}`" alt="loading image" width="100%">
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>

              <v-layout row wrap style="margin-top: 8px; margin-bottom: 16px;">
                <v-flex xs12 style="text-align: center;">
                  <v-btn flat class="prev-btn" @click="_moveToPrevTab">Previous Step</v-btn>
                  <v-btn dark class="kunvet-red-bg" @click="next(2)">Save and Continue</v-btn>
                </v-flex>
              </v-layout>

            </div>
          </v-tab-item>
          <v-tab-item id="2">
            <!-- SECTION 3 -->
            <div class="main-cont-large no-padding">
              <div class="cust-spacer"></div>
              <v-layout row wrap class="mb-3">
                <v-flex xs12 sm9 md6 style="background-color: #fafafa; padding: 10px 16px 16px 16px;">
                  <p class="mb-2">Here's what you've entered so far:</p>

                  <p class="mb-1"><strong>Section 1:</strong></p>
                  <p class="small-p">Posted by: {{ job.posted_by }}</p>
                  <p class="small-p">Title: {{ job.title }}</p>
                  <p class="small-p">Address: {{ job.address }} {{ job.address2 }}</p>

                  <p class="mt-3 mb-1"><strong>Section 2:</strong></p>
                  <p class="small-p">Categories: {{ selectedCategories }}</p>
                  <p class="small-p" v-if="job.shift && job.shift.length > 0">Shifts: {{ selectedShifts }}</p>
                  <p class="small-p">Salary:
                    <span v-if="salary_select === 'paid'">${{ job.salary }} {{ job.pay_denomination }}</span>
                    <span v-else>{{ salary_select }}</span>
                  </p>
                  <p class="small-p" v-if="job.education">Education level: {{ job.education }}</p>
                  <p class="small-p" v-if="job.major">Preferred major: {{ job.major }}</p>
                  <p class="small-p" v-if="job.language">Additional language: {{ selectedLanguage }}</p>
                  <p class="small-p" v-if="job.age">Age: {{ job.age }}</p>

                  <p class="mt-3 mb-0"><strong>Job description, required experience, responisibilities</strong></p>
                  <a @click="tab='review-tab'" style="color: #616161 !important;">
                    <i class="material-icons" style="font-size: 21px; vertical-align: bottom;">arrow_right_alt</i>
                    Click here to review
                  </a>
                </v-flex>
              </v-layout>
            </div>
            <div class="main-cont-large">
              <v-form v-model="form3Valid" ref="form3">
                <br>
                <h4 class="cust-subheader mb-1">Position tags</h4>
                <p class="mb-0" :class="{ 'error--text': (submit3Pressed && job.position_tags.length === 0) }">Please select at least one category that is relevant to this job</p>
                <v-layout row wrap>
                  <v-flex xs12 sm9 md6 class="no-padding">
                    <v-autocomplete class="mt-0"
                      :items="availablePositions"
                      v-model="job.position_tags"
                      multiple
                      attach
                      required
                      placeholder="Select one or more..."
                      :rules="[(v) => !submit3Pressed || (v && v.length > 0) || 'required']"
                      >
                    </v-autocomplete>
                  </v-flex>
                </v-layout>
                <br>
                <h4 class="cust-subheader mb-1">Application options</h4>
                <p class="mb-2">
                  By default, the applicant's info and resume will be sent to your email when they apply.<br>
                  <span style="color: #333; font-weight: 500;">Note:</span> You can also browse through all your applicants in the applicants page.
                </p>
                <v-radio-group class="mt-0" v-model="useGForm" hide-details>
                  <v-radio label="Send resumes to my email" :value="false"></v-radio>
                  <v-radio label="Use a form that doesn't require signup instead" :value="true" class="mb-0 use-a-form-option"></v-radio>
                </v-radio-group>
                <!-- <p class="mb-1">If you would like to use an online form that doesn't require sign-up instead, check the box below.</p>
                <v-checkbox
                  class="optional online-form-checkbox mt-0"
                  label="Don't send resumes to my email, I have an online form "
                  v-model="useGForm"
                  hide-details
                ></v-checkbox> -->
                <div v-if="useGForm">
                  <v-text-field style="max-width: 500px;"
                    v-model="gformLink"
                    label="My form url"
                    placeholder="Paste your form url here"
                    required
                    :rules="[(v) => !useGForm || !!v || 'Required']">
                  ></v-text-field>
                </div>
                <div>
                  <p style="margin-top: 16px; margin-bottom: 0;">Do you have any special instuctions for applicants? (Optional)</p>
                  <v-textarea
                    v-model="notes"
                    style="padding: 0 2px; max-width: 500px;"
                    class="optional mt-0"
                    placeholder="e.g. Please walk-in from 11 - 2pm for interviews"
                    hide-details
                    rows=1
                  ></v-textarea>
                </div>
              </v-form>

              <div style="width: 100%; margin-top: 16px;">
                <p class="center red-text mb-0" v-show="!form1Valid">Section 1 is not valid. <a @click="tab = '0'">Go back</a></p>
                <p class="center red-text mb-0" v-show="!form2Valid">Section 2 is not valid. <a @click="tab = '1'">Go back</a></p>
              </div>

              <v-layout row wrap style="margin-top: 8px; margin-bottom: 16px;">
                <!-- <v-flex xs12 style="text-align: center;">
                  <p v-show="true || isFirstJob" class="mb-0 mt-2">Posting your first job on Kunvet is free. The second job and onwards costs only $4.99 per job.</p>
                </v-flex> -->
                <v-flex xs12 style="text-align: center;">
                  <v-btn flat class="prev-btn" @click="_moveToPrevTab">Previous Step</v-btn>
                  <v-btn class="kunvet-red-bg" :disabled="!(form1Valid && form2Valid) || loading" @click="submitLastForm">
                    <span v-if="!job.active">Post my job</span>
                    <span v-else>Save Job</span>
                  </v-btn>
                  <p id="bottom-error-message" style="opacity: 0; color: red;" class="mt-2 center">Please select at least one position tag</p>
                </v-flex>
                <p v-if="loading">
                  <span style="padding: 0 4px;">
                    <v-progress-circular indeterminate :size="16" :width="2" color="grey darken-1"></v-progress-circular>
                  </span>
                  Loading...
                </p>
              </v-layout>
              <v-flex v-if="form3Error" xs12>
                <v-alert
                 :value="true"
                 color="error"
                 icon="warning"
                 outline>
                  <span>
                    Error: {{ form3Error }}
                  </span>
                </v-alert>
              </v-flex>
            </div>
          </v-tab-item>

          <v-tab-item id="billing">
            <div class="main-cont-large" style="margin-bottom: 16px; margin-top: 50px;">
              <Billing
                ref="billing"
                @success="tab = 'success-tab'"
              />
            </div>
          </v-tab-item>

          <v-tab-item id="review-tab">
            <div class="main-cont-large" style="margin-bottom: 16px;">
              <div class="cust-spacer"></div>
              <div class="preview-top" style="display: flex;">
                <v-btn outline @click="tab = '2'">Go back</v-btn>
                <h3>
                  This is a preview<span> of what the long text portion of your job will look like</span>
                </h3>
              </div>
            </div>
            <div class="main-cont-large job-detail-container">
              <div class="sub-container">
                <h2 style="margin-bottom: 8px;">Job Overview:</h2>
                <div class="long-text-cont" v-html="job.description"></div>

                <h2 style="margin-bottom: 8px;">Experience & Requirements:</h2>
                <div class="long-text-cont" v-html="job.experience"></div>

                <h2 style="margin-bottom: 8px;">Responsibilities:</h2>
                <div class="long-text-cont" v-html="job.responsibilities"></div>
              </div>
            </div>
          </v-tab-item>

          <v-tab-item id="verify-email">
            <div class="main-cont-large">
              <div class="cust-spacer"></div>
              <br>
              <CodeVerification ref="codever" @verified="codeValidated" />
              <div style="text-align: center;">
                <v-btn class="kunvet-red-bg" v-if="email_verified" @click="moveToBilling">Continue</v-btn>
              </div>
            </div>
          </v-tab-item>
          <v-tab-item id="success-tab">
            <div class="main-cont-large" style="max-width: 620px;">
              <div class="cust-spacer"></div>
              <h4 class="cust-subheader mb-2">Success! Your job is now posted!</h4>
              <p>
                <span v-show="postingAs === 'business' && !bdata.profile_pic">
                  <span style="color: #333; font-weight: 500;">What next?</span> To make your listings look even better, we suggest you head over to your account and set a logo for your company.<br>
                </span>
                Click the button below to view your job. If you need to make edits, you can do so in the Jobs tab.
              </p>

              <v-layout row wrap>
                <v-flex xs12 class="no-padding">
                  <v-btn class="ml-0 kunvet-red-bg" dark :href="`/jobs/detail/${jobId}`">View your job</v-btn>
                  <v-btn v-show="postingAs === 'business' && !bdata.profile_pic" class="kunvet-red-bg" dark href="/myorg">Go to your account</v-btn>
                </v-flex>
              </v-layout>
            </div>
          </v-tab-item>
        </v-tabs-items>

      </v-tabs>

      <v-dialog v-model="dialogs.errorOccured">
        <v-card>
          <v-card-title>
            Oh no, an error occured
          </v-card-title>
          <v-card-text>
            Please refresh or try again later<br>
            If you need any support, <a style="text-decoration: underline;" href="/contact" target="_blank">click here</a> for help!<br>
            We are more than willing to assist you!
          </v-card-text>
          <v-card-actions>
            <v-btn flat="flat" @click.native="dialogs.errorOccured = false;">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogs.welcome" width="480" content-class="custom-width">
        <v-card>
          <v-card-text style="padding-bottom: 24px;">
            <img :src="welcomeImg" style="display: block; margin: auto; max-height: 42px; max-width: 100%;" alt="welcome"/>
            <p class="center mb-0 mt-3">How it works:</p>
            <table class="welcome-table">
              <tr>
                <td class="image-td">
                  <img :src="svgs.pencil" alt=""/>
                </td>
                <td>
                  <p style="font-size: 16px; color: #333; margin-bottom: 0;">Fill out job description</p>
                  <p style="font-size: 11px; color: #666; margin-bottom: 0;">Our fields help students find jobs relevant to them more easily</p>
                </td>
              </tr>
              <tr>
                <td>
                  <img :src="svgs.paper" alt=""/>
                </td>
                <td>
                  <p style="font-size: 16px; color: #333; margin-bottom: 0; line-height: 20px;">Choose how you want students to apply</p>
                  <p style="font-size: 11px; color: #666; margin-bottom: 0;">By default, you can view your applicants in your email and on this site</p>
                </td>
              </tr>
              <tr>
                <td>
                  <img :src="svgs.paperAirplane" alt=""/>
                </td>
                <td>
                  <p style="font-size: 16px; color: #333; margin-bottom: 0;">Post your first job for free! (No payment required)</p>
                  <p style="font-size: 11px; color: #666; margin-bottom: 0;">The second job and onwards costs only $4.99 per job</p>
                </td>
              </tr>
            </table>
          </v-card-text>
          <div class="general-submit small" @click="dialogs.welcome = false;">
            <div class="general-submit-default" >
              <span style="font-size: 18px; font-weight: 400;">Okay, lets get started</span>
            </div>
          </div>
        </v-card>
      </v-dialog>


      <v-dialog class="no-border-radius" v-model="dialogs.confirmPost">
        <v-card flat class="no-border-radius" style="max-width: 350px;">
          <v-card-title>
            <div class="headline">All seems good, you can now post your job!</div>
            <br>
            <p>(You can still edit certain parts of your job even when it's active)</p>
          </v-card-title>
          <div class="bottom-dialog-button" @click="postJob">
            Save and Post
            <v-progress-circular indeterminate v-if="loading" class="ma-3" size="30" color="primary"></v-progress-circular>
          </div>
        </v-card>
      </v-dialog>

      <v-dialog class="no-border-radius" v-model="dialogs.changeEmail">
        <v-card flat class="no-border-radius" style="max-width: 350px;">
          <v-card-title>
            <div class="headline" style="margin-bottom: 16px !important;">Enter a new email</div>
            <div style="width: 100%;">
              <v-text-field
                label="Email"
                type="email"
                :rules="[
                  v => !!v || 'Email is required',
                  v => /^\w+([-.]?\w+)*@\w+([-.]?\w+)*(\.\w+)+$/.test(v) || 'Invalid email format'
                ]"
                v-model="newEmail">
              </v-text-field>
            </div>
            <p v-if="loading">
              <span style="padding: 0 4px;">
                <v-progress-circular indeterminate :size="16" :width="2" color="grey darken-1"></v-progress-circular>
              </span>
              Loading...
            </p>
          </v-card-title>
          <v-card-actions>
            <v-btn :disabled="loading" @click="dialogs.changeEmail = false;" flat>Cancel</v-btn>
            <v-btn :disabled="disableChangeEmail || loading" @click="changeEmail" flat>Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="deletePictureModal.show">
        <v-card>
          <v-card-title>
            <div class="headline" style="margin-bottom: 10px;">Delete this picture?</div>
            <img v-if="deletePictureModal.croppedID"
              class="image" :src="`${serverUrl}/file/get/${deletePictureModal.croppedID}`"
              width="100%">
          </v-card-title>
          <v-card-actions>
            <v-btn flat="flat" @click.native="cancelDeletePictureModal">Cancel</v-btn>
            <v-btn flat="flat" @click.native="deletePicture">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-snackbar
        v-model="snackbar"
        bottom
        left
        :timeout="5000"
        color="green darken-1"
        >
        {{ snackbarText }}
        <v-btn color="white" flat @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar>
    </div>
  </v-container>
</template>

<script>
import gql from 'graphql-tag';
import Schools from '@/constants/schools';
import PicUploader from '@/components/PicUploader';
import { degreesReduced, degreeReducedDbToString, degreeReducedStringToDb } from '@/constants/degrees';
import positions from '@/constants/positions';
import languages from '@/constants/languages';
import queries from '@/constants/queries';
import difference from 'lodash/difference';
import axios from 'axios';
import QuillEditor from '@/components/QuillEditor';
import EventBus from '@/EventBus';
import userDataProvider from '@/userDataProvider';
import Config from 'config';
import CodeVerification from '@/components/CodeVerification';
import AccountTypeSelection from '@/components/AccountTypeSelection';
import SignupComponent from '@/components/SignupComponent';
import * as VueGoogleMaps from 'vue2-google-maps';
import Asset77 from '@/assets/icons/Asset77.svg';
import Asset78 from '@/assets/icons/Asset78.svg';
import Asset79 from '@/assets/icons/Asset79.svg';
import Welcome3 from '@/assets/images/welcome3.jpg';
import Billing from '@/components/Billing';

const createJobMutation = gql`
  mutation ($job: CreateOneJobInput!) {
    createJob (record: $job) {
      recordId
      record {
        ${queries.FindJobRecord}
      }
    }
  }
`;
const updateJobMutation = gql`
  mutation ($id: MongoID, $job: UpdateOneJobInput!) {
    updateJob (filter: {_id: $id}, record: $job) {
      recordId
      record {
        ${queries.FindJobRecord}
      }
    }
  }
`;
const findJobQuery = gql`
  query($id: MongoID) {
    findJob(filter: { _id: $id }) {
      ${queries.FindJobRecord}
    }
  }
`;
const findJobsQuery = gql`
  query($userId: MongoID, $businessId: MongoID) {
    findJobs(filter: { user_id: $userId, business_id: $businessId }) {
      ${queries.FindJobRecord}
    }
  }
`;

export default {
  metaInfo: {
    title: 'Post a Job | Kunvet',
    meta: [
      { name: 'description', content: 'noindex' },
    ],
  },
  components: {
    PicUploader,
    QuillEditor,
    CodeVerification,
    AccountTypeSelection,
    SignupComponent,
    Billing,
  },
  data() {
    return {
      tab: '0',
      jobs: [],
      chosenAccountType: '',
      furthest_tab: 0, // 0 - 2
      form1Valid: false,
      form2Valid: false,
      form3Valid: false,
      submit1Pressed: false,
      submit2Pressed: false,
      submit3Pressed: false,
      form1Error: '', // UserExists, LoginFailure
      form2Error: '',
      form3Error: '',
      introDialog: true,
      serverUrl: Config.get('serverUrl'),
      // user info
      business_name: null,
      fname: null,
      lname: null,
      email: null,
      password: null,
      e1: true,
      emailExists: false,
      passwordRules: [
        v => !!v || 'Required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters',
      ],
      requiredRules: [v => !!v || 'Required'],
      job: {
        title: null,
        posted_by: null,
        address: '',
        address2: null,
        latitude: null,
        longitude: null,
        university: null,
        images: [],
        type: null, // string: fulltime, parttime, both
        type2: [], // internship, contract
        studentfriendly: true,
        shift: [],
        salary: null,
        pay_denomination: 'per hour',
        education: null,
        major: null,
        language: null,
        age: null,
        description: null,
        experience: null,
        responsibilities: null,
        active: false,
        date: null,
        position_tags: [],
      },
      userdata: {},
      isUniversity: false,
      acct: 0,
      uid: null,
      jobId: null,
      orgId: null,
      autocomplete: null,
      placeDetails: null,
      type_str: null,
      type_current: null,
      type2_current: null,
      salary_select: null,
      openSelectField: null,
      availableSchools: Schools.schools,
      availablePositions: positions,
      languages: languages,
      filterPositions: null,
      selectedPositions: [],
      picUploaderDialog: false,
      successAlert: false,
      showInvalidMessage: false,
      notes: '',
      useGForm: false,
      gformLink: '',
      educationOptions: Object.keys(degreesReduced).map(key => degreesReduced[key]),
      howDidYouHearItems: [
        'Flyers & posters', 'Social media', 'Word of mouth', 'Email campaign', 'Other',
      ],
      deletePictureModal: {
        show: false,
        croppedID: null,
      },
      email_verified: false,
      loading: false,
      bdata: {
        business_name: null,
        address: null,
        display_email: null,
        phone_number: null,
        website: null,
        biography: null,
        profile_pic: null,
      },
      geocoder: null,
      addressValid: true,
      prevAutocompleteAddress: null,
      postingAs: 'individual',
      newEmail: null,
      emailSent: null,
      dialogs: {
        reopeningJob: false,
        confirmPost: false,
        errorOccured: false,
        changeEmail: false,
        welcome: false,
      },
      svgs: {
        pencil: Asset77,
        paper: Asset78,
        paperAirplane: Asset79,
      },
      welcomeImg: Welcome3,
      snackbar: false,
      snackbarText: '',
      pageloading: true,
      previouslyEnteredEmail: null,
    };
  },
  computed: {
    tabItems() {
      return ['About you', 'Job details', 'Review and post'];
    },
    filteredAvailablePositions() {
      var str = this.filterPositions;
      if (!str || str === '') {
        return this.availablePositions;
        // return this.selectedPositions.concat(difference(this.availablePositions, this.selectedPositions));
      }
      str = str.toLowerCase();
      return this.availablePositions.filter(text => text.toLowerCase().indexOf(str) !== -1);
    },
    applyMethod() {
      if (this.useGForm) {
        return 'Through Google Forms';
      }
      return 'Through Kunvet';
    },
    selectedCategories() {
      const types = this._jobType().concat(this.job.type2);
      return types.join(', ');
    },
    selectedShifts() {
      return this.job.shift.join(', ');
    },
    selectedLanguage() {
      return this.job.language;
    },
    disableChangeEmail() {
      return (this.newEmail === this.email);
    },
    postedJobs() {
      return this.jobs.filter(x => x.active || x.expired);
    },
    isFirstJob() {
      return this.postedJobs.length < 1;
    },
  },
  methods: {
    selectAccountType(type) {
      this.chosenAccountType = type;
    },
    onSignup() {
      userDataProvider.getUserData().then(async res => {
        this.$debug('meow');
        this.pageloading = false;
        this.uid = res.uid;
        if (res.acct === 0) {
          // logged out
          this.email_verified = false;
        } else {
          this.email_verified = res.userdata.email_verified;
          this.email = res.userdata.email;
          this.fname = res.userdata.firstname;
          this.lname = res.userdata.lastname;
          this.userdata = res.userdata;
          if (res.acct === 1) {
            // individual
            this.orgId = null;
            this.business_name = null;
            this.orgId = null;
            this.postingAs = 'individual';
            this.job.posted_by = `${res.userdata.firstname} ${res.userdata.lastname}`;
          } else if (res.acct === 2) {
            // business
            var orgId;
            if (res.userdata.default_org) {
              orgId = res.userdata.default_org;
            } else if (res.userdata.org_list.length > 0) {
              // fallback if default_org is not set for some reason
              for (var i = 0; i < res.userdata.org_list.length; i++) {
                if (res.userdata.org_list[i]) {
                  orgId = res.userdata.org_list[i];
                  break;
                }
              }
            }
            this.orgId = orgId; // make sure orgId is correctly set before loading unposted jobs
            this.fetchAndSetBusinessData(orgId);
          }
        }
        this.next(1);
      });
    },
    async getData(networkOnly = false) {
      const { data } = await this.$apollo.query({
        fetchPolicy: networkOnly ? 'network-only' : 'cache-first',
        query: findJobsQuery,
        variables: {
          userId: this.$store.state.userID,
          businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
        },
      });
      this.jobs = data.findJobs.concat();
      // const jobs = this.jobs.filter(x => !x.is_deleted);
      // const jobIds = jobs.map(({ _id }) => _id);
      // const resolved = await Promise.all(jobIds.map(this.getApplicationsFromJob));
      // this.applicants = resolved.reduce((total, curr) => total.concat(curr), []);
    },
    next(n) {
      // this handles all the logic of moving from one step to the next
      this.clearErrors();
      this[`submit${n}Pressed`] = true;
      const valid = this.$refs[`form${n}`].validate();
      if (n === 2 && (!this.job.longitude || !this.job.latitude)) {
        this.job.addressValid = false;
      }
      if (this[`form${n}Valid`] && valid) {
        // Form is valid
        if (n === 1 && !this.uid) {
          this.form1Error = 'You must be logged in to continue';
        } else {
          this._moveToNextTab();
        }
      } else {
        // Error: form not valid
        let target = 0;
        for (var item of this.$refs[`form${n}`].$children) {
          if (item.hasError) {
            target = item;
            break;
          }
        }
        this.scrollToTop(target);
      }
      setTimeout(() => { this.setJobProgress(); }, 300);
    },
    _moveToNextTab() {
      const active = parseInt(this.tab, 10);
      if (active < 2) {
        this.tab = (active + 1).toString();
        if (this.tab > this.furthest_tab) {
          this.furthest_tab = this.tab;
        }
      }
      setTimeout(() => { this.scrollToTop(); }, 300);
    },
    _moveToPrevTab() {
      const active = parseInt(this.tab, 10);
      if (active > 0) {
        this.tab = (active - 1).toString();
      }
      setTimeout(() => { this.scrollToTop(); }, 300);
    },
    isTabValid(n) {
      return this[`submit${(n + 1)}Pressed`] && this[`form${(n + 1)}Valid`];
    },
    isTabInvalid(n) {
      return this[`submit${(n + 1)}Pressed`] && !this[`form${(n + 1)}Valid`];
    },
    clearErrors() {
      this.form1Error = ''; this.form2Error = ''; this.form3Error = '';
    },
    scrollToTop(target = 0) {
      let offset = 0;
      /* 112 is the height of the navbar and tabs bar */
      if (target !== 0) { offset = -145; }
      this.$vuetify.goTo(target, { duration: 700, offset: offset, easing: 'easeInOutCubic' });
    },
    _isNumber(val) {
      if (typeof val === 'string') {
        if (!parseFloat(val)) { return false; }
        const allowedChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ','];
        for (var i = 0; i < val.length; i++) {
          var char = val.charAt(i);
          if (allowedChars.indexOf(char) === -1) { return false; }
        }
        return true;
      }
      return typeof val === 'number';
    },
    _jobType() {
      if (this.job.type === 'both') {
        return ['fulltime', 'parttime'];
      } else if (this.job.type) {
        return [this.job.type];
      }
      return [];
    },
    _getNumber(val) {
      if (typeof val === 'string') {
        const newVal = val.replace(/,/g, ''); // remove commas
        return parseFloat(newVal);
      }
      return parseFloat(val);
    },
    async createAccount() {
      const isBusiness = Boolean(this.business_name);
      const data = {
        email: this.email,
        fname: this.fname,
        lname: this.lname,
        pwd: this.password,
        business_name: this.business_name,
        address: this.job.address,
        jobInfo: {
          address2: this.job.address2,
          title: this.job.title,
          university: this.job.university,
          lat: this.job.latitude,
          long: this.job.longitude,
        },
        account_type: isBusiness ? 'business' : 'individual',
      };
      var registerSuccess = false;
      var userId;
      var orgId;
      var ret = { registered: false, loggedIn: false, error: null };
      // sending jobInfo will create a new job
      if (this.jobId) { data.jobInfo = null; }
      await axios.post('/auth/register2', data).then((res) => {
        if (res.data.success) {
          userId = res.data.message.userId;
          orgId = res.data.message.orgId;
          this.jobId = res.data.message.jobId ? res.data.message.jobId : this.jobId;
          this.setJobProgress();
          this.job.posted_by = data.business_name ? data.business_name : `${data.fname} ${data.lname}`;
          this.previouslyEnteredEmail = data.email;
          registerSuccess = true;
          ret.registered = true;
        } else if (res.data.message === 'Email exists but not verified') {
          ret.registered = true;
          ret.error = 'UserExists';
        } else if (res.data.message === 'User already exists') {
          ret.registered = true;
          ret.error = 'UserExists';
        } else {
          ret.error = res.data ? res.data : res;
          this.$error(res);
        }
      }).catch((error) => {
        ret.error = error;
        this.$error(error);
      });
      if (registerSuccess) {
        // Log in after registering
        if (!this.uid || this.previouslyEnteredEmail !== data.email) {
          this.$debug('trying to log into new account');
          await axios.post('/auth/login', {
            email: data.email,
            password: data.pwd,
          }).then((res) => {
            if (res.data.success) {
              // Logged in successfully
              this.uid = userId;
              this.orgId = orgId;
              this.$store.commit({ type: 'setAcctID', id: userId });
              if (isBusiness) {
                EventBus.$emit('login', 'business');
              } else {
                EventBus.$emit('login', 'individual');
              }
              ret.loggedIn = true;
            } else {
              ret.error = res.data ? res.data : res;
              this.$error(res);
            }
          }).catch((error) => {
            ret.error = error;
            this.$error('Error logging into an account after register', error);
          });
        } else {
          this.orgId = orgId;
          ret.loggedIn = true;
        }
      }
      return ret;
    },
    checkIfEmailExists() {
      const data = { email: this.email };
      this.emailExists = false;
      axios.post('/auth/checkIfExists', data).then((res) => {
        if (res.data.success && this.$refs.emailField) {
          this.emailExists = res.data.exists;
          this.$refs.emailField.validate();
        } else {
          this.emailExists = false;
        }
      }, (error) => {
        this.$error(error);
        this.emailExists = false;
      });
    },
    reorderAvailablePositions() {
      this.availablePositions = this.selectedPositions.concat(difference(this.availablePositions, this.selectedPositions));
    },
    setPlace(place) {
      if (!place.geometry) {
        this.job.addressValid = false;
        return;
      }
      this.job.addressValid = true;
      this.job.address = place.formatted_address;
      this.job.latitude = place.geometry.location.lat();
      this.job.longitude = place.geometry.location.lng();
    },
    saveForLater() {
      this.loading = true;
      this.job.active = false;
      this.saveJob();
    },
    postJob() {
      if (!this.loading) {
        if (!this.email_verified) {
          this.setJobProgress(true); // set postOnOpen to true
          this.$refs.codever.init();
          this.tab = 'verify-email';
        } else {
          this.loading = true;
          this.saveJob();
        }
      }
    },
    moveToBilling() {
      this.$router.push('/jobs/create');
      this.$refs.billing.show(this.jobId);
      this.tab = 'billing';
    },
    validateFullJob() {
      for (var i = 2; i >= 0; i--) {
        const valid = this.$refs[`form${i + 1}`].validate();
        if (!valid) {
          if (i === 2) {
            let target = 0;
            for (var item of this.$refs.form3.$children) {
              if (item.hasError) { target = item; break; }
            }
            this.scrollToTop(target);
            return [false, ''];
          }
          return [false, `Section ${i + 1} is not valid. Please correct errors and try again.`];
        }
      }
      if (this.job.longitude == null || this.job.latitude == null) {
        return [false, 'Job latitude and longitude not set. Please try to re-enter address and try again.'];
      }
      return [true, ''];
    },
    submitLastForm() {
      this.submit3Pressed = true;
      this.clearErrors();
      const validation = this.validateFullJob();
      if (validation[0]) {
        this.postJob();
        this.moveToBilling();
      } else if (validation[1]) {
        this.form3Error = validation[1];
      }
      if (!this.job.position_tags || this.job.position_tags.length === 0) {
        var msgEl = document.getElementById('bottom-error-message');
        msgEl.style.opacity = 1;
        setTimeout(() => { msgEl.style.opacity = 0; }, 4000);
      }
    },
    updateJob() {
      if (this.jobId && this.job.title && !this.job.active && this.$store.state.userID) {
        this.saveJob();
      }
    },
    updateActiveJob() {
      this.validateBeforePosting();
      if (this.valid && this.$route.params.id) {
        this.job.active = true;
        this.saveJob();
      }
    },
    saveJob() {
      if (this.jobId) {
        // SAVE EXISTING JOB
        const job = this.createJobArray();
        this.$debug('Job info:', job);
        this.$debug('Email verified:', this.email_verified);
        this.$apollo.mutate({
          mutation: updateJobMutation,
          variables: {
            id: this.jobId,
            job: job,
          },
          refetchQueries: [
            {
              query: findJobQuery,
              variables: { id: this.jobId },
            },
            {
              query: gql`query($userId: MongoID, $businessId: MongoID) {
                findJobs(filter: { user_id: $userId, business_id: $businessId }) {
                  ${queries.FindJobRecordForJobCard}
                }
              }`,
              variables: { userId: this.$store.state.userID, businessId: this.$store.state.businessID },
            },
          ],
        }).then(() => {
          this.loading = false;
          // const recordId = res.data.updateJob.recordId;
          if (!job.active) {
            this.setJobProgress();
          } else {
            this.$store.commit('resetJobProgress');
          }
        }).catch((err) => {
          this.loading = false;
          this.dialogs.confirmPost = false;
          if (this.$store.state && this.$store.state.currentJobProgress && this.$store.state.currentJobProgress.postOnOpen) {
            this.setJobProgress(); // set postOnOpen back to false
            this.tab = '2';
          } else {
            this.dialogs.errorOccured = true;
          }
          this.$error(err);
        });
      } else {
        // CREATE NEW JOB
        const job = this.createJobArray();
        this.$apollo.mutate({
          mutation: createJobMutation,
          variables: {
            job: job,
          },
          refetchQueries: [
            {
              query: findJobsQuery,
              variables: {
                userId: this.$store.state.userID,
                businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
              },
            },
            {
              query: gql`query($userId: MongoID, $businessId: MongoID) {
                findJobs(filter: { user_id: $userId, business_id: $businessId }) {
                  ${queries.FindJobRecordForJobCard}
                }
              }`,
              variables: {
                userId: this.$store.state.userID,
                businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
              },
            },
            { // from home page
              query: gql`{
                findJobs (filter: { active: true }){
                  _id
                  latitude
                  longitude
                  type
                  studentfriendly
                  type2
                  shift
                  age
                  pay_type
                  date
                  is_deleted
                }
              }`,
            },
            { // from applicants page
              query: (gql`query ($userId: MongoID, $businessId: MongoID) {
                findJobs (filter: { user_id: $userId, business_id: $businessId, active: true }){
                  _id
                  user_id
                  posted_by
                  title
                  address
                  date
                }
              }`),
              variables: {
                userId: this.$store.state.userID,
                businessId: this.$store.state.acct === 2 ? this.$store.state.businessID : null,
              },
            },
          ],
        }).then((res) => {
          this.loading = false;
          const recordId = res.data.createJob.recordId;
          this.jobId = recordId;
          this.setJobProgress();
        }).catch((err) => {
          this.loading = false;
          this.dialogs.confirmPost = false;
          this.dialogs.errorOccured = true;
          this.$error(err);
        });
      }
    },
    setJobProgress(postOnOpen = false) {
      if (this.jobId) {
        this.$store.commit({
          type: 'setJobProgress',
          id: this.jobId,
          part1: this.form1Valid,
          part2: this.form2Valid,
          part3: this.form3Valid,
          postOnOpen: postOnOpen,
        });
      }
    },
    createJobArray() {
      const doesJobActivelyExist = this.job.active && this.job.date;
      const job = {
        user_id: this.uid,
        business_id: this.orgId,
        posted_by: this.job.posted_by,
        title: this.job.title,
        date: doesJobActivelyExist ? this.job.date : Date.now(),
        address: this.job.address,
        address2: this.job.address2,
        university: this.isUniversity ? this.job.university : null,
        latitude: this.job.latitude,
        longitude: this.job.longitude,
        type: this._jobType(),
        type2: this.job.type2,
        studentfriendly: this.job.studentfriendly,
        shift: this.job.shift === [] ? null : this.job.shift,
        age: this.job.age ? parseInt(this.job.age, 10) : null,
        pay_type: this.salary_select === null ? 'none' : this.salary_select,
        salary: this.salary_select === 'paid' ? this._getNumber(this.job.salary) : null,
        pay_denomination: this.salary_select === 'paid' ? this.job.pay_denomination : null,
        education: this.job.education ? degreeReducedStringToDb(this.job.education) : 'None',
        preferred_major: this.job.major,
        language: this.job.language,
        description: this.job.description,
        experience: this.job.experience,
        responsibilities: this.job.responsibilities,
        apply_method: this.applyMethod,
        notes: this.notes,
        gform_link: this.gformLink,
        images: this.job.images,
        position_tags: this.job.position_tags,
      };
      return job;
    },
    async checkForUnpostedJobs() {
      var unpostedJobs = [];
      await this.$apollo.query({
        // fetchPolicy: 'network-only',
        query: (gql`query ($uid: MongoID, $oid: MongoID) {
          findJobs(filter: { user_id: $uid, business_id: $oid, active: false, is_deleted: false, expired: false }){
            ${queries.FindJobRecord}
          }
        }`),
        variables: {
          uid: this.uid,
          oid: this.orgId,
        },
      }).then((data) => {
        if (data.data.findJobs && data.data.findJobs.length > 0) {
          for (var i = 0; i < data.data.findJobs.length; i++) {
            unpostedJobs.push({ title: data.data.findJobs[i].title, id: data.data.findJobs[i]._id });
          }
        }
      }).catch((err) => {
        this.$error(err);
      });
      this.unpostedJobs = unpostedJobs;
      return unpostedJobs;
    },
    async reopenExistingJob(_id) {
      this.dialogs.reopeningJob = true;
      await this.getJobData(_id);
      if (this.job.active && this.jobId && (!this.$store.state.currentJobProgress || !this.$store.state.currentJobProgress.postOnOpen)) {
        if (this.$route.params.id) {
          this.$router.push(`/jobs/edit/${this.jobId}`);
        } else {
          this.resetData();
        }
        this.dialogs.reopeningJob = false;
        return;
      }
      let tabToOpen = '2'; // open last tab in case all tabs are valid
      for (var i = 0; i < 3; i++) {
        const valid = this.$refs[`form${i + 1}`].validate();
        if (i > this.furthest_tab) { this.furthest_tab = i; }
        if (valid) {
          this[`submit${i + 1}Pressed`] = true;
        } else {
          tabToOpen = `${i}`;
          break;
        }
      }
      if (tabToOpen === '2' && this.$store.state.currentJobProgress.postOnOpen) {
        try {
          this.postJob();
        } catch (e) {
          this.$error('Error posting job on reopen', e);
          this.tab = tabToOpen;
        }
      } else {
        this.tab = tabToOpen;
      }
      this.dialogs.reopeningJob = false;
    },
    async getJobData(_id, fallback = false) {
      const uid = this.uid ? this.uid : this.$store.state.userID;
      await this.$apollo.query({
        query: (gql`query ($id: MongoID, $user: MongoID) {
          findJob (filter: { _id: $id, user_id: $user }){
            ${queries.FindJobRecord}
          }
        }`),
        variables: {
          user: uid,
          id: _id,
        },
      }).then(async (data) => {
        const job = data.data.findJob;
        if (job) {
          this.jobId = _id;
          if (!this.job.posted_by) {
            this.job.posted_by = job.posted_by;
          }
          this.job.title = job.title;
          this.job.active = job.active;
          this.job.date = job.date;
          this.job.address = job.address;
          this.job.address2 = job.address2;
          this.job.university = job.university;
          if (job.university) {
            this.isUniversity = true;
          }
          this.job.latitude = job.latitude;
          this.job.longitude = job.longitude;
          this.job.education = job.education ? degreeReducedDbToString(job.education) : null;
          if (job.type) {
            if (job.type.length === 2) {
              this.job.type = 'both';
            } else {
              this.job.type = job.type[0];
            }
          } else {
            this.job.type = null;
          }
          this.job.type2 = job.type2 ? job.type2.concat() : [];
          this.job.studentfriendly = job.studentfriendly;
          this.job.shift = job.shift ? job.shift : [];
          if (job.pay_type && job.pay_type !== 'none') {
            this.salary_select = job.pay_type;
            this.job.salary = job.salary;
            this.job.pay_denomination = job.pay_denomination || 'per hour';
          }
          this.job.major = job.preferred_major;
          this.job.age = job.age;
          this.job.language = job.language ? job.language : null;

          this.job.description = job.description ? job.description : null;
          this.job.experience = job.experience ? job.experience : null;
          this.job.responsibilities = job.responsibilities ? job.responsibilities : null;

          this.job.position_tags = job.position_tags ? job.position_tags.concat() : [];
          if (job.gform_link) {
            this.gformLink = job.gform_link;
            this.useGForm = true;
          }
          this.job.images = [];
          for (const image of job.images) {
            this.job.images.push({ original: null, cropped: image.cropped });
          }
          if (job.position_tags) {
            this.selectedPositions = job.position_tags.concat();
          }
        } else {
          this.$debug('Tried to reopen existing job but no job found');
          if (!fallback) {
            const unpostedJobs = await this.checkForUnpostedJobs();
            console.log('unposted jobs', unpostedJobs);
            if (unpostedJobs.length === 1) {
              await this.getJobData(unpostedJobs[0].id, true);
            }
          }
        }
      }).catch((error) => {
        this.$error(error);
      });
    },
    picUploaded(fileId) {
      this.picUploaderDialog = false;
      this.job.images.push({ original: null, cropped: fileId });
      this.updateJob();
    },
    showDeletePictureModal(croppedID) {
      this.deletePictureModal.show = true;
      this.deletePictureModal.croppedID = croppedID;
    },
    cancelDeletePictureModal() {
      this.deletePictureModal.show = false;
      this.deletePictureModal.croppedID = null;
    },
    deletePicture() {
      this.job.images = this.job.images.filter(({ cropped }) => cropped !== this.deletePictureModal.croppedID);
      this.cancelDeletePictureModal();
    },
    checkIfEmailVerified() {
      if (this.uid) {
        this.$apollo.query({
          query: (gql`query ($uid: MongoID) {
            findAccount (filter: {
              _id: $uid
            }) {
                _id
                email_verified
            }
          }`),
          variables: {
            uid: this.uid,
          },
        }).then((data) => {
          const res = data.data.findAccount;
          this.email_verified = res.email_verified;
        }).catch(this.$error);
      }
    },
    codeValidated() {
      this.email_verified = true;
      this.$router.push('/jobs/create/signup=true');
      if (this.$store.state.userID && this.$store.state.userdata) {
        const udata = this.$store.state.userdata;
        udata.email_verified = true;
        this.$store.commit({ type: 'keepUserdata', userdata: udata });
      }
      this.postJob();
    },
    resetData() {
      console.log('Resetting data');
      this.$store.commit('resetJobProgress');
      Object.assign(this.$data, this.$options.data.call(this), { autocomplete: this.autocomplete, geocoder: this.geocoder });
      this.pageloading = false;
    },
    fetchAndSetBusinessData(id) {
      this.$apollo.query({
        query: (gql`query ($bid: MongoID) {
          findOrganization (filter: {
            _id: $bid
          }) {
            _id
            business_name
            address
            email
            phone_number
            website
            biography
            profile_pic
          }
        }`),
        variables: {
          bid: id,
        },
      }).then((data) => {
        const res = data.data.findOrganization;
        this.business_name = res.business_name;
        this.orgId = res._id;
        this.postingAs = 'business';
        this.job.posted_by = res.business_name;
        if (!this.job.address && res.address) {
          this.job.address = res.address;
          this.setLatLongs();
        }
        this.commitBdata();
      }).catch((error) => {
        this.$error(error);
      });
    },
    commitBdata() {
      this.$store.commit({
        type: 'keepBdata',
        bdata: this.bdata,
      });
    },
    openChangeEmail() {
      this.newEmail = this.email;
      this.dialogs.changeEmail = true;
    },
    resendEmail() {
      if (this.loading) { return; }
      const data = {
        email: this.email,
      };
      this.loading = true;
      axios.post('/auth/resendVerificationEmail', data).then((res) => {
        this.loading = false;
        if (res.data.noUnverified) {
          this.email_verified = true;
        } else if (res.data.success) {
          this.openSnackbar('Email sent.');
        } else {
          this.emailSent = null;
        }
      }, (error) => {
        this.$error(error);
        this.emailSent = null;
        this.loading = false;
      });
    },
    changeEmail() {
      if (this.loading) { return; }
      const data = {
        newemail: this.newEmail,
      };
      this.loading = true;
      axios.post('/auth/changeEmail', data).then((res) => {
        this.loading = false;
        this.dialogs.changeEmail = false;
        if (res.data.success) {
          this.email = this.newEmail;
          this.openSnackbar('Success! Check your inbox.');
        } else {
          this.dialogs.errorOccured = true;
        }
      }, (error) => {
        this.loading = false;
        this.dialogs.changeEmail = false;
        this.dialogs.errorOccured = true;
        this.$error(error);
      });
    },
    setLatLongs() {
      setTimeout(() => {
        if (this.geocoder && this.job.address !== this.prevAutocompleteAddress) {
          this.geocoder.geocode({ 'address': this.job.address }, (results, status) => {
            if (status === 'OK' && results.length === 1) {
              this.job.latitude = results[0].geometry.location.lat();
              this.job.longitude = results[0].geometry.location.lng();
              this.job.addressValid = true;
              this.$refs.addressField.validate();
            } else {
              this.job.latitude = null;
              this.job.longitude = null;
              this.job.addressValid = false;
              this.$refs.addressField.validate();
            }
          });
        }
      }, 500);
    },
    openSnackbar(text) {
      this.snackbarText = text;
      this.snackbar = true;
    },
    initGoogleMaps() {
      if (!this.autocomplete || !this.geocoder) {
        const input = this.$refs.addressField.$el.getElementsByTagName('input')[0];
        input.setAttribute('placeholder', '');
        this.autocomplete = new window.google.maps.places.Autocomplete(input);
        this.geocoder = new window.google.maps.Geocoder();
        this.autocomplete.setComponentRestrictions({
          country: ['us'],
        });
        this.autocomplete.addListener('place_changed', () => {
          this.prevAutocompleteAddress = this.job.address;
          if (this.autocomplete === null) {
            this.initGoogleMaps();
            return;
          }
          this.setPlace(this.autocomplete.getPlace());
        });
      }
      if (this.job.address) {
        this.setLatLongs();
      }
    },
  },
  activated() {
    if (this.tab === 'success-tab') {
      this.resetData();
    }
    this.getData();
    if (this.$store.state && this.$store.state.userdata) {
      this.email_verified = Boolean(this.$store.state.userdata.email_verified);
    }
    userDataProvider.getUserData().then(async res => {
      this.pageloading = false;
      this.uid = res.uid;
      if (res.acct === 0) {
        // logged out
        this.email_verified = false;
        this.furthest_tab = 1;
        if (this.tab === '0') {
          this.dialogs.welcome = true;
        } else {
          this.tab = '0';
        }
        // if (this.$store.state.newUser) {
        //   this.dialogs.welcome = true;
        //   this.$store.commit('notNewUser');
        // }
      } else {
        if (this.tab === '0') {
          this.next(1);
        }
        this.email_verified = res.userdata.email_verified;
        this.email = res.userdata.email;
        this.fname = res.userdata.firstname;
        this.lname = res.userdata.lastname;
        this.userdata = res.userdata;
        if (res.acct === 1) {
          // individual
          this.orgId = null;
          this.business_name = null;
          this.orgId = null;
          this.postingAs = 'individual';
          this.job.posted_by = `${res.userdata.firstname} ${res.userdata.lastname}`;
        } else if (res.acct === 2) {
          // business
          var orgId;
          if (res.userdata.default_org) {
            orgId = res.userdata.default_org;
          } else if (res.userdata.org_list.length > 0) {
            // fallback if default_org is not set for some reason
            for (var i = 0; i < res.userdata.org_list.length; i++) {
              if (res.userdata.org_list[i]) {
                orgId = res.userdata.org_list[i];
                break;
              }
            }
          }
          this.orgId = orgId; // make sure orgId is correctly set before loading unposted jobs
          this.fetchAndSetBusinessData(orgId);
        }
        // See if job progress needs to be restored
        if (this.$route.params.id) {
          this.reopenExistingJob(this.$route.params.id);
        } else if (this.$store.state && this.$store.state.currentJobProgress.jobId
          && this.$store.state.currentJobProgress.part1Complete && !this.job.title) {
          this.reopenExistingJob(this.$store.state.currentJobProgress.jobId);
        }
        // Load unposted jobs
        this.checkForUnpostedJobs();
        // See if user is returning user. Ideally should be if user has posted job or not.
        if (this.email_verified) {
          this.furthest_tab = 2;
        }
      }
    });
    // Initialize Google maps
    VueGoogleMaps.loaded.then(() => {
      this.initGoogleMaps();
    });
  },
  deactivated() {
    this.updateJob();
  },
  created() {
    EventBus.$on('logout', () => {
      if (this.jobId || this.job.title) {
        this.resetData();
      }
    });
  },
};
</script>
