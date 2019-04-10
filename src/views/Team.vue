<template>
  <v-container>
    <!-- 상태 표시 영역 -->
    <v-layout class="day-and-type">
      <v-flex>djklsjdfkls</v-flex>
    </v-layout>
    <!-- 메모 -->
    <v-layout class="memo">
      <v-flex>
        <v-icon>camera</v-icon>
      </v-flex>
    </v-layout>
    <!-- 증상 -->
    <v-layout class="symptoms">
      <v-flex>djklsjdfkls</v-flex>
    </v-layout>
    <!-- 기분 -->
    <v-layout class="feeling">
      <v-flex>djklsjdfkls</v-flex>
    </v-layout>
    <!-- 오늘의 팁 -->
    <v-layout class="tip">
      <v-flex>djklsjdfkls</v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Team"
})
export default class Team extends Vue {
  private msg: string = "Fly, Eagles, Fly!";
  private imageSrc: string =
    "http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F1217%2Fr303489_1296x518_5%2D2.jpg&w=768&h=307&scale=crop&cquality=80&location=origin";
}
</script>

<style>
.container {
  padding-top: 36px;
}
h1 {
  color: darkgreen;
}

.day-and-type {
}

.memo {
  height: 150px;
  background-color: rgba(52, 152, 219, 0.14);
}

.symptoms {
  height: 190px;
  background-color: rgba(205, 219, 52, 0.14);
}

.feeling {
  height: 190px;
  background-color: rgba(219, 124, 52, 0.14);
}

.tip {
  background-color: rgba(224, 224, 224, 0.14);
}
</style>
