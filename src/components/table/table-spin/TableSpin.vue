<template>
  <table class="table table--element">
    <thead class="thead">
      <tr>
        <th class="tr__section" colspan="2"></th>

        <th class="tr__section">
          <span class="tr__text">Элемент</span>
        </th>
        <th class="tr__section">
          <span class="tr__text">уровень</span>
        </th>
        <th class="tr__section" colspan="2"></th>
      </tr>
    </thead>

    <tbody class="tbody">
      <tr class="tr">
        <td class="tr__section">
          <div class="tr__wrapper">
            <CheckboxBase
              class="checkbox--option"
              name="fly"
              local-value="f"
              model-value="name.fly"
              @update:model-value="$emit('update:fly', $event)"
            >
              F
            </CheckboxBase>
          </div>
        </td>

        <td class="tr__section">
          <div class="tr__wrapper">
            <CheckboxBase
              class="checkbox--option"
              name="change"
              local-value="f"
              model-value="name.change"
              @update:model-value="$emit('update:change', $event)"
            >
              C
            </CheckboxBase>
          </div>
        </td>

        <td class="tr__section">
          <div class="tr__wrapper">
            <button
              class="button button--editing options-element-caller"
              @click="createOpenOptionsEvent('spin-name')"
            >
              {{ name.name }}
            </button>
          </div>
        </td>

        <td class="tr__section">
          <div class="tr__wrapper">
            <button
              class="button button--freeze"
              @click="createOpenOptionsEvent('level')"
            >
              {{ name.level }}
            </button>
          </div>
        </td>

        <td class="tr__section">
          <div class="tr__wrapper">
            <CheckboxBase
              class="checkbox--option"
              name="v-error"
              local-value="v"
              model-value="name.fly"
              @update:model-value="$emit('update:v', $event)"
            >
              V
            </CheckboxBase>
          </div>
        </td>
        <td class="tr__section">1.99</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import CheckboxBase from '@/components/checkbox/CheckboxBase.vue';
import eventOpenOptionsMixin from '@/mixins/event-open-options-mixin';

export default {
  components: {
    CheckboxBase,
  },
  mixins: [eventOpenOptionsMixin],
  props: {
    nameList: {
      type: Array,
      require: true,
    },
  },

  emits: ['open-options', 'update:fly', 'update:change', 'update:v'],

  computed: {
    name() {
      return this.nameList[0];
    },
  },
};
</script>
