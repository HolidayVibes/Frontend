<template>
  <div class="grid gap-3">
    <FormField v-slot="{ componentField }" name="firstName">
      <FormLabel>Имя</FormLabel>
      <Input v-bind="componentField" type="text" placeholder="John" />
      <FormMessage />
    </FormField>
    <FormField v-slot="{ componentField }" name="lastName">
      <FormLabel>Фамилия</FormLabel>
      <Input v-bind="componentField" type="text" placeholder="Doe" />
      <FormMessage />
    </FormField>
    <FormField v-slot="{ componentField }" name="email">
      <FormLabel>Почта</FormLabel>
      <Input
        v-bind="componentField"
        type="email"
        placeholder="example@google.com"
      />
      <FormMessage />
    </FormField>
    <FormField v-slot="{ componentField }" name="passwordHash">
      <FormLabel>Пароль</FormLabel>
      <Input
        v-bind="componentField"
        type="password"
        placeholder="Ve7y $tr0n9 pa$$w0rd"
      />
      <FormMessage />
    </FormField>
    <FormField v-slot="{ componentField }" name="birthDate">
      <FormLabel>Дата рождения</FormLabel>
      <Input v-bind="componentField" type="date" placeholder="2000-01-01" />
      <FormMessage />
    </FormField>
  </div>
</template>
