<template>
  <table class="table table--guide-value">
    <thead>
      <tr>
        <th class="tr__section">элемент</th>
        <th class="tr__section">F</th>
        <th class="tr__section">C</th>
        <th class="tr__section">level</th>
        <th class="tr__section">V</th>
        <th class="tr__section">GOE</th>
        <th class="tr__section">баллы</th>
      </tr>
    </thead>

    <tbody>
      <tr class="tr--empty">
        <td class="tr__section"></td>
      </tr>

      <GuideRowSpin
        v-for="(elementInitProperties, index) in elementInitPropertiesList"
        :key="index"
        :index="index"
        :element-init-properties="elementInitProperties"
      />
    </tbody>
  </table>
</template>

<script>
import GuideRowSpin from '@/components/guide-value/GuideRowSpin.vue';

export default {
  components: { GuideRowSpin },
  data() {
    return {
      elementInitPropertiesList: [
        {
          type: 'spin',
          name: 'USp',
          legend: 'Вращение стоя',
        },
        {
          type: 'spin',
          name: 'SSp',
          legend: 'Волчок',
        },
        {
          type: 'spin',
          name: 'CSp',
          legend: 'Либела',
        },
        {
          type: 'spin',
          name: 'CoSp',
          legend: 'Комбинированное вращение',
        },
        {
          type: 'spin',
          name: 'LSp',
          legend: 'Заклон',
        },
      ],
    };
  },
};
</script>

<style>
.table--guide-value {
  thead {
    .tr__section {
      width: calc(100% / 7);
    }
  }
}
</style>
