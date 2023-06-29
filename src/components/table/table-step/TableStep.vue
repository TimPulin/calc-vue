<template>
  <table class="table table--element">
    <thead class="thead">
      <tr>
        <th class="tr__section">
          <span class="tr__text">Элемент</span>
        </th>
        <th class="tr__section">
          <span class="tr__text">уровень</span>
        </th>
      </tr>
    </thead>

    <tbody class="tbody">
      <tr class="tr">
        <td class="tr__section">
          <button
            class="button options-element-caller button--editing"
            @click="callOptions($event, 'step-name')"
          >
            {{ name.name }}
          </button>
        </td>

        <td class="tr__section">
          <button
            class="button options-element-caller"
            @click="callOptions($event, 'level')"
          >
            {{ name.level }}
          </button>
        </td>

        <td class="tr__section">1.99</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import modalElementTableMixin from '@/mixins/modal-element-table-mixin';
export default {
  mixins: [modalElementTableMixin],
  emits: ['open-options'],
};
</script>
