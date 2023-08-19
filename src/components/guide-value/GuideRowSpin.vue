<template>
  <tr>
    <td class="table__element-legend" colspan="7">
      {{ elementInitProperties.legend }}
    </td>
  </tr>

  <tr>
    <td class="tr__section">{{ element.fullElementName }}</td>

    <td class="tr__section">
      <div class="tr__wrapper">
        <CheckboxBase
          class="checkbox--option"
          name="fly"
          :local-value="true"
          :model-value="name.fly"
          @update:model-value="updateElementProperty($event, 'fly')"
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
          :local-value="true"
          :model-value="name.change"
          @update:model-value="updateElementProperty($event, 'change')"
        >
          C
        </CheckboxBase>
      </div>
    </td>

    <td class="tr__section">
      <OptionsBlockLevel
        :index="element.index"
        :model-value="name.level"
        @update:model-value="updateElementProperty($event, 'level')"
      />
    </td>

    <td class="tr__section">
      <div class="tr__wrapper">
        <CheckboxBase
          class="checkbox--option"
          :class="buttonVClasses"
          name="v-error"
          :local-value="true"
          :model-value="name.v"
          @update:model-value="updateElementProperty($event, 'v')"
        >
          V
        </CheckboxBase>
      </div>
    </td>

    <td class="tr__section">
      <OptionsBlockGoe
        :index="element.index"
        :model-value="element.goe"
        @update:model-value="updateElementGoe($event)"
      />
    </td>

    <td class="tr__section tr__section--scores">
      {{ scores }}
    </td>
  </tr>

  <tr class="tr--empty">
    <td class="tr__section"></td>
  </tr>
</template>

<script>
import guideRowMixin from '@/mixins/guide-row-mixin';

import CheckboxBase from '@/components/checkbox/CheckboxBase.vue';
import OptionsBlockLevel from '@/components/options/OptionsBlockLevel.vue';
import OptionsBlockGoe from '@/components/options/OptionsBlockGoe.vue';

export default {
  components: {
    CheckboxBase,
    OptionsBlockLevel,
    OptionsBlockGoe,
  },

  mixins: [guideRowMixin],

  computed: {
    buttonVClasses() {
      return {
        'element-disabled': this.isButtonVLocked,
      };
    },

    isButtonVLocked() {
      return this.name.lockV;
    },
  },

  methods: {
    setElementProperties() {
      this.name.level = 'B';
    },
  },
};
</script>
