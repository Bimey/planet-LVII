namespace SpriteKind {
    export const UndyingEnemy = SpriteKind.create()
    export const Ghost = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const Pickup = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile5, function (sprite, location) {
    info.changeLifeBy(maxHeath - (maxHeath + maxHeath))
    game.splash("those waters are sea ", "monster infested")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    if (beingHuanted == 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Ghost, effects.none, 500)
        hauntingGhost = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 f f 1 1 f f 1 1 . . . 
            . . . 1 1 f f 1 1 f f 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 2 1 1 . . . 
            . . . 1 1 1 1 1 1 1 8 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 . 1 . 1 . 1 . 1 . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.NPC)
        tiles.placeOnTile(hauntingGhost, tiles.getTileLocation(24, 33))
        beingHuanted = 1
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -145
        jump = true
    } else if (jump == true) {
        mySprite.vy += -250
        jump = false
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pickup, function (sprite, otherSprite) {
    if (otherSprite == itemStand) {
        blaster = 1
        otherSprite.setImage(img`
            .....................
            ...7777777777777.....
            ..777777777777777....
            .77777777777777777...
            .7777ffc222cfff777...
            .777fffcccccffff77.a.
            .777fffffffffff777...
            .7777fffffffff7777...
            .77777fff777777777...
            .77777fff777777777...
            .77777fff777777777...
            .77777fff777777777...
            ..77777f777777777....
            ...7777777777777.....
            .....................
            `)
        if (toolbar.get_items()[toolbar.get_number(ToolbarNumberAttribute.SelectedIndex)].get_text(ItemTextAttribute.Name) == "nothing") {
            toolbar.get_items()[toolbar.get_number(ToolbarNumberAttribute.SelectedIndex)] = Inventory.create_item("blaster", img`
                . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . 
                . . . . f f c 2 2 2 c f f f . . . . 
                . . . f f f c c c c c f f f f . . . 
                . . . f f f f f f f f f f f . . . . 
                . . . . f f f f f f f f f . . . . . 
                . . . . . f f f . . . . . . . . . . 
                . . . . . f f f . . . . . . . . . . 
                . . . . . f f f . . . . . . . . . . 
                . . . . . f f f . . . . . . . . . . 
                . . . . . . f . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . 
                `)
            sprites.destroy(otherSprite, effects.confetti, 500)
            claimed2 = 1
            game.splash("claimed!")
        }
        game.splash("overlapped with itemstand!")
    }
    game.splash("overlapped!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ghost, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    toolbar.set_number(ToolbarNumberAttribute.SelectedIndex, toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) + 1)
    if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) + 1 > toolbar.get_number(ToolbarNumberAttribute.MaxItems)) {
        toolbar.set_number(ToolbarNumberAttribute.SelectedIndex, 0)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile6, function (sprite, location) {
    info.changeLifeBy(maxHeath - (maxHeath + maxHeath))
    game.splash("those waters are sea ", "monster infested")
})
function makeToolbar () {
    toolbar = Inventory.create_toolbar([Inventory.create_item("darts", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 2 . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `), Inventory.create_item("nothing", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `), Inventory.create_item("nothing", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)], 3)
    toolbar.left = 4
    toolbar.bottom = scene.screenHeight() - 4
    toolbar.z = 100
    toolbar.setFlag(SpriteFlag.RelativeToCamera, true)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 5))
    if (claimed1 == 0) {
        maxHeath += 1
        game.splash("You're Max Heath has", "been increased to")
        game.splash(maxHeath)
        claimed1 = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    Area = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    Area = 3
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (darts2 == 1 && toolbar.get_items()[toolbar.get_number(ToolbarNumberAttribute.SelectedIndex)].get_text(ItemTextAttribute.Name) == "darts") {
        myDart = darts.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 . . . . . . . . . . . . . 
            . . . 2 . . . . . . . . . . . . 
            . . . . 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 2 . . . . . . . . . . . . 
            . . 2 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile, mySprite.x, mySprite.y)
        if (facingLeft == 1) {
            myDart.angle = 180
            myDart.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . 2 . . 
                . . . . . . . . . . . . 2 . . . 
                . . 1 1 1 1 1 1 1 1 1 1 . . . . 
                . . . . . . . . . . . . 2 . . . 
                . . . . . . . . . . . . . 2 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else if (facingRight == 1) {
            myDart.angle = 360
            myDart.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 2 . . . . . . . . . . . . . 
                . . . 2 . . . . . . . . . . . . 
                . . . . 1 1 1 1 1 1 1 1 1 1 . . 
                . . . 2 . . . . . . . . . . . . 
                . . 2 . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        myDart.throwDart()
        pause(1000)
    } else if (blaster == 1 && toolbar.get_items()[toolbar.get_number(ToolbarNumberAttribute.SelectedIndex)].get_text(ItemTextAttribute.Name) == "blaster") {
        if (facingLeft == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . a a a a a a a a a a a a a . 
                . . a a a a a a a a a a a a a . 
                . . a a a a a a a a a a a a a . 
                . . a a a a a a a a a a a a a . 
                . . a a a a a a a a a a a a a . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -90, 0)
        } else if (facingRight == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . a a a a a a a a a a a a a . 
                . . a a a a a a a a a a a a a . 
                . . a a a a a a a a a a a a a . 
                . . a a a a a a a a a a a a a . 
                . . a a a a a a a a a a a a a . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 90, 0)
        }
        pause(500)
        pause(200)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    Area = 1
    forestEntrance = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    Area = 1
    forestEntrance = 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facingLeft = 1
    facingRight = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    volcanoEntrance = 1
    Area = 4
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    Area = 5
    ghostEntrance = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    info.changeLifeBy(0 - maxHeath)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    Area = 1
    forestEntrance = 3
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facingRight = 1
    facingLeft = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    info.setLife(maxHeath)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    info.changeLifeBy(maxHeath - (maxHeath + maxHeath))
    game.splash("those waters are sea ", "monster infested")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    Checkpoint = 1
    tiles.setTileAt(tiles.getTileLocation(22, 51), assets.tile`myTile42`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.UndyingEnemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    if (Checkpoint == 0) {
        scene.setBackgroundImage(img`
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
            7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
            7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
            6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
            6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
            6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
            6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
            6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
            66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
            66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
            66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
            66b6666666abb66666666aa66bbb66666666666666b6666666abb66666666aa66bbb66666666666666b6666666abb66666666aa66bbb66666666666666b6666666abb66666666aa66bbb666666666666
            66b666666aadbb666666dda666bb66666666666666b666666aaabb666666aaa666bb66666666666666b666666aaabb666666aaa666bb66666666666666b666666aaabb666666aaa666bb666666666666
            6bb666966aa66bbb6a666daa66bb6666666666666bb666966aa66bbb6a666daa66bb6666666666666bb666966aa66bbb6a666daa66bb6666666666666bb666a66aa66bbb6a666daa66bb666666666666
            6bb666da66a6dabbbaa66daa66bbb666666666666bb666da66a6dabbbaa66daa66bbb666666666666bb666da66a6dabbbaa66daa66bbb666666666666bb666da66a6dabbbaa66daa66bbb66666666666
            6bb66ddaaaadaa6bbaaddda6666bb666666666666bb66ddaaaadaa6bbaaddda6666bb666666666666bb66ddaaaadaa6bbaaddda6666bb666666666666bb66ddaaaadaa6bbaaddda6666bb66666666666
            bbb666daaaadaa6bbaaddaa66adbbb66a6666666bbb666daaaadaa6bbaaddaa66adbbb66a6666666bbb666daaaadaa6bbaaddaa66adbbb66a6666666bbb666daaaadaa6bbaaddaa66adbbb66a6666666
            bbbdd6daaaadaaabbbaddaaaaa6bbb66aaa66666bbbdd6daaaadaaabbbaddaaaaa6bbb66aaa66666bbbdd6daaaadaaabbbaddaaaaa6bbb66aaa66666bbbdd6daaaadaaabbbaddaaaaa6bbb66aaa66666
            bbb6dddaaaadaaaabbaddaaaad6bbba6aa666666bbb6dddaaaadaaaabbaddaaaad6bbba6aa666666bbb6dddaaaadaaaabbaddaaaad6bbba6aa666666bbb6dddaaaadaaaabbaddaaaad6bbba6aa666666
            bbb6dddaaadaaaaabbbddaaaadabbbaaaa66aa66bbb6dddaaadaaaaabbbddaaaadabbbaaaa66aa66bbb6dddaaadaaaaabbbddaaaadabbbaaaa66aa66bbb6dddaaadaaaaabbbddaaaadabbbaaaa66aa66
            bbbddddaaadaaaaaabbddaaaadabbbbaaaadaaa6bbbddddaaadaaaaaabbddaaaadabbbbaaaadaaa6bbbddddaaadaaaaaabbddaaaadabbbbaaaadaaa6bbbddddaaadaaaaaabbddaaaadabbbbaaaadaaa6
            bbaddddaaddaaaaaaabbaaaaddabbbbaaaadaaaabbaddddaaddaaaaaaabbaaaaddabbbbaaaadaaaabbaddddaaddaaaaaaabbaaaaddabbbbaaaadaaaabbaddddaaddaaaaaaabbaaaaddabbbbaaaadaaaa
            bbaadddddaaaaaaaaabbbaaadaaabbbaaaadaaaabbaadddddaaaaaaaaabbbaaadaaabbbaaaadaaaabbaadddddaaaaaaaaabbbaaadaaabbbaaaadaaaabbaadddddaaaaaaaaabbbaaadaaabbbaaaadaaaa
            bbaaddddaaaaaaaaaadbbbbddaaabbbaaaadaaabbbaaddddaaaaaaaaaadbbbbddaaabbbaaaadaaabbbaaddddaaaaaaaaaadbbbbddaaabbbaaaadaaabbbaaddddaaaaaaaaaadbbbbddaaabbbaaaadaaab
            bbaadddaaaaaaaaaaaddbbbbaaaabbbbaaadaaabbbaadddaaaaaaaaaaaddbbbbaaaabbbbaaadaaabbbaadddaaaaaaaaaaaddbbbbaaaabbbbaaadaaabbbaadddaaaaaaaaaaaddbbbbaaaabbbbaaadaaab
            bbaadddaaaaaaaaaaaddbbbbbbaabbbbaaadaaabbbaadddaaaaaaaaaaaddbbbbbbaabbbbaaadaaabbbaadddaaaaaaaaaaaddbbbbbbaabbbbaaadaaabbbaadddaaaaaaaaaaaddbbbbbbaabbbbaaadaaab
            baaaaddaaaaaaaaaaddddbbbbbbbbbbbbaaadaabbaaaaddaaaaaaaaaaddddbbbbbbbbbbbbaaadaabbaaaaddaaaaaaaaaaddddbbbbbbbbbbbbaaadaabbaaaaddaaaaaaaaaaddddbbbbbbbbbbbbaaadaab
            baaaadddaaaaaaaaaddaaaaabbbbbbbbbaaadaabbaaaadddaaaaaaaaaddaaaaabbbbbbbbbaaadaabbaaaadddaaaaaaaaaddaaaaabbbbbbbbbaaadaabbaaaadddaaaaaaaaaddaaaaabbbbbbbbbaaadaab
            baaaaddddaaaaaaaaddaaaaaabbbbbbbbaaadabbbaaaaddddaaaaaaaaddaaaaaabbbbbbbbaaadabbbaaaaddddaaaaaaaaddaaaaaabbbbbbbbaaadabbbaaaaddddaaaaaaaaddaaaaaabbbbbbbbaaadabb
            baaaadddddaaaaaadddaaaaaaabbbbbbbaaadbbbbaaaadddddaaaaaadddaaaaaaabbbbbbbaaadbbbbaaaadddddaaaaaadddaaaaaaabbbbbbbaaadbbbbaaaadddddaaaaaadddaaaaaaabbbbbbbaaadbbb
            ddaaaaadddddaaaadddaaaaaaaaabbbbbaaabbbbddaaaaadddddaaaadddaaaaaaaaabbbbbaaabbbbddaaaaadddddaaaadddaaaaaaaaabbbbbaaabbbbddaaaaadddddaaaadddaaaaaaaaabbbbbaaabbbb
            adaaaaadddddddadddaaaaaaaaaabbbbbaabbbbaadaaaaadddddddadddaaaaaaaaaabbbbbaabbbbaadaaaaadddddddadddaaaaaaaaaabbbbbaabbbbaadaaaaadddddddadddaaaaaaaaaabbbbbaabbbba
            adaaaaaaddddddddddaaaaaaaaaabbbbbaabbbaaadaaaaaaddddddddddaaaaaaaaaabbbbbaabbbaaadaaaaaaddddddddddaaaaaaaaaabbbbbaabbbaaadaaaaaaddddddddddaaaaaaaaaabbbbbaabbbaa
            adaaaaaadddddddddaaaaaaaaaaabbbbbaabbaaaadaaaaaadddddddddaaaaaaaaaaabbbbbaabbaaaadaaaaaadddddddddaaaaaaaaaaabbbbbaabbaaaadaaaaaadddddddddaaaaaaaaaaabbbbbaabbaaa
            addaaaaadddddddaaaaaaaaaaaaabbbbbaabbdaaaddaaaaadddddddaaaaaaaaaaaaabbbbbaabbdaaaddaaaaadddddddaaaaaaaaaaaaabbbbbaabbdaaaddaaaaadddddddaaaaaaaaaaaaabbbbbaabbdaa
            aaddaaaaddddddaaaaaaaaaaaaaabbbbbaabbdaaaaddaaaaddddddaaaaaaaaaaaaaabbbbbaabbdaaaaddaaaaddddddaaaaaaaaaaaaaabbbbbaabbdaaaaddaaaaddddddaaaaaaaaaaaaaabbbbbaabbdaa
            aadddaaaddddddaaaaaaaaaaaaaabbbbbabbbddaaadddaaaddddddaaaaaaaaaaaaaabbbbbabbbddaaadddaaaddddddaaaaaaaaaaaaaabbbbbabbbddaaadddaaaddddddaaaaaaaaaaaaaabbbbbabbbdda
            aaaaddddddddddaaaaaaaaaaaaabbbbbbabbbadaaaaaddddddddddaaaaaaaaaaaaabbbbbbabbbadaaaaaddddddddddaaaaaaaaaaaaabbbbbbabbbadaaaaaddddddddddaaaaaaaaaaaaabbbbbbabbbada
            aaaaddddddddddaaaaaaaaaaaaabbbbbbbbbaadaaaaaddddddddddaaaaaaaaaaaaabbbbbbbbbaadaaaaaddddddddddaaaaaaaaaaaaabbbbbbbbbaadaaaaaddddddddddaaaaaaaaaaaaabbbbbbbbbaada
            aaaaaaddddddddaaaaaaaaaaaaabbbbbbbbbaaddaaaaaaddddddddaaaaaaaaaaaaabbbbbbbbbaaddaaaaaaddddddddaaaaaaaaaaaaabbbbbbbbbaaddaaaaaaddddddddaaaaaaaaaaaaabbbbbbbbbaadd
            daaaaaaaddddddaaaaaaaaaaaabbbbbbbbbaaaaddaaaaaaaddddddaaaaaaaaaaaabbbbbbbbbaaaaddaaaaaaaddddddaaaaaaaaaaaabbbbbbbbbaaaaddaaaaaaaddddddaaaaaaaaaaaabbbbbbbbbaaaad
            ddaaaaaaadddddaaaaaaaaaaaabbbbbbbbbaaaaaddaaaaaaadddddaaaaaaaaaaaabbbbbbbbbaaaaaddaaaaaaadddddaaaaaaaaaaaabbbbbbbbbaaaaaddaaaaaaadddddaaaaaaaaaaaabbbbbbbbbaaaaa
            ddaaaaaaadddddaaaaaaaaaaaabbbbbbbbaaaaaaddaaaaaaadddddaaaaaaaaaaaabbbbbbbbaaaaaaddaaaaaaadddddaaaaaaaaaaaabbbbbbbbaaaaaaddaaaaaaadddddaaaaaaaaaaaabbbbbbbbaaaaaa
            adaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaa
            adaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaa
            adaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaa
            adaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaa
            addaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaaddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaaddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaaddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaa
            addaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaaddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaaddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaaddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaa
            dddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaadddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaadddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaadddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaa
            ddaaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaa
            ddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaa
            ddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaa
            ddaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaa
            daaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaad
            daaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadd
            daaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadd
            aaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaaddd
            aaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaaddd
            aaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaaddd
            aaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddddaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddddaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddddaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaadddd
            aaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddddaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddddaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddddaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaadddd
            aaaaaaaaaddddddddaaaaaaaabbbbbbbaaaadddaaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaadddaaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaadddaaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddd9
            aaaaaaaaaaddddddddaaaaaabbbbbbbbaaaadddaaaaaaaaaaaddddddddaaaaaabbbbbbbbaaaadddaaaaaaaaaaaddddddddaaaaaabbbbbbbbaaaadddaaaaaaaaaaaddddddddaaaaaabbbbbbbbaaaaddd9
            daaaaaaaaaddddddddaaaaaabbbbbbbbdddddddddaaaaaaaaaddddddddaaaaaabbbbbbbbdddddddddaaaaaaaaaddddddddaaaaaabbbbbbbbdddddddddaaaaaaaaaddddddddaaaaaabbbbbbbbdddddddd
            dddddaaaaaddddddddaaaaaabbbbbbbbbddddddddddddaaaaaddddddddaaaaaabbbbbbbbbddddddddddddaaaaaddddddddaaaaaabbbbbbbbbddddddddddddaaaaaddddddddaaaaaabbbbbbbbbddddddd
            ddddddddaadddddddddaaaddbbbbbbbbbdddddddddddddddaadddddddddaaaddbbbbbbbbbdddddddddddddddaadddddddddaaaddbbbbbbbbbdddddddddddddddaadddddddddaaaddbbbbbbbbbddddddd
            dddddddddddddddddddaddddbbbbbbbbbddddddddddddddddddddddddddaddddbbbbbbbbbddddddddddddddddddddddddddaddddbbbbbbbbbddddddddddddddddddddddddddaddddbbbbbbbbbddddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
            dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
            ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
            dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
            ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        tiles.setCurrentTilemap(tilemap`level9`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 14))
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.UndyingEnemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Ghost)
        info.setLife(maxHeath)
    } else if (Checkpoint == 1) {
        Area = 1
        forestEntrance = 4
        info.setLife(maxHeath)
    } else if (Checkpoint == 2) {
        tiles.setCurrentTilemap(tilemap`level6`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 12))
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.UndyingEnemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Ghost)
        info.setLife(maxHeath)
    } else {
        game.gameOver(false)
    }
    sprites.destroy(itemStand)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile7, function (sprite, location) {
    info.changeLifeBy(maxHeath - (maxHeath + maxHeath))
    game.splash("those waters are sea ", "monster infested")
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile9, function (sprite, location) {
    info.changeLifeBy(maxHeath - (maxHeath + maxHeath))
    game.splash("those waters are sea ", "monster infested")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    Area = 5
    ghostEntrance = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    Checkpoint = 2
    tiles.setTileAt(tiles.getTileLocation(7, 12), assets.tile`myTile23`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    Area = 4
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    Area = 0
    SiteEntrance = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    Area = 1
    forestEntrance = 2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    info.changeLifeBy(-1)
})
let Ghost2: Sprite = null
let Ghost1: Sprite = null
let TreeMonsters: Sprite = null
let Blazers: Sprite = null
let projectile: Sprite = null
let myDart: Dart = null
let toolbar: Inventory.Toolbar = null
let itemStand: Sprite = null
let hauntingGhost: Sprite = null
let ghostEntrance = 0
let volcanoEntrance = 0
let forestEntrance = 0
let SiteEntrance = 0
let beingHuanted = 0
let claimed2 = 0
let claimed1 = 0
let blaster = 0
let darts2 = 0
let Checkpoint = 0
let maxHeath = 0
let Area = 0
let facingRight = 0
let facingLeft = 0
let jump = false
let mySprite: Sprite = null
game.showLongText("You've have crash landed on an alien planet", DialogLayout.Bottom)
mySprite = sprites.create(img`
    ...............
    ...............
    ...11111111....
    ...11111111....
    ...11111111....
    ...11111111....
    ...11111111....
    ...111111b1....
    ...11111111....
    .888888888888..
    .888888888888..
    .888888888888..
    .888888888888..
    .888888888888..
    .888888888888..
    .888888888888..
    .888888888888..
    ....88...88....
    ....88...88....
    ....88...88....
    ....88...88....
    ....88...88....
    ....888..888...
    ....8888.8888..
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 350
let Common_Alien = sprites.create(img`
    ..........88........
    .........888........
    .........888........
    ........888.........
    888.....888.........
    88888...88..........
    ..888888888888......
    ...88881118888......
    ......81118818888...
    ......8111881888888.
    ......88888888.88888
    ......88888888....88
    ......88811888......
    .....8888888888888..
    ....888.....88888888
    ...888.....888..8888
    ...88......888....88
    ..88......888.......
    .888......888.......
    .88.......88........
    `, SpriteKind.Enemy)
jump = false
facingLeft = 0
facingRight = 0
Area = 0
maxHeath = 3
Checkpoint = 0
darts2 = 1
blaster = 0
claimed1 = 0
claimed2 = 0
beingHuanted = 0
SiteEntrance = 0
forestEntrance = 0
volcanoEntrance = 0
ghostEntrance = 0
info.setLife(3)
info.setScore(0)
scene.cameraFollowSprite(mySprite)
makeToolbar()
forever(function () {
    if (!(Area == 4.5)) {
        if (!(Area == 5.5)) {
            Common_Alien = sprites.create(img`
                ..........88........
                .........888........
                .........888........
                ........888.........
                888.....888.........
                88888...88..........
                ..888888888888......
                ...88881118888......
                ......81118818888...
                ......8111881888888.
                ......88888888.88888
                ......88888888....88
                ......88811888......
                .....8888888888888..
                ....888.....88888888
                ...888.....888..8888
                ...88......888....88
                ..88......888.......
                .888......888.......
                .88.......88........
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Common_Alien, assets.tile`myTile2`)
            for (let index = 0; index < 3; index++) {
                pause(5000)
            }
            pause(100)
        }
    }
})
forever(function () {
    if (facingRight == 1) {
        mySprite.setImage(img`
            ...............
            ...............
            ...11111111....
            ...11111111....
            ...11111111....
            ...11111111....
            ...11111111....
            ...111111b1....
            ...11111111....
            .888888888888..
            .888888888888..
            .888888888888..
            .888888888888..
            .888888888888..
            .888888888888..
            .888888888888..
            .888888888888..
            ....88...88....
            ....88...88....
            ....88...88....
            ....88...88....
            ....88...88....
            ....888..888...
            ....8888.8888..
            `)
    }
})
forever(function () {
    if (Area == 3 || Area == 3.5) {
        Blazers = sprites.create(img`
            . . . . 2 . . . . . . 2 2 . . . 
            . . . . 2 2 . . . . 2 2 . . 2 2 
            2 2 . . . 2 2 . . 2 2 . . 2 2 . 
            . 2 2 . . . 2 . 2 2 . . . 2 . . 
            . . 2 2 . . 2 2 2 . . . 2 2 . . 
            . . . 2 2 2 2 2 2 2 . 2 2 . . . 
            . . . . 2 2 4 2 4 2 2 2 . . . . 
            . . . . 2 2 4 2 4 2 2 . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 . . 2 2 
            2 2 2 . . 2 2 2 2 2 . 2 2 2 2 . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 . . . . 2 2 . . . . . 
            . . . 2 . . . . . . 2 2 . . . . 
            . . 2 2 . . . . . . . 2 2 2 . . 
            . 2 2 . . . . . . . . . . 2 2 . 
            2 2 . . . . . . . . . . . . . 2 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Blazers, assets.tile`myTile13`)
        for (let index = 0; index < 2; index++) {
            pause(5000)
        }
    }
    pause(100)
})
forever(function () {
    if (Area == 1 || Area == 1.5) {
        TreeMonsters = sprites.create(img`
            ...........8888.
            .........88888..
            ........68888...
            .......666......
            ......66666.....
            888..6666666....
            888886666666....
            .888666666666...
            ....666666666...
            ......66666.....
            .....6666666....
            .....6666666....
            ....666666666...
            ....666666666...
            ......66666.....
            .....6666666....
            .....6666666....
            ....666666666...
            ....666666666...
            .......ee.......
            .......ee.......
            `, SpriteKind.UndyingEnemy)
        tiles.placeOnRandomTile(TreeMonsters, assets.tile`myTile6`)
        for (let index = 0; index < 2; index++) {
            pause(5000)
        }
    }
    pause(100)
})
forever(function () {
    if (facingLeft == 1) {
        mySprite.setImage(img`
            ...............
            ...............
            ....11111111...
            ....11111111...
            ....11111111...
            ....11111111...
            ....11111111...
            ....1b111111...
            ....11111111...
            ..888888888888.
            ..888888888888.
            ..888888888888.
            ..888888888888.
            ..888888888888.
            ..888888888888.
            ..888888888888.
            ..888888888888.
            ....88...88....
            ....88...88....
            ....88...88....
            ....88...88....
            ....88...88....
            ...888..888....
            ..8888.8888....
            `)
    }
})
forever(function () {
    if (Area == 0) {
        scene.setBackgroundImage(img`
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
            7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
            7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
            6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
            6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
            6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
            6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
            6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
            66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
            66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
            66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
            66b6666666abb66666666aa66bbb66666666666666b6666666abb66666666aa66bbb66666666666666b6666666abb66666666aa66bbb66666666666666b6666666abb66666666aa66bbb666666666666
            66b666666aadbb666666dda666bb66666666666666b666666aaabb666666aaa666bb66666666666666b666666aaabb666666aaa666bb66666666666666b666666aaabb666666aaa666bb666666666666
            6bb666966aa66bbb6a666daa66bb6666666666666bb666966aa66bbb6a666daa66bb6666666666666bb666966aa66bbb6a666daa66bb6666666666666bb666a66aa66bbb6a666daa66bb666666666666
            6bb666da66a6dabbbaa66daa66bbb666666666666bb666da66a6dabbbaa66daa66bbb666666666666bb666da66a6dabbbaa66daa66bbb666666666666bb666da66a6dabbbaa66daa66bbb66666666666
            6bb66ddaaaadaa6bbaaddda6666bb666666666666bb66ddaaaadaa6bbaaddda6666bb666666666666bb66ddaaaadaa6bbaaddda6666bb666666666666bb66ddaaaadaa6bbaaddda6666bb66666666666
            bbb666daaaadaa6bbaaddaa66adbbb66a6666666bbb666daaaadaa6bbaaddaa66adbbb66a6666666bbb666daaaadaa6bbaaddaa66adbbb66a6666666bbb666daaaadaa6bbaaddaa66adbbb66a6666666
            bbbdd6daaaadaaabbbaddaaaaa6bbb66aaa66666bbbdd6daaaadaaabbbaddaaaaa6bbb66aaa66666bbbdd6daaaadaaabbbaddaaaaa6bbb66aaa66666bbbdd6daaaadaaabbbaddaaaaa6bbb66aaa66666
            bbb6dddaaaadaaaabbaddaaaad6bbba6aa666666bbb6dddaaaadaaaabbaddaaaad6bbba6aa666666bbb6dddaaaadaaaabbaddaaaad6bbba6aa666666bbb6dddaaaadaaaabbaddaaaad6bbba6aa666666
            bbb6dddaaadaaaaabbbddaaaadabbbaaaa66aa66bbb6dddaaadaaaaabbbddaaaadabbbaaaa66aa66bbb6dddaaadaaaaabbbddaaaadabbbaaaa66aa66bbb6dddaaadaaaaabbbddaaaadabbbaaaa66aa66
            bbbddddaaadaaaaaabbddaaaadabbbbaaaadaaa6bbbddddaaadaaaaaabbddaaaadabbbbaaaadaaa6bbbddddaaadaaaaaabbddaaaadabbbbaaaadaaa6bbbddddaaadaaaaaabbddaaaadabbbbaaaadaaa6
            bbaddddaaddaaaaaaabbaaaaddabbbbaaaadaaaabbaddddaaddaaaaaaabbaaaaddabbbbaaaadaaaabbaddddaaddaaaaaaabbaaaaddabbbbaaaadaaaabbaddddaaddaaaaaaabbaaaaddabbbbaaaadaaaa
            bbaadddddaaaaaaaaabbbaaadaaabbbaaaadaaaabbaadddddaaaaaaaaabbbaaadaaabbbaaaadaaaabbaadddddaaaaaaaaabbbaaadaaabbbaaaadaaaabbaadddddaaaaaaaaabbbaaadaaabbbaaaadaaaa
            bbaaddddaaaaaaaaaadbbbbddaaabbbaaaadaaabbbaaddddaaaaaaaaaadbbbbddaaabbbaaaadaaabbbaaddddaaaaaaaaaadbbbbddaaabbbaaaadaaabbbaaddddaaaaaaaaaadbbbbddaaabbbaaaadaaab
            bbaadddaaaaaaaaaaaddbbbbaaaabbbbaaadaaabbbaadddaaaaaaaaaaaddbbbbaaaabbbbaaadaaabbbaadddaaaaaaaaaaaddbbbbaaaabbbbaaadaaabbbaadddaaaaaaaaaaaddbbbbaaaabbbbaaadaaab
            bbaadddaaaaaaaaaaaddbbbbbbaabbbbaaadaaabbbaadddaaaaaaaaaaaddbbbbbbaabbbbaaadaaabbbaadddaaaaaaaaaaaddbbbbbbaabbbbaaadaaabbbaadddaaaaaaaaaaaddbbbbbbaabbbbaaadaaab
            baaaaddaaaaaaaaaaddddbbbbbbbbbbbbaaadaabbaaaaddaaaaaaaaaaddddbbbbbbbbbbbbaaadaabbaaaaddaaaaaaaaaaddddbbbbbbbbbbbbaaadaabbaaaaddaaaaaaaaaaddddbbbbbbbbbbbbaaadaab
            baaaadddaaaaaaaaaddaaaaabbbbbbbbbaaadaabbaaaadddaaaaaaaaaddaaaaabbbbbbbbbaaadaabbaaaadddaaaaaaaaaddaaaaabbbbbbbbbaaadaabbaaaadddaaaaaaaaaddaaaaabbbbbbbbbaaadaab
            baaaaddddaaaaaaaaddaaaaaabbbbbbbbaaadabbbaaaaddddaaaaaaaaddaaaaaabbbbbbbbaaadabbbaaaaddddaaaaaaaaddaaaaaabbbbbbbbaaadabbbaaaaddddaaaaaaaaddaaaaaabbbbbbbbaaadabb
            baaaadddddaaaaaadddaaaaaaabbbbbbbaaadbbbbaaaadddddaaaaaadddaaaaaaabbbbbbbaaadbbbbaaaadddddaaaaaadddaaaaaaabbbbbbbaaadbbbbaaaadddddaaaaaadddaaaaaaabbbbbbbaaadbbb
            ddaaaaadddddaaaadddaaaaaaaaabbbbbaaabbbbddaaaaadddddaaaadddaaaaaaaaabbbbbaaabbbbddaaaaadddddaaaadddaaaaaaaaabbbbbaaabbbbddaaaaadddddaaaadddaaaaaaaaabbbbbaaabbbb
            adaaaaadddddddadddaaaaaaaaaabbbbbaabbbbaadaaaaadddddddadddaaaaaaaaaabbbbbaabbbbaadaaaaadddddddadddaaaaaaaaaabbbbbaabbbbaadaaaaadddddddadddaaaaaaaaaabbbbbaabbbba
            adaaaaaaddddddddddaaaaaaaaaabbbbbaabbbaaadaaaaaaddddddddddaaaaaaaaaabbbbbaabbbaaadaaaaaaddddddddddaaaaaaaaaabbbbbaabbbaaadaaaaaaddddddddddaaaaaaaaaabbbbbaabbbaa
            adaaaaaadddddddddaaaaaaaaaaabbbbbaabbaaaadaaaaaadddddddddaaaaaaaaaaabbbbbaabbaaaadaaaaaadddddddddaaaaaaaaaaabbbbbaabbaaaadaaaaaadddddddddaaaaaaaaaaabbbbbaabbaaa
            addaaaaadddddddaaaaaaaaaaaaabbbbbaabbdaaaddaaaaadddddddaaaaaaaaaaaaabbbbbaabbdaaaddaaaaadddddddaaaaaaaaaaaaabbbbbaabbdaaaddaaaaadddddddaaaaaaaaaaaaabbbbbaabbdaa
            aaddaaaaddddddaaaaaaaaaaaaaabbbbbaabbdaaaaddaaaaddddddaaaaaaaaaaaaaabbbbbaabbdaaaaddaaaaddddddaaaaaaaaaaaaaabbbbbaabbdaaaaddaaaaddddddaaaaaaaaaaaaaabbbbbaabbdaa
            aadddaaaddddddaaaaaaaaaaaaaabbbbbabbbddaaadddaaaddddddaaaaaaaaaaaaaabbbbbabbbddaaadddaaaddddddaaaaaaaaaaaaaabbbbbabbbddaaadddaaaddddddaaaaaaaaaaaaaabbbbbabbbdda
            aaaaddddddddddaaaaaaaaaaaaabbbbbbabbbadaaaaaddddddddddaaaaaaaaaaaaabbbbbbabbbadaaaaaddddddddddaaaaaaaaaaaaabbbbbbabbbadaaaaaddddddddddaaaaaaaaaaaaabbbbbbabbbada
            aaaaddddddddddaaaaaaaaaaaaabbbbbbbbbaadaaaaaddddddddddaaaaaaaaaaaaabbbbbbbbbaadaaaaaddddddddddaaaaaaaaaaaaabbbbbbbbbaadaaaaaddddddddddaaaaaaaaaaaaabbbbbbbbbaada
            aaaaaaddddddddaaaaaaaaaaaaabbbbbbbbbaaddaaaaaaddddddddaaaaaaaaaaaaabbbbbbbbbaaddaaaaaaddddddddaaaaaaaaaaaaabbbbbbbbbaaddaaaaaaddddddddaaaaaaaaaaaaabbbbbbbbbaadd
            daaaaaaaddddddaaaaaaaaaaaabbbbbbbbbaaaaddaaaaaaaddddddaaaaaaaaaaaabbbbbbbbbaaaaddaaaaaaaddddddaaaaaaaaaaaabbbbbbbbbaaaaddaaaaaaaddddddaaaaaaaaaaaabbbbbbbbbaaaad
            ddaaaaaaadddddaaaaaaaaaaaabbbbbbbbbaaaaaddaaaaaaadddddaaaaaaaaaaaabbbbbbbbbaaaaaddaaaaaaadddddaaaaaaaaaaaabbbbbbbbbaaaaaddaaaaaaadddddaaaaaaaaaaaabbbbbbbbbaaaaa
            ddaaaaaaadddddaaaaaaaaaaaabbbbbbbbaaaaaaddaaaaaaadddddaaaaaaaaaaaabbbbbbbbaaaaaaddaaaaaaadddddaaaaaaaaaaaabbbbbbbbaaaaaaddaaaaaaadddddaaaaaaaaaaaabbbbbbbbaaaaaa
            adaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaa
            adaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaa
            adaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaa
            adaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaaadaaaaaaadddddaaaaaaaaaaabbbbbbbbbaaaaaa
            addaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaaddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaaddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaaddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaa
            addaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaaddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaaddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaaddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaa
            dddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaadddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaadddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaadddaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaa
            ddaaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaadddddaaaaaaaaaaabbbbbbbbaaaaaaa
            ddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaa
            ddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbbaaaaaaa
            ddaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaaddaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaa
            daaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaaddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaaad
            daaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadd
            daaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadddaaaaaaaaddddddaaaaaaaaaabbbbbbbaaaaaadd
            aaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaaddd
            aaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaaddd
            aaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaadddaaaaaaaaadddddddaaaaaaaaabbbbbbbaaaaaddd
            aaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddddaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddddaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddddaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaadddd
            aaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddddaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddddaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddddaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaadddd
            aaaaaaaaaddddddddaaaaaaaabbbbbbbaaaadddaaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaadddaaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaadddaaaaaaaaaaddddddddaaaaaaaabbbbbbbaaaaddd9
            aaaaaaaaaaddddddddaaaaaabbbbbbbbaaaadddaaaaaaaaaaaddddddddaaaaaabbbbbbbbaaaadddaaaaaaaaaaaddddddddaaaaaabbbbbbbbaaaadddaaaaaaaaaaaddddddddaaaaaabbbbbbbbaaaaddd9
            daaaaaaaaaddddddddaaaaaabbbbbbbbdddddddddaaaaaaaaaddddddddaaaaaabbbbbbbbdddddddddaaaaaaaaaddddddddaaaaaabbbbbbbbdddddddddaaaaaaaaaddddddddaaaaaabbbbbbbbdddddddd
            dddddaaaaaddddddddaaaaaabbbbbbbbbddddddddddddaaaaaddddddddaaaaaabbbbbbbbbddddddddddddaaaaaddddddddaaaaaabbbbbbbbbddddddddddddaaaaaddddddddaaaaaabbbbbbbbbddddddd
            ddddddddaadddddddddaaaddbbbbbbbbbdddddddddddddddaadddddddddaaaddbbbbbbbbbdddddddddddddddaadddddddddaaaddbbbbbbbbbdddddddddddddddaadddddddddaaaddbbbbbbbbbddddddd
            dddddddddddddddddddaddddbbbbbbbbbddddddddddddddddddddddddddaddddbbbbbbbbbddddddddddddddddddddddddddaddddbbbbbbbbbddddddddddddddddddddddddddaddddbbbbbbbbbddddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
            dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
            ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
            dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
            ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        tiles.setCurrentTilemap(tilemap`level9`)
        if (SiteEntrance == 0) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 14))
        } else if (SiteEntrance == 1) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 13))
        }
        game.splash("Area 0", "Crash Site")
        Area += 0.5
    } else if (Area == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
        scene.setBackgroundImage(img`
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666622226666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666622222222222226666666666666666666
            6666666666666666666666666666666666666666666666666666666666666222666666666666666666666666666666666666666666666666666666666666666622222222222226666666666666666666
            6666666666666666666666666666666666666666666666662222262222222222266666666666666666666666666666666666666666666666666666666666666622262226622226666666666666666666
            6666666666666666666666666666666666666666666666662222222222222222266666666666666666666666666666666666666666666666666666666666666622266226662266666666666666666666
            6666666666666666666666666666666666666666666666662222622222222222666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666662222662222222222666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666662222662222262222666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666662222666222266222666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666662226666222666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666662226666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666626622222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666622222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666622222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666622222622222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666622226622222262222266666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666662266662222262222666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666662266666222666226666666666666666666666666666666666666666666666666666666666666666666662222222222226666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666222222222222222222666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666222222222262222222666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666622262222266222226666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666622266222666222266666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666622266662666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666ff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            666666666666666666666666666666666666666666666666666666666666666666faaff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            66666666666666666666666666666ffff6666666666666666666666666666fffffaaaaaff66666666666666666666666666666fffffff666666666666666666666666666666666666ffffffffffff666
            66666666666666666666666666fffaaaafff6666666666666666666666fffccccccccccccf66666666666666666666666666ffaaaaaaaff6666666666666666666666666666666fffaaaaaaaaaaaf666
            666666666666666666666666ffcccaaaacccff6666666666666666666fccccccccccccccccf66666666666666666666666ffcccccccccccfff66666666666666666666666666ffccccccccccccaaf666
            6666666666666666666666ffccccccccccccccf66666666666666666fcccccccccccccccccf6666666666666666666666fccccccccccccccccf6666666666666666666666666fccccccccccccccccff6
            66666666666666666666ffccccccccccccccccf6666666666666666fcccccccccccccccccccf66666666666666666666ffcccccccccccccccccff6666666666666666666666fcccccccccccccccccccf
            6666666666666666666fcccccccccccccccccccff6666666666666fcccccccccccccccccccccf66666666666666666ffcccccccccccccccccccccff6666666666666666666fccccccccccccccccccccc
            666666666666666666fcccccccccccccccccccccff66666666666fccccccccccccccccccccccf666666666666666ffcccccccccccccccccccccccccff6666666666666666fcccccccccccccccccccccc
            66666666666666666fcccccccccccccccccccccccff666666666fccccccccccccccccccccccccf6666666666666fccccccccccccccccccccccccccccff6666666fffffffffcccccccccccccccccccccc
            666666666666666fccccccccccccccccccccccccccff666666ffcccccccccccccccccccccccccf66666666666ffcccccccccccccccccccccccccccccccfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
            ffffffffffffffffbccccccccccccccccccccccccccffffffffbccccccccccccccccccccccccccf66666666ffbbcccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbcccccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff666ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
        if (forestEntrance == 0) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 28))
        } else if (forestEntrance == 1) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 50))
        } else if (forestEntrance == 2) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(59, 35))
        } else if (forestEntrance == 3) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(29, 50))
            tiles.setTileAt(tiles.getTileLocation(26, 48), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(26, 49), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(26, 50), assets.tile`transparency16`)
            if (Checkpoint == 2) {
                tiles.setTileAt(tiles.getTileLocation(22, 51), assets.tile`myTile47`)
            }
        } else if (forestEntrance == 4) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(22, 51))
        }
        game.splash("Area 1", "The Endless Forest")
        Area += 0.5
    } else if (Area == 2) {
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(52, 20))
        game.splash("Area 2", "The Swamp")
        Area += 0.5
    } else if (Area == 3) {
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 17))
        game.splash("Area 3", "The Blazing Volcano")
        Area += 0.5
    } else if (Area == 4) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222fffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffff2fffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffff
            fffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffff
            ffff2ffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffff22ffffff22fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff22fffffffffffffffffffffffff2f2ffffffffffffffffffffffffffffffffffffffff22fffffffffff22ffffff22fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff22fffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222ffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ff2fffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffff
            fffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff
            ffffffffffffffffffffffffff22222222ffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff
            fffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffff2ffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
            ffffffffffffffffffff2fffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff2ffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff2fffffffffffffffffffff2fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff2fffffffffffffffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff2ffffffffffffffffffffff2ffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff2fffffffffffffffffffffff2ffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff2fffffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff2ffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffff
            fffff2ffffffffffffffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff2ffffffffffffffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffff
            fffff2fffffffffffffffffffffffffffffffffffffffff2ffffffff2ffffffffffffffffffff22ffffffffffffffffff2ffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffff
            ffff2fffffffffffffffffffffffffffffffffffffffffff2fffffff2ffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffff
            fff2ffffffffffffffffffffffffffffffffffffffffffff2fffffff2fffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffff
            fff2fffffffffffffffffffffffffffffffffffffffffffff2ffffff2fff2fffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffff
            ff2fffffffffffffffffffffffffffffffffffffffffffffff2ffffff222ffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffff
            ff2fffffffffffffffffffffffffffffffffffffffffffffff2fffffff222ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffff
            f2fffffffffffffffffffffffffffffffffffffffffffffffff2ffff22fffffffffffffffffffffffffffffffffffff2fffffffffffffff2fffffffffffff22f2fffffffffffffffffffffffffffffff
            f2ffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff2ffffffffff22fff2fffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff2ffffff2222fffff2fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff2f2222fffffffff2ffffffffffffffffffff2ffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffff2ffffffffffffffff2222fffffffffffff2fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffff2ffffffffff222222ffff222ffffffffff2fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff2ffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffff2222222222222222fffffffffffffffffffffff2fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffff2ffffffffffffffffff2ffffffffffff
            ffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff
            fffffffffffff222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff2fffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffff2fffffffffffffff2fffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffff2fffffffffffffff2fffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffff2ffffffffffffff2ffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2fffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff
            fffffffffffffffffff2fffffffffffffffff2fffffffffffffffffffffff2222fffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff
            ffffffffffffffffffff22ffffffff2ffffff2ffffffffffffffff2222222ffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff
            ffffffffffffffffffffff22fffff2222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffff
            ffffffffffffffffffffffff2ffff2ffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ff222ffffffffffffffff
            fffffffffffffffffffffffff22ff2fffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffff2222222fffffffffffffffffff
            fffffffffffffffffffffffffff2f22f222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222ffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222ffffffffffffffff2ffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffff2fffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffff22fff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        tiles.setCurrentTilemap(tilemap`level5`)
        if (volcanoEntrance == 0) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(48, 1))
        } else if (volcanoEntrance == 1) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(27, 4))
            tiles.setTileAt(tiles.getTileLocation(24, 26), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(24, 27), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(24, 28), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(24, 29), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(24, 30), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(24, 31), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(24, 32), assets.tile`transparency16`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.UndyingEnemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.Ghost)
        }
        game.splash("Area 4", "Inside The Volcano")
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.UndyingEnemy, effects.none, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.Ghost, effects.none, 500)
        if (claimed2 == 0) {
            itemStand = sprites.create(img`
                .....................
                ...bbbbbbbbbbbbb.....
                ..bbbbbbbbbbbbbbb....
                .bbbbbbbbbbbbbbbbb...
                .bbbbffc222cfffbbb...
                .bbbfffcccccffffbb.a.
                .bbbfffffffffffbbb...
                .bbbbfffffffffbbbb...
                .bbbbbfffbbbbbbbbb...
                .bbbbbfffbbbbbbbbb...
                .bbbbbfffbbbbbbbbb...
                .bbbbbfffbbbbbbbbb...
                ..bbbbbfbbbbbbbbb....
                ...bbbbbbbbbbbbb.....
                .....................
                `, SpriteKind.Pickup)
            tiles.placeOnTile(itemStand, tiles.getTileLocation(1, 31))
        }
        Area += 0.5
    } else if (Area == 5) {
        tiles.setCurrentTilemap(tilemap`level12`)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        if (ghostEntrance == 0) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(30, 1))
        } else if (ghostEntrance == 1) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(32, 3))
        }
        game.splash("Area 5", "Ghost Hideout")
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.UndyingEnemy, effects.none, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.Ghost, effects.none, 500)
        Area += 0.5
        Ghost1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 f f 1 1 f f 1 1 . . . 
            . . . 1 1 f f 1 1 f f 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 . 1 . 1 . 1 . 1 . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Ghost)
        Ghost2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 f f 1 1 f f 1 1 . . . 
            . . . 1 1 f f 1 1 f f 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 . 1 . 1 . 1 . 1 . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Ghost)
        tiles.placeOnTile(Ghost1, tiles.getTileLocation(20, 16))
        tiles.placeOnTile(Ghost2, tiles.getTileLocation(9, 16))
        Ghost1.setFlag(SpriteFlag.GhostThroughWalls, true)
        Ghost2.setFlag(SpriteFlag.GhostThroughWalls, true)
        Ghost1.follow(mySprite, 70)
        Ghost2.follow(mySprite, 65)
    }
    pause(100)
})
forever(function () {
    if (beingHuanted == 1) {
        hauntingGhost.follow(mySprite, 150)
        hauntingGhost.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
    pause(100)
})
game.onUpdateInterval(500, function () {
    scene.followPath(Common_Alien, scene.aStar(Common_Alien.tilemapLocation(), mySprite.tilemapLocation()), 50)
    if (Area == 3 || Area == 3.5) {
        scene.followPath(Blazers, scene.aStar(Blazers.tilemapLocation(), mySprite.tilemapLocation()), 70)
    }
})
