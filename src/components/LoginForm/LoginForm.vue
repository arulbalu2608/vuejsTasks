<template>
  <h1 class="title">{{ title }}</h1>
  <div>
    <label class="label">Email :</label>
    <input
      v-model="email"
      class="textbox margin-left"
      type="text"
      placeholder="email"
    />
  </div>
  <br />
  <div>
    <label class="label">Password :</label>
    <input
      v-model="password"
      class="textbox"
      type="password"
      placeholder="password"
    />
  </div>

  <div class="button-block">
    <button class="button" @click="handleShow">Login</button>
  </div>

  <div v-show="showValue">
    <p>Email : {{ email }}</p>
    <p>password : {{ password }}</p>

    <p @click="hide" class="hide">Hide</p>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    title: String,
  },
  data() {
    return {
      email: "",
      password: "",
      showValue: false,
    };
  },
  methods: {
    handleShow() {
      this.email !== "" && this.password !== ""
        ? (this.showValue = true)
        : alert("Enter all the values to submit");
    },
    hide() {
      this.showValue = !this.showValue;
    },
  },
};
</script>

<style scoped>
.title {
  color: black;
  font-size: 24px;
  font-weight: 600;
}
.label {
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #444444;
  padding-right: 20px;
}
.margin-left {
  margin-left: 28px;
}
.textbox {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
}
.textbox::placeholder {
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #000000;
  opacity: 0.6;
}

.button-block {
  padding-top: 40px;
}
.button {
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  color: white;
  background: #ea1d51;
  border-radius: 6px;
}

.hide {
  cursor: pointer;
  font-size: 14px;
  padding-left: 15rem;
}
</style>
