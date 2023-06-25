<template>
  <table class="table table--element">
    <thead class="thead">
      <tr>
        <th class="tr__section"></th>
        <th class="tr__section">
          <span class="tr__text">Элемент</span>
        </th>
        <th class="tr__section">
          <span class="tr__text">Обороты</span>
        </th>
        <th class="tr__section">
          <span class="tr__text">Недокрут</span>
        </th>
        <th class="tr__section">
          <span class="tr__text">Ребро</span>
        </th>
        <th class="tr__section">
          <span class="tr__text"></span>
        </th>
      </tr>
    </thead>
    <tbody class="tbody">
      <TableJumpRow />
    </tbody>
  </table>
</template>

<script>
import TableJumpRow from './TableJumpRow.vue';
export default {
  components: {
    TableJumpRow,
  },
};
</script>
