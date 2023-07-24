import { observable } from '@legendapp/state'
import { persistObservable } from '@legendapp/state/persist'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'
import { configureObservablePersistence } from '@legendapp/state/persist'


export const terrainDimensions = observable({h:200,w:200, octaves:2})

export const showCreateLoopBottomSheetFooter = observable(true)

export const showBetaMessage = observable(true)

// // Global configuration
// configureObservablePersistence({
//     persistLocal: ObservablePersistLocalStorage
// })


// persistObservable(terrainDimensions, {
//     local: 'terrain-dimensions' 
    
// })
// persistObservable(showBetaMessage, {
//   local: 'beta-message'

// })

// persistObservable(animationFinished, {
//   local: 'animation-finished'
// })


