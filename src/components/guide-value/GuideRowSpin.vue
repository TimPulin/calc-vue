<template>
  <tr>
    <td>{{ elementInitProperties.legend }}</td>

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

    <td>
      <div class="tr__wrapper">
        {{ element.fullElementScores }}
      </div>
    </td>
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

  methods: {
    setElementProperties() {
      this.element.elementName[0].level = 'B';
    },
  },
};
</script>
