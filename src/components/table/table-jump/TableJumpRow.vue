<template>
  <tr class="tr">
    <td class="tr__section tr__section--options">
      <div class="tr__wrapper">
        <ButtonOptionsMinus />
        <ButtonOptionsPlus />
      </div>
    </td>
    <td class="tr__section">
      <button class="button button--editing" data-options-id="jump-name">
        Lz
      </button>
    </td>
    <td class="tr__section">
      <button class="button button--freeze" data-options-id="numbers">4</button>
    </td>
    <td class="tr__section">
      <button
        class="button options-element-caller"
        data-options-id="jump-underotation"
      ></button>
    </td>
    <td class="tr__section">
      <button class="button" data-options-id="jump-edge"></button>
    </td>
    <td class="tr__section">1.99</td>
  </tr>
</template>

<script>
import ButtonOptionsMinus from '@/components/buttons/ButtonOptionsMinus.vue';
import ButtonOptionsPlus from '@/components/buttons/ButtonOptionsPlus.vue';

export default {
  components: {
    ButtonOptionsMinus,
    ButtonOptionsPlus,
  },
};
</script>
