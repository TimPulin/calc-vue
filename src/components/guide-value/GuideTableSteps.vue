<template>
  <table class="table table--guide-value">
    <thead class="thead">
      <tr>
        <th class="tr__section">элемент</th>
        <th class="tr__section">уровень</th>
        <th class="tr__section">GOE</th>
        <th class="tr__section">баллы</th>
      </tr>
    </thead>

    <tbody>
      <tr class="tr--empty">
        <td class="tr__section"></td>
      </tr>
      <GuideRowStep
        v-for="(elementInitProperties, index) in elementInitPropertiesList"
        :key="index"
        :index="index"
        :element-init-properties="elementInitProperties"
      />
    </tbody>
  </table>
</template>

<script>
import GuideRowStep from '@/components/guide-value/GuideRowStep.vue';
export default {
  components: { GuideRowStep },

  data() {
    return {
      elementInitPropertiesList: [
        {
          type: 'step',
          name: 'StSq',
          legend: 'Дорожка',
        },
        {
          type: 'step',
          name: 'ChSq',
          legend: 'Хореографическая последовательность',
        },
      ],
    };
  },
};
</script>

<style>
thead {
  .tr__section {
    width: calc(100% / 4);
  }
}
</style>
