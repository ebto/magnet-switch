motobit.enable(MotorPower.On)
basic.showString("magnet")
basic.pause(1000)
motobit.enable(MotorPower.Off)
basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.Yes)
        motobit.enable(MotorPower.On)
        basic.pause(1000)
        motobit.enable(MotorPower.Off)
        basic.clearScreen()
    }
})
