controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaEnemy1`, spacePlane, 200, 0)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(assets.image`bluePlane`, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(assets.image`BlueBaumer0`, SpriteKind.Player)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
})
