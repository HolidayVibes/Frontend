<script setup lang="ts">
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
</script>

<template>
  <div class="grid gap-5">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Почта</FormLabel>
        <FormControl>
          <Input
            v-bind="componentField"
            type="email"
            placeholder="example@google.com"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Пароль</FormLabel>
        <FormControl>
          <Input
            v-bind="componentField"
            type="password"
            placeholder="Ve7y $tr0n9 pa$$w0rd"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
  </div>
</template>
