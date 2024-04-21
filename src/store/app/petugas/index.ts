// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import Pendaratan from 'src/store/app/petugas/pendaratan'
import Persemaian from 'src/store/app/petugas/persemaian'
import Penetasan from 'src/store/app/petugas/penetasan'
import Karantina from 'src/store/app/petugas/karantina'
import Pelepasan from 'src/store/app/petugas/pelepasan'

export const store = configureStore({
  reducer: {
    Pendaratan,
    Persemaian,
    Penetasan,
    Karantina,
    Pelepasan
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
