basic.showString("cool")
music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
music.setBuiltInSpeakerEnabled(false)
basic.showNumber(input.lightLevel())
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
