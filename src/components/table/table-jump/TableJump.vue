<template>
  <table class="table table--element">
    <thead class="thead">
      <tr>
        <th class="tr__section"></th>
        <th class="tr__section">
          <span class="tr__text">Обороты</span>
        </th>
        <th class="tr__section">
          <span class="tr__text">Элемент</span>
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
      <!-- TODO убрать  TableJumpRow и поставить его содержимое сюда-->
      <TableJumpRow
        v-for="(name, index) in nameList"
        :key="index"
        :name-list="name"
        :benchmark="benchmark"
        @add-jump="$emit('add-jump')"
        @delete-jump="$emit('delete-jump')"
        @open-options="
          $emit('open-options', {
            ...$event,
            elementIndex: index,
          })
        "
        :go-throw-down="goThrowDown"
      />
    </tbody>
  </table>
</template>

<script>
import TableJumpRow from './TableJumpRow.vue';
export default {
  components: {
    TableJumpRow,
  },

  props: {
    nameList: {
      type: Array,
      require: true,
    },
    benchmark: {
      require: true,
    },
    goThrowDown: {
      require: true,
    },
  },

  emits: ['add-jump', 'delete-jump', 'open-options'],
};
</script>
