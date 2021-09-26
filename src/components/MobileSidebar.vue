<template>
  <div class="bg-gradient-to-b from-blue-500 to-blue-700 w-48 text-white">
    <!-- Sidebar -->
    <nav>
      <a href="">
        <div class="block py-4 px-3 hover:ring-4 ring-blue-50 text-center">
          <div class="flex justify-center"><img :src="compass" /></div>
          <span>Карта</span>
        </div>
      </a>
      <a href="">
        <div class="block py-4 px-3 hover:ring-4 ring-blue-50 text-center">
          <div class="flex justify-center"><img :src="table" /></div>
          <span><span>Таблицы</span></span>
        </div>
      </a>

      <a href="">
        <div class="block py-4 px-3 hover:ring-4 ring-blue-50 text-center">
          <div class="flex justify-center"><img :src="note" /></div>
          <span>Интерпретация</span>
        </div>
      </a>
      <a href="">
        <div class="block py-4 px-3 hover:ring-4 ring-blue-50 text-center">
          <div class="flex justify-center"><img :src="predict" /></div>
          <span>Прогноз</span>
        </div>
      </a>
      <a href="">
        <div class="block py-4 px-3 hover:ring-4 ring-blue-50 text-center">
          <div class="flex justify-center"><img :src="geer" /></div>
          <span>Коррекция</span>
        </div>
      </a>
      <a href="">
        <div class="block py-4 px-3 hover:ring-4 ring-blue-50 text-center">
          <div class="flex justify-center"><img :src="time" /></div>
          <span
            >Время <br />
            рождения</span
          >
        </div>
      </a>
      <a href="">
        <div class="block py-4 px-3 hover:ring-4 ring-blue-50 text-center">
          <div class="flex justify-center"><img :src="dotes" /></div>
          <span>Разное</span>
        </div>
      </a>
    </nav>
    <!-- Sidebar end -->
  </div>
</template>

<script>
import compass from "../assets/images/compass.svg";
import dotes from "../assets/images/dotes.svg";
import geer from "../assets/images/geer.svg";
import note from "../assets/images/note.svg";
import predict from "../assets/images/predict.svg";
import table from "../assets/images/table.svg";
import time from "../assets/images/time.svg";

export default {
  name: "SideBar",
  props: {
    msg: String,
  },
  data() {
    return {
      compass,
      dotes,
      geer,
      note,
      predict,
      table,
      time,
    };
  },
};
</script>