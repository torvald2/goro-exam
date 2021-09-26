<template>
  <div class="content">
    <div class="first-section bg-cosmos py-8">
      <div class="main-section mx-4 sm:mx-14 lg:mx-28 py-8 lg:w-3/6">
        <div class="mt-4 px-4 sm:px-14">
          <!-- Section title -->
          <div class="my-header w-auto">
            <div>
              <h1 class="font-medium font-sans text-4xl py-2">
                Добро пожаловать на
                <span class="accent-purple font-bold"
                  ><nobr>Astro Online</nobr></span
                >
              </h1>
              <p class="text-xl font-normal">
                На данном сайте вы можете рассчитать свою натальную карту, а
                также получить ее интерпретацию от психолога. Помимо этого, на
                сайте присутствуют несколько видов прогноза.
              </p>
            </div>
          </div>

          <!-- Calculation of form -->
          <div class="form mt-10">
            <ChartForm />
          </div>
        </div>
      </div>
    </div>
    <div class="second-section bg-cream">
      <div class="mx-28 py-4">
        <div class="py-4 title-section">
          <span class="accent-purple font-normal text-2xl">Виды прогнозов</span>
        </div>
        <div class="bg-white py-4 mt-2 shadow-lg border-radius">
          <div class="calculation-var flex justify-between px-4">
            <div class="solar shadow p-1 w-1/6 border-radius border-2 hover:border-purple-500">
              <img src="../assets/images/calculation/solar.jpg" alt="" />
              <div class="px-2">
                <div class="title text-center text-2xl font-medium">Соляр</div>
                <div class="description text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  massa augue, porta at scelerisque nec, consequat quis nisi.
                </div>
              </div>
            </div>
            <div class="solar shadow p-1 w-1/6">
              <img src="../assets/images/calculation/solar.jpg" alt="" />
                            <div class="px-2">
                <div class="title text-center text-2xl font-medium">Соляр</div>
                <div class="description text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  massa augue, porta at scelerisque nec, consequat quis nisi.
                </div>
              </div>
            </div>
            <div class="solar shadow p-1 w-1/6">
              <img src="../assets/images/calculation/solar.jpg" alt="" />
                            <div class="px-2">
                <div class="title text-center text-2xl font-medium">Соляр</div>
                <div class="description text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  massa augue, porta at scelerisque nec, consequat quis nisi.
                </div>
              </div>
            </div>
            <div class="solar shadow p-1 w-1/6">
              <img src="../assets/images/calculation/solar.jpg" alt="" />
                            <div class="px-2">
                <div class="title text-center text-2xl font-medium">Соляр</div>
                <div class="description text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  massa augue, porta at scelerisque nec, consequat quis nisi.
                </div>
              </div>
            </div>
            <div class="solar shadow p-1 w-1/6">
              <img src="../assets/images/calculation/solar.jpg" alt="" />
                            <div class="px-2">
                <div class="title text-center text-2xl font-medium">Соляр</div>
                <div class="description text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  massa augue, porta at scelerisque nec, consequat quis nisi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartForm from "../components/ChartForm.vue";

export default {
  components: {
    ChartForm,
  },
};
</script>

<style>
.main-section {
  background-color: #fffedd;
  border-radius: 10px;
}

.bg-cream {
  background-color: #fffedd;
}

.bg-cosmos {
  background-image: url("../assets/images/bg/cosmos-bg-blur.jpg");
  background-size: cover;
}

.accent-purple {
  color: white;
  background-color: #6156bd;
  border-radius: 8px;
  padding: 0 10px;
}

.title-section {
  border-bottom: 2px solid #6156bd;
}

.my-header h1 {
  line-height: 1.5em;
}

.border-radius {
  border-radius: 8px;
}

@media screen and (max-width: 1024px) {
  .hidden-img {
    display: none;
  }
}
</style>