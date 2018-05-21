<template>
  <NavigationLayout :back="true" :menu="true">
    <MenuList
      v-for="(menu, index) in menus"
      :key="index"
      :name="menu.name"
      :items="menu.items"
    ></MenuList>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import MenuList from '@/components/shared/MenuList'

export default {
  name: 'Account',

  components: {
    NavigationLayout,
    MenuList
  },

  data () {
    return {
      menus: [
        {
          name: 'General',
          items: [
            {
              name: 'Favorite Courses',
              icon: 'fav-courses-icon.svg'
            },
            {
              name: 'My Friends',
              icon: 'my-friends-icon.svg',
              count: '50'
            },
            {
              name: 'Achievements',
              icon: 'achievements-icon.svg'
            }
          ]
        },
        {
          name: 'Settings',
          items: [
            {
              name: 'Edit Login Details',
              icon: 'edit-login-details-icon.svg'
            },
            {
              name: 'Update Interests',
              icon: 'update-interests-icon.svg'
            },
            {
              name: 'Blocked Users',
              icon: 'block-users-icon.svg'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
