import CoreApp from './components/core/App'

export default {
  extends: CoreApp,
  data () {
    return {
      grafts: [
        {
          name: 'g-navbar',
        },
        {
          name: 'g-container',
          grafts: [
            {
              name: 'g-panel',
              scopedSlots: {
                title: () => this.$createElement('div', [
                  this.$createElement('p', 'Some awesome title.'),
                  this.$createElement('span', '11')
                ]),
                content: () => 'Panel extra content'
              },
              on: {
                updated: (e, me) => {
                  console.log('hard-coded change');
                  me.$el.getElementsByClassName('panel-title')[0].innerHTML = 'Some awesome title. <span>22</span>';
                  // this.grafts[1].grafts[0].scopedSlots.title = () => {
                  //   return 2;
                  // };
                  // console.log(me.$el.innerHTML = '!!!!')
                }
              },
              grafts: [
                {
                  name: 'g-button',
                  on: {
                    click: (e, me) => {
                      console.log('reactive change');
                      // me.find('modal').show()
                      // this.grafts[1].grafts[0]['asd'] = 'asd';
                      this.grafts[1].grafts[0].scopedSlots.title = () => this.$createElement('div', [
                        this.$createElement('h1', 'hello world1'),
                        this.$createElement('p', 'Test1')
                      ])
                    }
                  },
                },
                {
                  lookup: 'modal',
                  name: 'g-modal',
                  scopedSlots: {
                    title: () => 'Some awesome modal.',
                    body: () => 'Some extra content'
                  },
                  grafts: [
                    {
                      name: 'g-button',
                      slot: 'footer',
                      on: {
                        click: (e, me) => {
                          // me.$parent.hide();
                          me.find('modal').hide()
                        }
                      },
                    },
                  ]
                }
              ]
            },
            {
              name: 'g-panel',
              scopedSlots: {
                title: () => 'Some awesome title.',
                default: () => 'Panel extra content'
              },
              grafts: [
                {name: 'g-alert'},
                {name: 'g-alert'},
              ]
            }
          ]
        },
        // {
        //   name: 'g-panel',
        //   scopedSlots: {
        //     title: () => 'Some awesome title.',
        //     content: () => 'Panel extra content'
        //   },
        //   grafts: [
        //     {
        //       name: 'g-button',
        //       on: {
        //         click: (e, instance) => {
        //           console.log(instance)
        //         }
        //       }
        //     },
        //     { name: 'g-alert' },
        //     {
        //       name: 'g-panel',
        //       grafts: [
        //         {
        //           name: 'g-button',
        //           class: {
        //             'btn-primary': false
        //           },
        //           on: {
        //             click: (e, instance) => {
        //               console.log(instance)
        //             }
        //           }
        //         },
        //         { name: 'g-alert' }
        //       ]
        //     },
        //   ]
        // },
        // {
        //   name: 'g-panel',
        //   scopedSlots: {
        //     title: () => 'Some awesome title.',
        //     content: () => 'Panel extra content'
        //   }
        // },
        // {
        //   name: 'g-alert'
        // },
        // {
        //   ref: 'main-modal',
        //   name: 'g-modal',
        //   scopedSlots: {
        //     title: () => 'Some awesome modal.',
        //     body: () => 'Some extra content'
        //   },
        //   on: {
        //     boot: (e, me) => {
        //       me.show();
        //     }
        //   },
        //   grafts: [
        //     {
        //       name: 'g-button',
        //       on: {
        //         click: (e, me) => {
        //           console.log(me);
        //           me.$parent.$parent.hide();
        //         }
        //       },
        //     },
        //   ]
        // }
      ],
    }
  },
}
