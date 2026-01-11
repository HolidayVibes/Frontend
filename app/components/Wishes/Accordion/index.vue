<script setup lang="ts">
import {
  type AccordionRootEmits,
  type AccordionRootProps,
  useForwardPropsEmits,
} from "reka-ui";
import { ChevronDown } from "lucide-vue-next";

const props = defineProps<
  AccordionRootProps & {
    itemValue: string;
  }
>();

const emits = defineEmits<AccordionRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <Accordion
    v-bind="forwarded"
    type="single"
    collapsible
    class="border bg-background transition-all duration-200 rounded-xl p-3"
    :class="forwarded.modelValue ? 'border-primary/50' : 'border-gray-400/20'"
  >
    <AccordionItem :value="itemValue">
      <AccordionTrigger class="hover:text-primary duration-150 text-lg">
        <slot name="trigger" />
        <template #icon>
          <ChevronDown
            :class="forwarded.modelValue ? 'text-primary' : ''"
            class="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
          />
        </template>
      </AccordionTrigger>

      <AccordionContent class="px-3 text-[16px]">
        <slot name="content" />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
