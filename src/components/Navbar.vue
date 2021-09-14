<template>
  <!-- This is an example component -->
  <nav
    class="
      font-sans
      text-white
      flex flex-col
      text-center
      sm:flex-row
      sm:text-left
      sm:justify-between
      py-8
      px-6
      bg-my-purple
      shadow
      sm:items-baseline
      w-full
    "
  >
    <div class="mb-2 sm:mb-0">
      <a
        href="/home"
        class="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >Home</a
      >
    </div>
    <div>
      <a
        href="/one"
        class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >One</a
      >
      <a
        href="/two"
        class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >Two</a
      >
      <a
        href="/three"
        class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >Three</a
      >
    </div>
  </nav>
</template>

<style>
.bg-my-purple {
  background-color: #6156bd;
}
</style>