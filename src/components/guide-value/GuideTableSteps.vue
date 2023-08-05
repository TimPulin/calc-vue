<template>
  <table class="table">
    <thead class="thead">
      <tr>
        <th class="tr__section">элемент</th>
        <th class="tr__section">уровень</th>
        <th class="tr__section">GOE</th>
        <th class="tr__section">баллы</th>
      </tr>
    </thead>

    <tbody>
      <GuideTableRow
        v-for="(elementInitProperties, index) in elementInitPropertiesList"
        :key="index"
        :index="index"
        :element-init-properties="elementInitProperties"
      />
    </tbody>
  </table>
</template>

<script>
import GuideTableRow from '@/components/guide-value/GuideTableRow.vue';
export default {
  components: { GuideTableRow },

  data() {
    return {
      elementInitPropertiesList: [
        {
          type: 'step',
          abbreviation: 'StSq',
          name: 'Дорожка',
        },
        {
          type: 'step',
          abbreviation: 'ChSq',
          name: 'Хореографическая последовательность',
        },
      ],
    };
  },
};
</script>
