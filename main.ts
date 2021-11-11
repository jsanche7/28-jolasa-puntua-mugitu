input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Puntua.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.A, function () {
    Puntua.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Puntua.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Puntua.move(1)
})
let Puntua: game.LedSprite = null
Puntua = game.createSprite(2, 4)
