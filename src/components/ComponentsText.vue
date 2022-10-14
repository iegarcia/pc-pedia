<template>
  <q-item>
    <q-item-section avatar>
      <q-icon
        :name="icon"
        color="black"
        size="48px"
        style="align-self:center"
      />
      <q-item-label class="q-mt-sm">{{ itemLabel }}</q-item-label>
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1">
        <span class="text-weight-medium">{{ spanText }} </span>
      </q-item-label>

      <q-item-label
        lines="1"
        class="q-mt-xs text-body2 text-weight-bold text-primary"
      >
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "ComponentsText",
  props: {
    icon: String,
    itemLabel: String,
    spanText: String
  }
};
</script>

<style></style>
