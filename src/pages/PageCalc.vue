<template>
  <div class="content">
    <table class="table table--calc">
      <thead class="thead">
        <tr>
          <th class="tr__section">edit</th>
          <th class="tr__section">element</th>
          <th class="tr__section">2x</th>
          <th class="tr__section">goe</th>
          <th class="tr__section">scores</th>
        </tr>
      </thead>

      <tbody class="tbody">
        <TableRowProgram
          v-for="(programElement, index) in localProgram"
          :key="index"
          :index="index"
          :program-element="programElement"
        />
      </tbody>

      <tfoot class="tfoot">
        <tr class="tr">
          <td class="tr__section" colspan="2"></td>
          <th class="tr__section tr__section--align-left" colspan="2">total</th>
          <th class="tr__section">16.00</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import TableRowProgram from '@/components/table/TableRowProgram.vue';
import { mapState } from 'vuex';

export default {
  components: { TableRowProgram },
  computed: {
    ...mapState(['program']),
    localProgram() {
      return this.program;
    },
  },
};
</script>
