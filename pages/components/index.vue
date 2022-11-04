<script setup lang="ts">
import BaseButton from '~/components/base/BaseButton.vue'

const searchBox = ref('')
const text = ref('')
const check = ref(false)
const radio = ref(0)
const radioTypes = ref([
  { label: 'RadioTypes 1', value: 0 },
  { label: 'RadioTypes 2', value: 1 },
  { label: 'RadioTypes 3', value: 2 },
])
const searchSelect = ref(0)
const selects = ref([
  { title: 'select 1', value: 0 },
  { title: 'select 2', value: 1 },
  { title: 'select 3', value: 2 },
])

const breadcrumbs = ref([
  { title: 'Home', href: '/' },
  { title: 'Components', href: '/components' },
])

const isDialog = ref(false)

const isMenu = ref(false)

const isExpansion = ref([false, false, false])

const currentPage = ref(1)

const multipleSelect = ref([])

const multipleSelects = ref([
  { title: 'multipleSelect 1', value: 0 },
  { title: 'multipleSelect 2', value: 1 },
  { title: 'multipleSelect 3', value: 2 },
])

const combobox = ref({ title: '', value: 0 })

const comboboxes = ref([
  { title: 'combobox 1', value: 0 },
  { title: 'combobox 2', value: 1 },
  { title: 'combobox 3', value: 2 },
])

const onClick = () => {
  console.log(text.value)
}

// 詳細trの表示・非表示を切り替える実装
const onExpandRow = (i: number) => {
  if (isExpansion.value[i]) {
    isExpansion.value[i] = false
  } else {
    isExpansion.value[i] = true
  }
}

const onClose = () => {
  console.log('closed')
}

const onClickRightBtn = () => {
  isDialog.value = false
  console.log('ok')
}

const handlePagenation = () => {
  console.log(currentPage.value)
}
</script>

