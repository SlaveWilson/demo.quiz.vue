<template lang="pug">
h2 Index2
form(name="contact", method="POST", data-netlify="true")
  p
    label Name: #[input(type="text", name="name")]
  p
    label Email: #[input(type="email", name="email")]
  p
    button(type="submit") Send
</template>
