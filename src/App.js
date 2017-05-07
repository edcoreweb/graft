import CoreApp from './components/core/App'

export default {
  extends: CoreApp,
  data () {
    return {
      grafts: [
        {
          name: 'g-button',
          class: {
            'btn-default': true,
            'btn-primary': false
          },
          on: {
            click: (e, instance) => {
              console.log(instance)
            }
          },
        },
        {
          name: 'g-panel',
          scopedSlots: {
            title: () => 'Some awesome title.',
            content: () => 'Panel extra content'
          },
          grafts: [
            {
              name: 'g-button',
              on: {
                click: (e, instance) => {
                  console.log(instance)
                }
              }
            },
            { name: 'g-alert' },
            {
              name: 'g-panel',
              grafts: [
                {
                  name: 'g-button',
                  class: {
                    'btn-primary': false
                  },
                  on: {
                    click: (e, instance) => {
                      console.log(instance)
                    }
                  }
                },
                { name: 'g-alert' }
              ]
            },
          ]
        },
        {
          name: 'g-panel',
          scopedSlots: {
            title: () => 'Some awesome title.',
            content: () => 'Panel extra content'
          }
        },
        {
          name: 'g-alert'
        },
        {
          ref: 'main-modal',
          name: 'g-modal',
          scopedSlots: {
            title: () => 'Some awesome modal.',
            body: () => 'Some extra content'
          },
          on: {
            boot: (e, me) => {
              me.show();
            }
          },
          grafts: [
            {
              name: 'g-button',
              on: {
                click: (e, me) => {
                  console.log(me);
                  me.$parent.$parent.hide();
                }
              },
            },
          ]
        }
      ],
    }
  },
}
