<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card my-2 shadow">
            <div class="card-body">
              <h3 class="text-black-50 text-center text-uppercase">Login Form</h3>
              <form @submit.prevent="submit">
                <div class="mt-5">
                  <div class="form-floating mb-4">
                    <input required v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-4">
                    <input required v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="mb-4">
                    <label for="" class="form-label">Choose Carrier</label>
                    <select required name="" id="" class="form-select" v-model="carrier">
                      <option value="front">Frontend Developer</option>
                      <option value="backend">Backend Developer</option>
                      <option value="fullstack">Fullstack Developer</option>
                    </select>
                  </div>
                  <div class="mb-4">
                    <label class="form-label">Tools</label>
                    <div class="mb-4">
                      <input v-model="tools" value="vscode" type="checkbox" id="vsCode" class="form-check-input me-2" />
                      <label class="form-check-label me-2" for="vsCode">Vs Code</label>

                      <input v-model="tools" value="phpstorm" type="checkbox" id="phpStorm" class="form-check-input me-2" />
                      <label class="form-check-label me-2" for="phpStorm">PHP Storm</label>

                      <input v-model="tools" value="vim" type="checkbox" id="Vim" class="form-check-input me-2" />
                      <label class="form-check-label me-2" for="Vim">Vim</label>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label for="" class="form-label">Languages</label>
                    <div class="my-2">
                      <span class="badge rounded-pill bg-primary me-2 fw-lighter" v-for="language in languages" :key="language">
                        {{ language }}
                        <span class="x" @click="removeLan(language)">&times;</span>
                      </span>
                    </div>
                    <input v-model="language" @keyup.enter="addLan" type="text" class="form-control" />
                  </div>
                  <div class="form-check form-switch mb-4">
                    <input required v-model="agree" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                    <label class="form-check-label" for="flexSwitchCheckChecked">Agree Terms and Conditions</label>
                  </div>
                  <button type="button" @click="submit" class="btn btn-primary">Log In</button>
                </div>
              </form>
            </div>
          </div>

          <!-- <div>
            <p>email - {{ email }}</p>
            <p>password - {{ password }}</p>
            <p>carrier - {{ carrier }}</p>
            <p>Agree - {{ agree }}</p>
            <p>tools - {{ tools }}</p>
            <p>languages - {{ languages }}</p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      carrier: "",
      agree: false,
      tools: [],
      language: "",
      languages: [],
    };
  },
  methods: {
    addLan(e) {
      if (e.key === "Enter") {
        this.languages.push(this.language);
        this.language = "";
      }
    },
    removeLan(lan) {
      this.languages = this.languages.filter((language) => {
        return language !== lan;
      });
    },
    submit() {
      let info = {
        email: this.email,
        password: this.password,
        carrier: this.carrier,
        tools: this.tools,
        languages: this.languages,
        agree: this.agree,
      };
      console.log(info);
    },
  },
};
</script>

<style lang="scss" scoped>
.x:hover {
  cursor: pointer;
}
</style>
