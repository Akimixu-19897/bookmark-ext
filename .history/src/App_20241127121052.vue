<!-- <template>
  <div class="popup_page">
    <div class="folder_box">
      <div
        v-for="folder in folderList"
        class="folder_item"
        :class="{ active: folder.id === activeFolder }"
        :key="folder.id"
        @click="changeFolder(folder)"
      >
        <div class="folder_title">{{ folder.title }}</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="notes_box">
      <div
        class="notes_item"
        v-for="note in activeFolderChildren"
        :key="note.id"
      >
        <div class="notes_title">{{ note.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const bookTree = ref([]);
const folderList = ref([]);
const activeFolder = ref(null);
const activeFolderChildren = ref([]);

const getFolderList = (tree) => {
  tree.forEach((item) => {
    if (item.children) {
      folderList.value.push(JSON.parse(JSON.stringify(item)));
      getFolderList(item.children);
    }
  });
};

const changeFolder = (folder) => {
  activeFolder.value = folder.id;
  activeFolderChildren.value = folder.children;
};

onMounted(() => {
  console.log("获取书签树2");
  chrome.bookmarks.getTree((bookmarkArray) => {
    console.log("🚀这是bookmarkArray的输出：", bookmarkArray);
    const a = JSON.parse(JSON.stringify(bookmarkArray));
    bookTree.value = JSON.parse(JSON.stringify(a[0].children));
    // 处理数据，所有带有children的节点都视为文件夹, 保存到folderList中
    getFolderList(bookTree.value);
    // 然后删除掉folderList每一个元素的children属性中的每一个带有children属性的子元素

    folderList.value.forEach((item) => {
      if (item.children) {
        // 循环item.children
        const delIndex = [];
        item.children.forEach((child, index) => {
          // 如果child.children存在，删除child
          if (child.children) {
            delIndex.push(index);
          }
        });
        for (let i = delIndex.length - 1; i >= 0; i--) {
          item.children.splice(delIndex[i], 1);
        }
      }
    });
    // 默认初始化选中第一个文件夹
    activeFolder.value = folderList.value[0].id;
    activeFolderChildren.value = folderList.value[0].children;
    console.log(
      "🚀这是activeFolderChildren的输出：",
      activeFolderChildren.value
    );
  });
});
</script>

<style lang="scss" scoped>
.popup_page {
  width: 784px;
  min-height: 584px;
  display: flex;
  .folder_box {
    width: 150px;
    height: 97vh;
    padding: 30px 10px;
    box-sizing: border-box;
    color: #878787;
    font-size: 14px;
    font-weight: 600;
    overflow-y: auto;
    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none;
    }
    .folder_item {
      padding: 3px 0;
      border-radius: 20px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &.active {
        color: var(--primary-300);
        background-color: var(--primary-100);
      }
    }
  }
  .line {
    width: 1px;
    height: calc(97vh - 20px);
    margin-top: 10px;
    background-color: #ffffff;
  }
  .notes_box {
    flex: 1;
    height: 97vh;
    padding: 30px 10px;
    overflow-y: auto;
    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none;
    }
    .notes_item {
      padding: 10px;
      border-radius: 10px;
      background-color: #ffffff;
      margin-bottom: 10px;
      cursor: pointer;
      .notes_title {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}
</style> -->

<template>
  <div>123456</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const bookTree = ref([]);
const folderList = ref([]);
const activeFolder = ref(null);
const activeFolderChildren = ref([]);

const getFolderList = (tree) => {
  tree.forEach((item) => {
    if (item.children) {
      folderList.value.push(JSON.parse(JSON.stringify(item)));
      getFolderList(item.children);
    }
  });
};

const changeFolder = (folder) => {
  activeFolder.value = folder.id;
  activeFolderChildren.value = folder.children;
};

onMounted(() => {
  console.log("获取书签树2");
  chrome.bookmarks.getTree((bookmarkArray) => {
    console.log("🚀这是bookmarkArray的输出：", bookmarkArray);
    const a = JSON.parse(JSON.stringify(bookmarkArray));
    bookTree.value = JSON.parse(JSON.stringify(a[0].children));
    // 处理数据，所有带有children的节点都视为文件夹, 保存到folderList中
    getFolderList(bookTree.value);
    // 然后删除掉folderList每一个元素的children属性中的每一个带有children属性的子元素

    folderList.value.forEach((item) => {
      if (item.children) {
        // 循环item.children
        const delIndex = [];
        item.children.forEach((child, index) => {
          // 如果child.children存在，删除child
          if (child.children) {
            delIndex.push(index);
          }
        });
        for (let i = delIndex.length - 1; i >= 0; i--) {
          item.children.splice(delIndex[i], 1);
        }
      }
    });
    // 默认初始化选中第一个文件夹
    activeFolder.value = folderList.value[0].id;
    activeFolderChildren.value = folderList.value[0].children;
    console.log(
      "🚀这是activeFolderChildren的输出：",
      activeFolderChildren.value
    );
  });
});
</script>
