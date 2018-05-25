<template>
  <NavigationLayout :back="true" :menu="true">
    <AccountHeader :user="user"></AccountHeader>
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
import AccountHeader from '@/components/AccountHeader'

export default {
  name: 'Account',

  components: {
    NavigationLayout,
    MenuList,
    AccountHeader
  },

  data () {
    return {
      user: {
        avatar: 'account-img.jpg',
        name: 'Nimasha Perera',
        points: '390,239',
        badges: [
          {
            name: 'badge name',
            image: 'achieve_img_3.svg'
          },
          {
            name: 'badge name 1',
            image: 'achieve_img_2.svg'
          }
        ]
      },
      menus: [
        {
          name: 'General',
          items: [
            {
              name: 'Favorite Courses',
              icon: 'fav-courses-icon.svg',
              link: '/courses'
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
.header {
  margin-bottom: 40px;
}
</style>
