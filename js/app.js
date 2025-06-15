const app = Vue.createApp({
  data() {
    return {
      email: '',
      subscribed: false,
      error: ''
    };
  },
  methods: {
    subscribe() {
      this.error = '';
      if (!this.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.email)) {
        this.error = 'Please enter a valid email address.';
        return;
      }
      this.subscribed = true;
    }
  }
});
app.mount('#app');
