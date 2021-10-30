<template>
  <div id="manage">
    <div class="mini-menu">
      <ManageMiniMenu/>
    </div>
    <div class="edit-page">
      <ManageEditor/>
    </div>
  </div>
</template>

<script>

import ManageEditor from './managePage/ManagePageEditor.vue'
import ManageMiniMenu from './managePage/ManagePageMenu.vue'
export default {
  components: { ManageEditor, ManageMiniMenu },
  name: 'Manage'
}

</script>

<style>
.mini-menu{
  width: 30px;
}
.edit-page{
  width:100%;
}
</style>