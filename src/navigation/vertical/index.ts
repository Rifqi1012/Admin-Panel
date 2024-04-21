// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'tabler:smart-home'
    },
    
    {
      sectionTitle: 'Petugas'
    },
    {
      title: 'Petugas',
      icon: 'tabler:user',
      children: [
        {
          title: 'Pendaratan',
          path: '/petugas/pendaratan'
        },
        {
          title: 'Persemaian',
          path: '/petugas/persemaian'
        },
        {
          title: 'Penetasan',
          path: '/petugas/penetasan'
        },
        {
          title: 'Karantina',
          path: '/petugas/karantina'
        },
        {
          title: 'Pelepasan',
          path: '/petugas/pelepasan'
        }
      ]
    },
    {
      sectionTitle: 'Pendamping'
    },
    {
      title: 'Pendamping',
      icon: 'tabler:user',
      children: [
        {
          title: 'Pendaratan',
          path: '/pendamping/pendaratan'
        },
        {
          title: 'Persemaian',
          path: '/pendamping/persemaian'
        },
        {
          title: 'Penetasan',
          path: '/pendamping/penetasan'
        },
        {
          title: 'Karantina',
          path: '/pendamping/karantina'
        },
        {
          title: 'Pelepasan',
          path: '/pendamping/pelepasan'
        }
      ]
    },
    {
      sectionTitle: 'Koordinator'
    },
    {
      title: 'Koordinator',
      icon: 'tabler:user',
      children: [
        {
          title: 'Pendaratan',
          path: '/koor/pendaratan'
        },
        {
          title: 'Persemaian',
          path: '/koor/persemaian'
        },
        {
          title: 'Penetasan',
          path: '/koor/penetasan'
        },
        {
          title: 'Karantina',
          path: '/koor/karantina'
        },
        {
          title: 'Pelepasan',
          path: '/koor/pelepasan'
        }
      ]
    }

  ]
}

export default navigation
