<template>
  <table class="table table--guide-value">
    <thead>
      <tr>
        <th class="tr__section">элемент</th>
        <th class="tr__section">обороты</th>
        <th class="tr__section">недокрут</th>
        <th class="tr__section">ребро</th>
        <th class="tr__section">goe</th>
        <th class="tr__section">баллы</th>
      </tr>
    </thead>

    <tbody>
      <tr class="tr--empty">
        <td class="tr__section"></td>
      </tr>

      <GuideRowJump
        v-for="(elementInitProperties, index) in elementInitPropertiesList"
        :key="index"
        :index="index"
        :element-init-properties="elementInitProperties"
      />
    </tbody>
  </table>
</template>

<script>
import GuideRowJump from '@/components/guide-value/GuideRowJump.vue';

export default {
  components: { GuideRowJump },

  data() {
    return {
      elementInitPropertiesList: [
        {
          type: 'jump',
          name: 'A',
          legend: 'Аксель',
        },
        {
          type: 'jump',
          name: 'T',
          legend: 'Тулуп',
        },
        {
          type: 'jump',
          name: 'S',
          legend: 'Сальхов',
        },
        {
          type: 'jump',
          name: 'Lo',
          legend: 'Ритбергер',
        },
        {
          type: 'jump',
          name: 'F',
          legend: 'Флипп',
        },
        {
          type: 'jump',
          name: 'Lz',
          legend: 'Лутц',
        },
      ],
    };
  },
};
</script>
