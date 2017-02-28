export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Introduction',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: '19th Century',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          /*{
            path: 'ckeditor',
            data: {
              menu: {
                title: 'CKEditor',
              }
            }
          },*/
          {
            path: 'nineteenTen',
            data: {
              menu: {
                title: '1810',
              }
            }
          },
          {
            path: 'nineteenTwenty',
            data: {
              menu: {
                title: '1820',
              }
            }
          },
          {
            path: 'nineteenThirty',
            data: {
              menu: {
                title: '1830',
              }
            }
          },
          {
            path: 'nineteenFourty',
            data: {
              menu: {
                title: '1840',
              }
            }
          },
          {
            path: 'nineteenFifty',
            data: {
              menu: {
                title: '1850',
              }
            }
          },
          {
            path: 'nineteenSixty',
            data: {
              menu: {
                title: '1860',
              }
            }
          },
          {
            path: 'nineteenSeventy',
            data: {
              menu: {
                title: '1870',
              }
            }
          },
          {
            path: 'nineteenEighty',
            data: {
              menu: {
                title: '1880',
              }
            }
          },
          {
            path: 'nineteenNinety',
            data: {
              menu: {
                title: '1890',
              }
            }
          }
        ]
      },
      {
        path: 'twentieth',
        data: {
          menu: {
            title: '20th Century',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'nineteenTen',
            data: {
              menu: {
                title: '1910',
              }
            }
          },
          {
            path: 'nineteenTwenty',
            data: {
              menu: {
                title: '1920',
              }
            }
          },
          {
            path: 'nineteenThirty',
            data: {
              menu: {
                title: '1930',
              }
            },
          {
            path: 'nineteenFourty',
            data: {
              menu: {
                title: '1940',
              }
            }
          },
          {
            path: 'nineteenFifty',
            data: {
              menu: {
                title: '1950',
              }
            }
          },
          {
            path: 'nineteenSixty',
            data: {
              menu: {
                title: '1960',
              }
            }
          },
          {
            path: 'nineteenSeventy',
            data: {
              menu: {
                title: '1970',
              }
            }
          },
          {
            path: 'nineteenEighty',
            data: {
              menu: {
                title: '1980',
              }
            }
          },
          {
            path: 'nineteenNinety',
            data: {
              menu: {
                title: '1990',
              }
            }
          }
        ]
      }
    ]
];


/*,
      {
        path: 'components',
        data: {
          menu: {
            title: 'Components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'Tree View',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'Charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'Chartist.Js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'UI Features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'Typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'Buttons',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'Icons',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'Modals',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'Grid',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'Form Elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'Form Layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'Tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'Basic Tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'Smart Tables',
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'Maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'Google Maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'Leaflet Maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'Bubble Maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'Line Maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Menu Level 1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'Menu Level 1.2.1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'External Link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];*/