<template>
  <div style="margin: 32px">
    <BaseSearchBox
      v-model="searchBox"
      :searchMultipleSelect="multipleSelect"
      :multipleSelects="multipleSelects"
      :searchSelect="searchSelect"
      :selects="selects"
      style="width: 312px"
    />
    <BaseTextField v-model="text" />
    <BaseButton variant="elevated" @onClick="onClick"
      >ボタン Primary</BaseButton
    >
    <BaseButton variant="outlined" @onClick="onClick"
      >ボタン outlined</BaseButton
    >
    <BaseButton variant="text" @onClick="onClick">ボタン text</BaseButton>
    <BaseButton size="small" @onClick="onClick">ボタン small</BaseButton>
    <BaseButton size="default" @onClick="onClick">ボタン default</BaseButton>
    <BaseButton size="large" @onClick="onClick">ボタン large</BaseButton>
    <BaseCheckbox v-model="check" />
    <BaseChip closable @onClose="onClose">chip</BaseChip>
    <BaseRadioGroup v-model="radio">
      <div v-for="(radioType, i) in radioTypes" :key="i">
        <BaseRadio :value="radioType.value" :label="radioType.label" />
      </div>
    </BaseRadioGroup>
    <BaseSelect :items="selects" />
    <BaseBreadcrumbs :items="breadcrumbs"></BaseBreadcrumbs>
    <BaseDatepicker />
    <BaseDialog v-model="isDialog"
      ><template #activator>
        <BaseButton @onClick="isDialog = true">ダイアログ</BaseButton>
      </template>
      <VCard>
        <div class="d-flex flex-row justify-space-between w-100 pa-6">
          <VCardTitle class="text-body font-weight-bold pa-0"
            >タイトル</VCardTitle
          >
          <VCardActions class="pa-0">
            <div>
              <BaseButton variant="text" @onClick="isDialog = false"
                >キャンセル</BaseButton
              >
              <BaseButton @onClick="onClickRightBtn">OK</BaseButton>
            </div>
          </VCardActions>
        </div>
        <VDivider />
        <VCardText> メッセージ </VCardText>
      </VCard>
    </BaseDialog>
    <BaseMenu v-model="isMenu">
      <template #activator="{ props }">
        <BaseButton v-bind="props">メニュー</BaseButton>
      </template>
      <VList>
        <VListItem>
          <VListItemTitle>Menu 1</VListItemTitle>
        </VListItem>
        <VListItem>
          <VListItemTitle>Menu 2</VListItemTitle>
        </VListItem>
        <VListItem>
          <VListItemTitle>Menu 3</VListItemTitle>
        </VListItem>
      </VList>
    </BaseMenu>
    <BaseTable>
      <template #header>
        <thead>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>
        </thead>
      </template>
      <template #body>
        <tbody>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
          </tr>
        </tbody>
      </template>
    </BaseTable>
    <BasePagenation
      v-model="currentPage"
      @handlePagenation="handlePagenation"
    />
    <BaseMultipleSelect :items="multipleSelects" />
    <BaseCombobox v-model="combobox" :items="comboboxes" />
    <!-- 詳細trの表示・非表示を切り替える実装 -->
    <BaseTable>
      <template #header>
        <thead>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>
          <tr></tr>
        </thead>
      </template>
      <template #body>
        <tbody v-for="i in 3" :key="i" @click="onExpandRow(i)">
          <tr>
            <td class="text-body-2">a</td>
            <td class="text-body-2">b</td>
            <td class="text-body-2">c</td>
          </tr>
          <tr v-if="isExpansion[i]" class="-expand">
            <td class="text-body-2">a-expanded</td>
            <td class="text-body-2">b-expanded</td>
            <td class="text-body-2">c-expanded</td>
          </tr>
        </tbody>
      </template>
    </BaseTable>
    <!-- listTableを構成するコンポーネント（1カラムに相当） -->
    <BaseInnerList title="Inner List">
      <template #list-item-content>
        <VListItem v-for="i in 3" :key="i" class="px-3">
          <div class="d-flex flex-row align-center justify-start">
            <VListItemTitle class="mr-2 text-text text-caption"
              >Two-line item</VListItemTitle
            >
            <VListItemSubtitle class="text-text text-caption font-weight-bold"
              >Secondary text</VListItemSubtitle
            >
          </div>
        </VListItem>
      </template>
    </BaseInnerList>
    <!-- listTable（BaseTableコンポーネントでBaseInnerListをWrap） -->
    <BaseTable>
      <template #body>
        <tbody>
          <tr>
            <td class="pa-0">
              <BaseInnerList title="Inner List">
                <template #list-item-content>
                  <VListItem v-for="i in 3" :key="i" class="px-3">
                    <div class="d-flex flex-row align-center justify-start">
                      <VListItemTitle class="mr-2 text-text text-caption"
                        >Two-line item</VListItemTitle
                      >
                      <VListItemSubtitle
                        class="text-text text-caption font-weight-bold"
                        >Secondary text</VListItemSubtitle
                      >
                    </div>
                  </VListItem>
                </template>
              </BaseInnerList>
            </td>
            <td class="pa-0">
              <BaseInnerList title="Inner List">
                <template #list-item-content>
                  <VListItem v-for="i in 3" :key="i" class="px-3">
                    <div class="d-flex flex-row align-center justify-start">
                      <VListItemTitle class="mr-2 text-text text-caption"
                        >Two-line item</VListItemTitle
                      >
                      <VListItemSubtitle
                        class="text-text text-caption font-weight-bold"
                        >Secondary text</VListItemSubtitle
                      >
                    </div>
                  </VListItem>
                </template>
              </BaseInnerList>
            </td>
            <td class="pa-0">
              <BaseInnerList title="Inner List">
                <template #list-item-content>
                  <VListItem v-for="i in 3" :key="i" class="px-3">
                    <div class="d-flex flex-row align-center justify-start">
                      <VListItemTitle class="mr-2 text-text text-caption"
                        >Two-line item</VListItemTitle
                      >
                      <VListItemSubtitle
                        class="text-text text-caption font-weight-bold"
                        >Secondary text</VListItemSubtitle
                      >
                    </div>
                  </VListItem>
                </template>
              </BaseInnerList>
            </td>
          </tr>
        </tbody>
      </template>
    </BaseTable>
  </div>
</template>

<style scoped lang="scss">
.expansion {
  &:not(.-open) {
    display: none;
  }
}

//BaseTableのslot内スタイル
base-data-table {
  th {
    border-bottom: 1.5px solid $color-text !important;
  }

  tr {
    &.-expand {
      background-color: $color-background-pale;
    }
  }
}

//BaseInnerListのslot内スタイル
.v-list-item-subtitle {
  opacity: 100 !important;
}

//BaseDialogのslot内スタイル
.v-card-actions {
  min-height: 32px;
}
</style>
