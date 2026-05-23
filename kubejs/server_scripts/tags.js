// Listen to the fluid tag event
ServerEvents.tags('fluids', event => {
  event.add('create:bottomless/allow', 'minecraft:lava')
})
