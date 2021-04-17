motobit.enable(MotorPower.On)
basic.showString("magnet")
basic.pause(1000)
motobit.enable(MotorPower.Off)
basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        motobit.enable(MotorPower.On)
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        motobit.enable(MotorPower.Off)
        basic.clearScreen()
    }
})
